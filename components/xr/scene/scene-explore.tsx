import React, { useEffect, useState } from 'react'
// @ts-ignore
import { Scene, Entity } from 'aframe-react'
import Assets from './assets'
import Environment from './environment'
import Player from '../player/player'
import './style.scss'
import SvgVr from '../../icons/svg/Vr'

// eslint-disable-next-line no-unused-vars
import { PublicVideo } from '../../../redux/video/actions'

import AframeComponentRegisterer from '../aframe/index'

// eslint-disable-next-line no-unused-vars
import { bindActionCreators, Dispatch } from 'redux'

import { connect } from 'react-redux'
import { selectVideoState } from '../../../redux/video/selector'
import { fetchPublicVideos } from '../../../redux/video/service'

interface VideoProps {
  videos: any,
  fetchPublicVideos: typeof fetchPublicVideos
}

interface CellData {
  title: string,
  description: string,
  videoformat: string,
  mediaUrl: string,
  thumbnailUrl: string
}

interface ExploreState {
  focusedCellEl: HTMLElement | null,
  focusedCell: CellData | null
}

const mapStateToProps = (state: any) => {
  return {
    videos: selectVideoState(state)
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchPublicVideos: bindActionCreators(fetchPublicVideos, dispatch)
})

function ExploreScene (props: VideoProps): any {
  const { videos, fetchPublicVideos } = props

  const [exploreState, setExploreState] = useState<ExploreState>({ focusedCellEl: null, focusedCell: null })

  const focusCell = (event: any) => {
    const focusCellEl = event.originalTarget.parentEl
    setExploreState({
      focusedCellEl: event.originalTarget.parentEl,
      focusedCell: {
        title: (event.originalTarget.parentEl.attributes as any).title.value,
        description: (event.originalTarget.parentEl.attributes as any).description,
        videoformat: (focusCellEl.attributes as any).videoformat.value,
        mediaUrl: (focusCellEl.attributes as any)['media-url'].value,
        thumbnailUrl: (focusCellEl.attributes as any)['thumbnail-url'].value
      }
    })
  }

  const unFocusCell = () => {
    setExploreState({ focusedCellEl: null, focusedCell: null })
  }

  const watchVideo = () => {
    if (exploreState.focusedCellEl === null) return
    const url = exploreState.focusedCell?.mediaUrl
    const title = exploreState.focusedCell?.title
    const videoformat = exploreState.focusedCell?.videoformat
    window.location.href = 'video360?manifest=' + url +
      '&title=' + title +
      // '&runtime=' + runtime +
      // '&credit=' + productionCredit +
      // '&rating=' + rating +
      // '&categories=' categories.join(',') +
      // '&tags=' + tags.join(',') +
      '&videoformat=' + videoformat
  }

  useEffect(() => {
    if (videos.get('videos').size === 0) {
      fetchPublicVideos()
    }
    document.addEventListener('watchbutton', watchVideo)
    document.addEventListener('backbutton', unFocusCell)
    return () => {
      document.removeEventListener('watchbutton', watchVideo)
      document.removeEventListener('backbutton', unFocusCell)
    }
  }, [watchVideo, unFocusCell])

  return (
    <Scene
      vr-mode-ui="enterVRButton: #enterVRButton"
      class="scene"
      renderer="antialias: true"
      background="color: #FAFAFA"
    >
      <AframeComponentRegisterer />
      <Entity position="0 1.6 0">
        <Entity
          primitive="a-grid"
          rows={5}
          colunns={6}>

          {videos.get('videos').map(function (video: PublicVideo, i: number) {
            return (
              <Entity
                key={i}
                id={'explore-cell-' + i}
                primitive="a-media-cell"
                // original-title={video.original_title}
                title={video.name}
                description={video.description}
                media-url={video.url}
                thumbnail-url={video.metadata.thumbnail_url || '#placeholder'}
                // production-credit={video.production_credit}
                // rating={video.rating}
                // categories={video.categories}
                // runtime={video.runtime}
                // tags={video.tags}
                cellHeight={0.6666}
                cellWidth={1}
                cellContentHeight={0.5}
                mediatype="video360"
                videoformat={video.metadata['360_format']}
                link-enabled={false}
                class="clickable"
                events={{
                  click: focusCell
                }}
              ></Entity>
            )
          })}

        </Entity>
        { exploreState.focusedCellEl !== null &&
          <Entity
            position="0 0 -1.5">
            <Entity
              id="focused-cell"
              primitive="a-video-details"
              mediatype="video360"
              title={exploreState.focusedCell?.title}
              description={exploreState.focusedCell?.description}
              videoformat={exploreState.focusedCell?.videoformat}
              media-url={exploreState.focusedCell?.mediaUrl}
              thumbnail-url={exploreState.focusedCell?.thumbnailUrl}
              class="clickable">
            </Entity>
          </Entity>
        }
      </Entity>
      <Assets />
      <Player />
      <Environment />
      <a className="enterVR" id="enterVRButton" href="#">
        <SvgVr className="enterVR" />
      </a>
    </Scene>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExploreScene)
