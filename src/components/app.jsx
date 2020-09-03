import React from 'react';
import MessageList from '../containers/message_list';
import ChannelList from '../containers/channel_list';

const App = () => {
  return (
    <div className="app col-md-12" style={{ border: '5px solid blue', height: "100vh" }}>
       <ChannelList />
       <MessageList />
    </div>
  );
};

export default App;
