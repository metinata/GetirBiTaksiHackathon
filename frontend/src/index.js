import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import store from './store'
import * as Layouts from './layout'
import { routes } from './routes'

ReactDOM.render(
    <Provider store={store()}>
        <BrowserRouter>
            <Switch>
                <Route path='/admin' component={Layouts.Default(routes.adminView)} />
                <Route path='/success' component={Layouts.Default(routes.successView)} />
                <Route path='/order' component={Layouts.Default(routes.orderView)} />
                <Route path='/' component={Layouts.Default(routes.homeView)} />
                <Redirect from='*' to='/' />
            </Switch>
        </BrowserRouter>
    </Provider>, document.getElementById('root')
);