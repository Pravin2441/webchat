import React from "react";
import Profile from "./profile";
import Search from "./search";
const ChatList = () => {
  return (
    <div className="ChatList" id="style1">
      <div className="newChat">
        <h2>Chat</h2>
        <button>+</button>
      </div>
      <Search />

      <div className="chat">
        <Profile>
          <h1>Click here to Chat</h1>
        </Profile>
      </div>
    </div>
  );
};
export default ChatList;
