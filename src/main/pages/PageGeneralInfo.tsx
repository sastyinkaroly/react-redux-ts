import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const PageGeneralInfo: React.FC = () => {
  const classes = useStyles()

  return (
    <div>
        <Typography variant="h3" component="h1" className={classes.title}>General Infomation</Typography>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  root: {},
  title: {
    fontSize: '24px',
    fontFamily: 'NeuzeitFont',
    fontWeight: 'lighter',
  }
}))

export default PageGeneralInfo
