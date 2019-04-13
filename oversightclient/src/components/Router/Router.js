import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Header from '../Header/Header';
import LandingPage from '../LandingPage/LandingPage';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header/>
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