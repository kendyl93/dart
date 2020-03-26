import React, { useState } from "react"
import styled from "styled-components"

import PlayerScore from "../Player/PlayerScore"
import CreateGameView from "./CreateGameView"

const CurrentLegScoreBoard = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const DEFAPULT_PLAYERS = {
  player1ID: { name: "Pawel" },
  player2ID: { name: "Karolina" },
  player3ID: { name: "Kuba" }
}

const indexOfNextActivePlayer = (playersId, currentActivePlayerId) =>
  playersId.indexOf(currentActivePlayerId) + 1

const GameView = () => {
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
    <div>
      <header className="App-header">
        <h1>Dart</h1>
      </header>
      <main>
        <h2>Current Leg</h2>
        <CurrentLegScoreBoard>
          {Object.entries(DEFAPULT_PLAYERS).map(([playerId, { name }]) => {
            const maybeCurrentPlayerActive = playerId === activePlayer

            return (
              <PlayerScore
                key={playerId}
                playerName={name}
                active={maybeCurrentPlayerActive}
                setActivePlayer={handleNextActivePlayer}
              />
            )
          })}
        </CurrentLegScoreBoard>
      </main>
    </div>
  )
}

export default GameView
