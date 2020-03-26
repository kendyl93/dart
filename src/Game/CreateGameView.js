import React, { useState } from "react"
import uniqid from "uniqid"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { createGame } from "../stores/game/gameEffect"
import { getPlayers } from "../stores/game/gameReducer"

const CreateGameView = ({ actions: { createGame } }) => {
  const [playerInputs, setPlayerInput] = useState([{ value: "", id: uniqid() }])

  const handleChangePlayerInput = (index, event) => {
    const values = [...playerInputs]
    values[index].value = event.target.value

    setPlayerInput(values)
  }

  const addPlayerInput = () => {
    const values = [...playerInputs]
    values.push({ value: null, id: uniqid() })
    setPlayerInput(values)
  }

  const removePlayerInput = index => {
    const values = [...playerInputs]
    values.splice(index, 1)

    setPlayerInput(values)
  }

  const handleStartGame = players => {
    createGame(players)
  }

  return (
    <div>
      <header className="App-header">
        <h1>Create game</h1>
      </header>
      <h3>Type players names:</h3>
      <form
        onSubmit={event => {
          event.preventDefault()
          event.stopPropagation()
          handleStartGame(playerInputs)
        }}
      >
        {playerInputs.map(({ value, id }, index) => {
          const playersCount = index + 1

          return (
            <div key={`player-${id}`}>
              {`${playersCount}`}.
              <input
                value={value}
                type="text"
                onChange={event => handleChangePlayerInput(index, event)}
              />
              <button type="button" onClick={() => removePlayerInput(index)}>
                X
              </button>
            </div>
          )
        })}
        <button type="button" onClick={addPlayerInput}>
          +
        </button>
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
