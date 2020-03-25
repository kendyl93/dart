import React, { useState } from "react"
import "./App.css"

import PlayerScore from "./Player/PlayerScore"

const DEFAPULT_PLAYERS = {
  player1ID: { name: "Pawel" },
  player2ID: { name: "Karolina" },
  player3ID: { name: "Kuba" }
}

const indexOfNextActivePlayer = (playersId, currentActivePlayerId) =>
  playersId.indexOf(currentActivePlayerId) + 1

function App() {
  const playersId = Object.keys(DEFAPULT_PLAYERS)
  const [firstPlayer] = playersId
  const [activePlayer, setActivePlayer] = useState(firstPlayer)
  const playersCount = playersId.length

  const handleNextActivePlayer = () => {
    const nextActivePlayerIndex = indexOfNextActivePlayer(
      playersId,
      activePlayer
    )
    const currentPlayerMaybeLast = nextActivePlayerIndex === playersCount

    if (currentPlayerMaybeLast) {
      return setActivePlayer(firstPlayer)
    }

    setActivePlayer(playersId[nextActivePlayerIndex])
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dart</h1>
      </header>
      <main>
        {Object.entries(DEFAPULT_PLAYERS).map(([playerId, { name }]) => (
          <PlayerScore
            key={playerId}
            playerName={name}
            active={playerId === activePlayer}
            setActivePlayer={handleNextActivePlayer}
          />
        ))}
      </main>
    </div>
  )
}

export default App
