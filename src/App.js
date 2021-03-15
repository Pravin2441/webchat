import React from "react";
import Features from "./component/Features";
import ChatList from "./component/ChatList";
import ChatArea from "./component/ChatArea";
import "./App.css";
import "./responsive.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import login from "./login";

function App() {
  return (
    <div className="main-div">
      <Features />
      <ChatList />
      <ChatArea />
    </div>
  );
}

export default App;
