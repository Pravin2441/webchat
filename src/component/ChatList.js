import React from "react";
import logo from "./profile/walter.jpg";
const ChatList = () => {
  return (
    <div className="ChatList" id="style1">
      <div className="chat">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Vijay</h2>
        <p>Tap to Chat</p>
      </div>
    </div>
  );
};
export default ChatList;
