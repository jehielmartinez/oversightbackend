import React, { Component } from 'react';
import Router from './components/Router/Router';
import ReactGA from 'react-ga';

class App extends Component {

  initializeReactGA() {
      ReactGA.initialize('UA-139384535-1');
      ReactGA.pageview(window.location.pathname + window.location.search);
  }
  render() {
    this.initializeReactGA()
    return (
      <Router/>
    );
  }
}

export default App;
