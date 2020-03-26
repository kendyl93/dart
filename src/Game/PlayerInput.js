import React from "react"

import DecrementButton from "../UI/DecrementButton"

const PlayerInput = ({
  id,
  index,
  value,
  handleChangePlayerInput,
  removePlayerInput
}) => {
  const playersCount = index + 1

  return (
    <div key={`player-${id}`}>
      {playersCount}.
      <input
        value={value}
        type="text"
        onChange={event => handleChangePlayerInput(index, event)}
      />
      <DecrementButton onDecrement={() => removePlayerInput(index)} />
    </div>
  )
}

export default PlayerInput
