import React, { useState } from "react"
import styled from "styled-components"

const CurrentRoundScoreBoard = styled.div`
  form {
    display: flex;
    flex-direction: column;
  }
`

const DARTS_NUMBERS = { "Dart 1": 1, "Dart 2": 2, "Dart 3": 3 }

const CurrentRoundScore = ({ roundNumber, handleNextRound }) => {
  const [roundScore, setRoundScore] = useState([])

  const handleRoundScoreChange = () => {}

  return (
    <CurrentRoundScoreBoard>
      Round {roundNumber}
      <form onSubmit={handleNextRound}>
        {Object.entries(DARTS_NUMBERS).map(([dartLabel, dartNumber]) => (
          <label>
            {dartLabel}
            <input
              type="number"
              value={roundScore[dartNumber - 1]}
              onChange={() => handleRoundScoreChange(dartNumber - 1)}
            />
          </label>
        ))}
        <input type="submit" value="Next player" />
      </form>
    </CurrentRoundScoreBoard>
  )
}

export default CurrentRoundScore
