import React, { useState } from "react"

import "./App.css"

const App = () => {
  const [playerInputs, setPlayerInput] = useState([{ value: "" }])

  const handleChangePlayerInput = (idx, event) => {
    const values = [...playerInputs]
    values[idx].value = event.target.value

    setPlayerInput(values)
  }

  const addPlayerInput = () => {
    const values = [...playerInputs]
    values.push({ value: null })
    setPlayerInput(values)
  }

  const removePlayerInput = idx => {
    const values = [...playerInputs]
    values.splice(idx, 1)

    setPlayerInput(values)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Create game</h1>
      </header>
      <h3>Type players names:</h3>
      <form>
        {playerInputs.map(({ value }, idx) => {
          const playersCount = idx + 1

          return (
            <div key={`player-${playersCount}`}>
              {`${playersCount}`}.
              <input
                value={value}
                type="text"
                onChange={event => handleChangePlayerInput(idx, event)}
              />
              <button type="button" onClick={() => removePlayerInput(idx)}>
                X
              </button>
            </div>
          )
        })}
        <button type="button" onClick={addPlayerInput}>
          +
        </button>
      </form>
    </div>
  )
}

export default App
