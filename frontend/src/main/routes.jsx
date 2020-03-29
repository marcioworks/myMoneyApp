import React from 'react'
import { Router, Route, Redirect, IndexRoute, hashHistory } from 'react-router'

import App from './app' 
import BillingCycle from '../billingCycle/billingCycle'
import Dashboard from '../dashboard2/dashboard2'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Dashboard} />
            <Route path='billingCycles' component={BillingCycle} />
        </Route>

        <Redirect from='*' to='/' />
    </Router>
)