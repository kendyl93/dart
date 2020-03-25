import React from "react"
import "./App.css"

import PlayerScore from "./Player/PlayerScore"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dart</h1>
      </header>
      <section>
        <PlayerScore />
      </section>
    </div>
  )
}

export default App
