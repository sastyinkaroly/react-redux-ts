import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import AppMenuItemComponent from './AppMenuItemComponent'

// React runtime PropTypes
export const AppMenuItemPropTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
  items: PropTypes.array,
}

// TypeScript compile-time props type, infered from propTypes
// https://dev.to/busypeoples/notes-on-typescript-inferring-react-proptypes-1g88
type AppMenuItemPropTypes = PropTypes.InferProps<typeof AppMenuItemPropTypes>
type AppMenuItemPropsWithoutItems = Omit<AppMenuItemPropTypes, 'items'>

// Improve child items declaration
export type AppMenuItemProps = AppMenuItemPropsWithoutItems & {
  items?: AppMenuItemProps[]
}

const AppMenuItem: React.FC<AppMenuItemProps> = props => {
  const { name, link, items = [] } = props
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  function handleClick() {
    setOpen(!open)
  }

  const MenuItemRoot = (
    <AppMenuItemComponent className={classes.menuItem} link={link} onClick={handleClick}>
      <p className={classes.listText}>{name}</p>
    </AppMenuItemComponent>
  )

  return (
    <>
      {MenuItemRoot}
    </>
  )
}

const useStyles = makeStyles(theme =>
  createStyles({
    menuItem: {
      '&.active': {
        background: 'rgba(0, 0, 0, 0.08)',
        '& .MuiListItemIcon-root': {
          color: '#fff',
        },
      },
      padding: '0px',
      margin: '10px 0px 0px'
    },
    menuItemIcon: {
      color: '#97c05c',
    },
    listText: {
      fontSize: '16px',
      fontFamily: 'NeuzeitFont',
      fontWeight: 'lighter',
      padding: '6px 0px 0px'
    }
  }),
)

export default AppMenuItem
