import React from "react"
import "./App.css"

import PlayerScore from "./Player/PlayerScore"

const Players = ["Pawel", "Karolina", "Kuba"]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dart</h1>
      </header>
      <main>
        {Players.map(playerName => (
          <PlayerScore playerName={playerName} />
        ))}
      </main>
    </div>
  )
}

export default App
