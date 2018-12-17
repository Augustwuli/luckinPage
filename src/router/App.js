import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Index from '@/page/index'
import SiteDetails from '@/page/site/details'
import OtherFather from '@/page/other/father'
import OtherImage from '@/page/other/imgshow'

export default class App extends Component {
  render () {
    return (
      <Router basename="/">
        <Switch>
          <Route exact path='/' component={Index} />
          <Route exact path='/details/:id' component={SiteDetails}/>
          <Route exact path='/father' component={OtherFather}/>
          <Route exact path='/imgshow' component={OtherImage}/>
        </Switch>
      </Router>
    )
  }
}