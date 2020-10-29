import React from 'react'
import clsx from 'clsx'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Container from '@material-ui/core/Container'

import AppMenu from './AppMenu'
import Pages from '../pages/index'

const MainPage: React.FC = () => {
  const classes = useStyles()

  return (
    <BrowserRouter>
      <div className={clsx('App', classes.root)}>
        <CssBaseline />
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <AppMenu />
        </Drawer>
        <main className={classes.content}>
          <Container maxWidth="lg" className={classes.container}>

            <Switch>
              <Route path="/" exact component={Pages.PageBasicInfo} />
              <Route path="/general-info" component={Pages.PageGeneralInfo} />
              <Route path="/content-sources" component={Pages.PageContentSource} />
            </Switch>

          </Container>
        </main>
      </div>
    </BrowserRouter>
  )
}

const drawerWidth = 230

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: `calc(100% - ${144}px)`,
    borderTop: '1px solid #ABB3B7',
    position: "absolute",
    top: '144px',
    width: '100%'
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    // paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    background: '#45565E',
    color: '#fff',
  },
  content: {
    flexGrow: 1,
    height: '100%',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}))

export default MainPage
