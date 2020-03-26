import React, { useState } from "react"
import uniqid from "uniqid"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { createGame } from "../stores/game/gameEffect"
import { getPlayers } from "../stores/game/gameReducer"

import IncrementButton from "../UI/IncrementButton"
import PlayerInput from "./PlayerInput"

const DEFAULT_PLAYER_INPUT = id => ({
  value: "",
  id
})

const CreateGameView = ({ actions: { createGame } }) => {
  const [playerInputs, setPlayerInput] = useState([
    DEFAULT_PLAYER_INPUT(uniqid())
  ])

  const handleChangePlayerInput = (index, event) => {
    const values = [...playerInputs]
    values[index].value = event.target.value

    setPlayerInput(values)
  }

  const addPlayerInput = () => {
    const values = [...playerInputs, DEFAULT_PLAYER_INPUT(uniqid())]

    setPlayerInput(values)
  }

  const removePlayerInput = index => {
    const values = [...playerInputs]
    values.splice(index, 1)

    setPlayerInput(values)
  }

  const onSubmitForm = event => {
    event.preventDefault()
    event.stopPropagation()

    createGame(playerInputs)
  }

  return (
    <div>
      <h3>Type players names:</h3>
      <form onSubmit={onSubmitForm}>
        {playerInputs.map(({ value, id }, index) => (
          <PlayerInput
            id={id}
            value={value}
            index={index}
            handleChangePlayerInput={handleChangePlayerInput}
            removePlayerInput={removePlayerInput}
          />
        ))}
        <IncrementButton onIncrement={addPlayerInput} />
        <input type="submit" value="START" />
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ createGame }, dispatch)
})

const mapStateToProps = ({ gameData }) => ({ players: getPlayers(gameData) })

export default connect(mapStateToProps, mapDispatchToProps)(CreateGameView)
