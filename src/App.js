import React from "react"

import CreateGameView from "./Game/CreateGameView"

import "./App.css"

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Create game</h1>
      </header>
      <CreateGameView />
    </div>
  )
}

export default App
