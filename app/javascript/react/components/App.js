import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom"
import DiverContainer from './DiverContainer'
import SiteTile from './SiteTile'
import SiteIndexContainer from './SiteIndexContainer'
import DiverTile from './DiverTile'

export const App = (props) => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SiteIndexContainer}/>
      <Route exact path="/users/:id" component={DiverContainer}/>
      <Route exact path="/sites" component={SiteTile}/>
      <Route exact path="/divers" component={DiverContainer}/>
    </Switch>
    </BrowserRouter>
  )
}

export default App
