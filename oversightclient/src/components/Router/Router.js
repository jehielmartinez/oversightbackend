import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import Testpage from '../Testpage';

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
                   <Route
                        exact
                        path='/test'
                        component={Testpage}
                   />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;