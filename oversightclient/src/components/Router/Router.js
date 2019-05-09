import React, { Component } from 'react';
import {Redirect, Route, Switch, BrowserRouter} from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Redirect exact from='/' to='/landing'/>
                    <Route
                        exact
                        path='/landing'
                        component={LandingPage}
                   />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;