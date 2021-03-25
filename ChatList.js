import React from "react";
import Profile from "./profile";
import Search from "./search";
import save from './profile/save.png'
const ChatList = () => {
  return (
    <div className="ChatList" id="style1">
      <div className="newChat">
        <h2>Chat</h2>
        <button>+</button>
      </div>
      <Search />

      
      <div className="chat">
        <Profile name='Save' img={save} onClick=''/>
      </div>
      
     
    </div>
  );
};
export default ChatList;
