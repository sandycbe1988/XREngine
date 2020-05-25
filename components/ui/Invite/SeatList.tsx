import React, { useEffect, useState } from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'
import { selectAuthState } from '../../../redux/auth/selector'
import { User } from '../../../interfaces/User'
import { Seat } from '../../../interfaces/Seat'
import { TextField, Button } from '@material-ui/core'
import SeatItem from './SeatItem'
import { Dispatch, bindActionCreators } from 'redux'
import { selectSeatState } from '../../../redux/seats/selector'
import NextLink from 'next/link'
import {
  inviteUser,
  getSeats
} from '../../../redux/seats/service'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      padding: '10px'
    },
    section1: {
      padding: theme.spacing(3)
    },
    inviteBox: {
      'margin-top': '10px',
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center'
    },
    inputBox: {
      'margin-right': '20px'
    },
    header: {
      display: 'flex',
      'justify-content': 'space-between'
    }
  })
)

interface Props {
  seatState: any
  authState: any
  classes: any,
  getSeats: typeof getSeats,
  inviteUser: typeof inviteUser
}

const mapStateToProps = (state: any) => {
  return {
    seatState: selectSeatState(state),
    authState: selectAuthState(state)
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getSeats: bindActionCreators(getSeats, dispatch),
  inviteUser: bindActionCreators(inviteUser, dispatch)
})

const SeatList = (props: Props) => {
  const { classes, seatState, authState } = props
  const initialState = {
    userId: undefined,
    updateNeeded: false,
    inviteField: ''
  }
  const [state, setState] = useState(initialState)

  const inviteUser = () => {
    props.inviteUser(state.inviteField, props.authState.get('user').subscription.id)
    setState({
      ...state,
      inviteField: ''
    })
  }

  const updateField = (e: any) => {
    setState({
      ...state,
      inviteField: e.target.value
    })
  }

  const pending = seatState.get('seats').filter((seat: Seat) => seat.seatStatus === 'pending')
  const filled = seatState.get('seats').filter((seat: Seat) => seat.seatStatus === 'filled')
  const subscription = authState.get('user').subscription

  // eslint-disable-next-line camelcase
  useEffect(() => {
    const user = authState.get('user') as User
    console.log(authState)
    console.log(seatState.get('updateNeeded'))

    if (authState.get('user').subscription && seatState.get('updateNeeded') === true) {
      console.log('Calling props.getSeats')
      props.getSeats()
    }

  }, [seatState])

  return (
    <div className={classes.root}>
      <div className={classes.section1}>
        <Grid container alignItems="center">
          <Grid item xs className={classes.header}>
            <Typography variant="h4">
              Subscription Seats
            </Typography>
            <Typography variant="h4">
              <NextLink href="/">
                Home
              </NextLink>
            </Typography>
          </Grid>
        </Grid>
      </div>

      <Divider variant="middle" />
      {subscription != null && <Grid container>
        <Grid item
          xs
          className={classes.inviteBox}
        >
          <TextField
            label="Invite users by email"
            type="search"
            variant="outlined"
            className={classes.inputBox}
            value={state.inviteField}
            onChange={(e) => updateField(e)}
            onKeyDown={(e) => e.keyCode === 13 ? inviteUser() : null}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={inviteUser}
          >
            Invite User
          </Button>
        </Grid>
      </Grid>
      }

      { subscription != null && pending && pending.length > 0 &&
      pending.map((seat) => {
        return <SeatItem key={'pending_' + seat.id} seat={seat}/>
      })
      }
      { subscription != null && filled && filled.length > 0 &&
      filled.map((seat) => {
        return <SeatItem key={'filled_' + seat.id} seat={seat}/>
      })
      }
    </div>
  )
}

function MyFriendsWrapper(props: any) {
  const classes = useStyles()

  return (
    <SeatList {...props} classes={classes}/>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyFriendsWrapper)
