import React from "react"
import uniqid from "uniqid"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { createGame } from "../stores/game/gameEffect"
import { getPlayers } from "../stores/game/gameReducer"

const CreateGameView = ({ actions: { createGame } }) => {
  const handleStartGame = event => {
    createGame({ [uniqid()]: { name: "Janek" }, [uniqid()]: { name: "Pawel" } }) // here push the players
  }

  return <button onClick={handleStartGame}>START</button>
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ createGame }, dispatch)
})

const mapStateToProps = ({ gameData }) => ({ players: getPlayers(gameData) })

export default connect(mapStateToProps, mapDispatchToProps)(CreateGameView)
