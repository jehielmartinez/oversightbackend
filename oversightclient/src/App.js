import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';

class App extends Component {

  state={
    endpoint: 'localhost:4000',
    // endpoint: `${window.location.hostname}`,
    complaints: []
  }

  socket = socketIOClient(this.state.endpoint);

  render() {

    this.socket.on('newComplaint', complaint => {
      this.setState({
        complaints: complaint
      })
    });

    return (
      <div>
        <h1>This works!</h1>
      </div>
    );
  }
}

export default App;
