import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Router from './components/Router/Router';
import socketIOClient from 'socket.io-client';


class App extends Component {

  state={
    endpoint: 'localhost:4000',
    // endpoint: `${window.location.hostname}`,
    complaints: [],
    newComplaint: {}
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.newComplaint !== this.state.newComplaint) {
      this.state.complaints.push(this.state.newComplaint);
    }
  }

  socket = socketIOClient(this.state.endpoint);

  render() {

    this.socket.on('newComplaint', complaint => {
      this.setState({
        newComplaint : complaint
      })
    });

    return (
     <BrowserRouter>
      <Router />
     </BrowserRouter>
    );
  }
}

export default App;