import React from "react";
import Profile from "./profile";
import Search from "./search";
import vijay from './profile/vijay.jpg'
const ChatList = () => {
  return (
    <div className="ChatList" id="style1">
      <div className="newChat">
        <h2>Chat</h2>
        <button>+</button>
      </div>
      <Search />

      
      <div className="chat">
        <Profile name='Vijay'/>
      </div>
     
    </div>
  );
};
export default ChatList;
