import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route
                        exact
                        path='/'
                        component={LandingPage}
                   />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;