import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import Complaint from './Complaint';


class ListComplaint extends Component {
    state={
        endpoint: 'http://localhost:4000',
        complaints: [],
        newComplaint: {}
      }
      socket = socketIOClient(this.state.endpoint);
    
      componentDidUpdate(prevProps, prevState){
        if (prevState.newComplaint !== this.state.newComplaint) {
          this.state.complaints.push(this.state.newComplaint);
        }
      }

    render() {
        this.socket.on('newComplaint', complaint => {
            this.setState({
              newComplaint : complaint
            })
          });
        
        return (
            <div class="container">
               <Complaint
                    complaint={this.state.newComplaint}
               />
            </div>
        );
    }
}

export default ListComplaint;