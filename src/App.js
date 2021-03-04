import React from "react"
import Features from "./component/Features"
import ChatList from "./component/ChatList"
import ChatArea from "./component/ChatArea"
import "./App.css"

function App() {
  return (
    <div className="main-div">
      <Features className="Feature-section" />
      <ChatList className="ChatList-section" />
      <ChatArea className="ChatArea-section" />
    </div>
  )
}
export default App
