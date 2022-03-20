import React from 'react';
import Chatbot from 'react-chatbot-kit';
import './App.css';
import Config from './chatbot/Config'
import MessageParser from './chatbot/MessageParser';
import ActionProvider from './chatbot/ActionProvider';


function App() {
  return (
    <div className="Chat_Bot">
          {/* <div> */}
          <div style={{maxWidth: "300px"}}>
    <Chatbot 
    config={Config}
    actionProvider={ActionProvider} 
    messageParser={MessageParser} />
    </div>
          {/* </div> */}
    </div>
  );
}

export default App;
