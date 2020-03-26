import React, { useEffect, useState } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import styled from "styled-components"

import PlayerScore from "../Player/PlayerScore"
import { getPlayers } from "../stores/game/gameReducer"
import { fetchPlayers } from "../stores/game/gameEffect"

const CurrentLegScoreBoard = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const indexOfNextActivePlayer = (playersId, currentActivePlayerId) => {
  return playersId.indexOf(currentActivePlayerId) + 1
}

const GameView = ({ action: { fetchPlayers }, players }) => {
  const [firstPlayer] = players
  const [activePlayer, setActivePlayer] = useState(firstPlayer.id)
  const playersIds = players.map(({ id }) => id)
  const playersCount = playersIds.length

  useEffect(() => {
    fetchPlayers()
  })

  const handleNextActivePlayer = () => {
    const nextActivePlayerIndex = indexOfNextActivePlayer(
      playersIds,
      activePlayer
    )
    const currentPlayerMaybeLast = nextActivePlayerIndex === playersCount

    if (currentPlayerMaybeLast) {
      return setActivePlayer(firstPlayer.id)
    }

    setActivePlayer(playersIds[nextActivePlayerIndex])
  }

  return (
    <div>
      <header className="App-header">
        <h1>Dart</h1>
      </header>
      <main>
        <h2>Current Leg</h2>
        <CurrentLegScoreBoard>
          {players.map(({ name, id }) => {
            const maybeCurrentPlayerActive = id === activePlayer

            return (
              <PlayerScore
                key={id}
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

const mapStateToProps = ({ gameData }) => ({ players: getPlayers(gameData) })

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators({ fetchPlayers }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(GameView)
