import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'

import AppMenuItem from './AppMenuItem'

const appMenuItems = [
  {
    title: "Your Preferences",
    children: [
      {
        name: 'Basic Information',
        link: '/',
      },
    ]
  },
  {
    title: "Company Defaults",
    children: [
      {
        name: 'General Info',
        link: '/general-info',
      },
      {
        name: 'Content Sources',
        link: '/content-sources',
      }, 
    ]
  },
]

const AppMenu: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
        {appMenuItems.map((item, index) => (
            <div key={index}>
                <p className={classes.title}>{item.title}</p>
                <List component="nav" className={classes.appMenu} disablePadding>
                    {item.children.map((itemChild, indexChild) => (
                        <AppMenuItem {...itemChild} key={indexChild} />
                    ))}
                </List>
                <hr className={classes.underline} />
            </div>
        ))}
    </div>
  )
}

const drawerWidth = 240

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      padding: '0px 30px'
    },
    title: {
      fontSize: '16px',
      fontFamily: 'NeuzeitFont',
      fontWeight: 'bold',
      paddingTop: '20px'
    },
    appMenu: {
      width: '100%',
    },
    navList: {
      width: drawerWidth,
    },
    menuItem: {
      width: drawerWidth,
    },
    menuItemIcon: {
      color: '#97c05c',
    },
    underline: {
      border: '1px solid #ABB3B7',
      marginTop: '16px'
    }
  }),
)

export default AppMenu
