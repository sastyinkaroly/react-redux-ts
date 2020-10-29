import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const Title: React.FC = () => {
  const classes = useStyles()

  return (
    <p className={classes.root}>
        Settings
    </p>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    top: '70px',
    left: '47px',
    width: '139px',
    height: '40px',
    textAlign: 'left',
    fontSize: '40px',
    fontFamily: 'NeuzeitFont',
    fontWeight: 'bold',
    position: "absolute",
    letterSpacing: '0px',
    color: '#45565E',
    opacity: 1
  }
}))

export default Title
