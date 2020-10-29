import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const Header: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
        <img src={require('../assets/Trip_Ninja_Logo.png')} className={classes.logo} alt="logo png" />
        <div className={classes.flightSearch}>
            Flight Search
        </div>
        <div className={classes.bookings}>
            Bookings
        </div>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '54px',
    width: '100%',
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    boxShadow: '0px 3px 6px #00000029',
    opacity: 1
  },
  logo: {
    top: '9px',
    left: '13px',
    width: '106px',
    height: '32px',
    position: "absolute",
    opacity: 1
  },
  flightSearch: {
    top: '14px',
    left: '162px',
    width: '100px',
    height: '16px',
    color: '#45565E',
    textAlign: 'left',
    fontSize: '16px',
    fontFamily: 'NeuzeitFont',
    fontWeight: 'bold',
    position: "absolute",
    letterSpacing: '0px',
    opacity: 1,
  },
  bookings: {
    top: '14px',
    left: '301px',
    width: '64px',
    height: '16px',
    color: '#45565E',
    fontSize: '16px',
    fontFamily: 'NeuzeitFont',
    fontWeight: 'bold',
    position: "absolute",
    letterSpacing: '0px',
    opacity: 1
  }
}))

export default Header
