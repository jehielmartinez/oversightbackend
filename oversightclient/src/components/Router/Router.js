import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Header from '../Header/Header';
import ListComplaint from '../ListComplaint/ListComplaint';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header/>
                <Switch>
                   <Route
                        exact
                        path='/list'
                        component={ListComplaint}
                   />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;