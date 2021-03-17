import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@material-ui/core';
import { NavigateNext, NavigateBefore, Check, ArrowBack, PersonAdd } from '@material-ui/icons';
// @ts-ignore
import styles from '../style.module.scss';
import { LazyImage } from '../../LazyImage';
import { Views } from '../util';

const AvatarMenu = (props: any): any => {
	const MAX_AVATARS_PER_PAGE = 6;
	const MIN_AVATARS_PER_PAGE = 4;

	const getAvatarPerPage = () => window.innerWidth > 768 ? MAX_AVATARS_PER_PAGE : MIN_AVATARS_PER_PAGE;

	const [ page, setPage ] = useState(0);
	const [ imgPerPage, setImgPerPage ] = useState(getAvatarPerPage());
	const [ selectedAvatarId, setSelectedAvatarId ] = useState(''); 
	const [ isAvatarLoaded, setAvatarLoaded ] = useState(false);

	useEffect((() => {
		function handleResize() {
			setImgPerPage(getAvatarPerPage());
		}

		window.addEventListener('resize', handleResize);

		return _ => {
			window.removeEventListener('resize', handleResize)
		};
	}) as any);

	useEffect(() => {
		props.fetchAvatarList();
	}, [isAvatarLoaded]);

	const loadNextAvatars = (e) => {
		e.preventDefault();
		if ((page + 1) * imgPerPage >= props.avatarList.length) return;
		setPage(page + 1);
	}
	const loadPreviousAvatars = (e) => {
		e.preventDefault();
		if (page === 0) return;
		setPage(page - 1);
	}

	const selectAvatar = (avatarResources: any) => {
		const avatar = avatarResources.avatar;
		setSelectedAvatarId(avatar.name);
		if (props.avatarId !== avatar.name) {
			props.setAvatar(avatar.name, avatar.url, avatarResources['user-thumbnail'].url);
		}
	}

	const closeMenu = (e) => {
		e.preventDefault();
		props.changeActiveMenu(null);
	}

	const openProfileMenu = (e) => {
		e.preventDefault();
		props.changeActiveMenu(Views.Profile);
	}

	const openAvatarSelectMenu = (e) => {
		e.preventDefault();
		props.changeActiveMenu(Views.AvatarUpload);
	}

	const renderAvatarList = () => {
		const avatarList = [];
		const startIndex = page * imgPerPage;
		const endIndex = Math.min(startIndex + imgPerPage, props.avatarList.length);

		for (let i = startIndex; i < endIndex; i++) {
			const characterAvatar = props.avatarList[i];
			avatarList.push(
				<Card
					key={characterAvatar.avatar.id}
					className={`
						${styles.avatarPreviewWrapper}
						${characterAvatar.avatar.name === props.avatarId ? styles.activeAvatar : ''}
						${characterAvatar.avatar.name === selectedAvatarId ? styles.selectedAvatar : ''}
					`}>
					<CardContent onClick={() => selectAvatar(characterAvatar)}>
						<LazyImage
							key={characterAvatar.avatar.id}
							src={characterAvatar['user-thumbnail'].url}
							alt={characterAvatar.avatar.name}
						/>
					</CardContent>
				</Card>
			)
		}

		return avatarList;
	}
	return (
		<div className={styles.avatarPanel}>
			<section className={styles.avatarContainer}>
				{renderAvatarList()}
			</section>
			<section className={styles.controlContainer}>
				<button type="button" className={`${styles.iconBlock} ${page === 0 ? styles.disabled : ''}`} onClick={loadPreviousAvatars}>
					<NavigateBefore />
				</button>
				<div className={styles.actionBlock}>
					<button type="button" className={styles.iconBlock} onClick={openProfileMenu}>
						<ArrowBack />
					</button>
					<button type="button" className={styles.iconBlock} onClick={closeMenu}>
						<Check />
					</button>
					<button type="button" className={styles.iconBlock} onClick={openAvatarSelectMenu}>
						<PersonAdd />
					</button>
				</div>
				<button type="button" className={`${styles.iconBlock} ${(page + 1) * imgPerPage >= props.avatarList.length ? styles.disabled : ''}`} onClick={loadNextAvatars}>
					<NavigateNext />
				</button>
			</section>
		</div>
	);
};

export default AvatarMenu;