import React, { Fragment, useEffect, useState } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import styled from "styled-components"

import PlayerScore from "../Player/PlayerScore"
import { getPlayers } from "../stores/game/gameReducer"
import { fetchPlayers } from "../stores/game/gameEffect"

import { getPlayersIds } from "../utils/players"
import { any, none } from "../utils/array"

const CurrentLegScoreBoard = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const indexOfNextActivePlayer = (playersId, currentActivePlayerId) =>
  playersId.indexOf(currentActivePlayerId) + 1

const GameView = ({ action: { fetchPlayers }, players }) => {
  const [{ id: firstPlayerId = null } = {}] = players
  const [activePlayer, setActivePlayer] = useState(firstPlayerId)
  const playersIds = getPlayersIds(players)
  const playersCount = playersIds.length
  const nonePlayers = none(players)
  const anyPlayer = any(players)

  useEffect(() => {
    if (nonePlayers) {
      fetchPlayers()
    }
    const [{ id: firstPlayerId = "" } = {}] = players

    setActivePlayer(firstPlayerId)
  }, [fetchPlayers, players])

  const handleNextActivePlayer = () => {
    const nextActivePlayerIndex = indexOfNextActivePlayer(
      playersIds,
      activePlayer
    )
    const currentPlayerMaybeLast = nextActivePlayerIndex === playersCount

    if (currentPlayerMaybeLast) {
      return setActivePlayer(firstPlayerId)
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
          {anyPlayer &&
            players.map(({ name, id }) => {
              const maybeCurrentPlayerActive = id === activePlayer
              const playerScoreKey = `playerScore-${id}`

              return (
                <Fragment key={playerScoreKey}>
                  <PlayerScore
                    playerName={name}
                    active={maybeCurrentPlayerActive}
                    setActivePlayer={handleNextActivePlayer}
                  />
                </Fragment>
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
