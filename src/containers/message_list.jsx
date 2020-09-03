import React, { Component } from 'react';
import Message from '../components/message';

class MessageList extends Component {
  render() {
    return (
      <div className="col-md-8" style={{ border: '5px solid black' }}>
        <Message />
      </div>
    )
  }
}

export default MessageList;
