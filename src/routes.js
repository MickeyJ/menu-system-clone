import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import Layout from './layout'
import Landing from './pages/Landing'

const Routes = () =>(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Landing}/>
    </Route>
  </Router>
);

export default Routes