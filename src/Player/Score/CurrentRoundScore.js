import React, { useState } from "react"
import styled from "styled-components"

const CurrentRoundScoreBoard = styled.div`
  form {
    display: flex;
    flex-direction: column;
  }
`

const CurrentRoundScore = ({ roundNumber, handleNextRound }) => {
  const [dart1Score, setDart1Score] = useState(0)
  const [dart2Score, setDart2Score] = useState(0)
  const [dart3Score, setDart3Score] = useState(0)

  const DARTS_NUMBERS = {
    "Dart 1": {
      onScoreChange: setDart1Score,
      dartScore: dart1Score
    },
    "Dart 2": {
      onScoreChange: setDart2Score,
      dartScore: dart2Score
    },
    "Dart 3": { onScoreChange: setDart3Score, dartScore: dart3Score }
  }

  const overallRoundScore = [dart1Score, dart2Score, dart3Score].reduce(
    (sum, value) => (sum += Number(value)),
    0
  )

  const handleRoundScoreChange = ({
    target: { value } = {}
  }) => onScoreChange => onScoreChange(value)

  return (
    <CurrentRoundScoreBoard>
      Round {roundNumber}
      <form onSubmit={event => handleNextRound(event)(overallRoundScore)}>
        {Object.entries(DARTS_NUMBERS).map(
          ([dartLabel, { dartScore, onScoreChange }]) => (
            <label key={dartLabel.trim()}>
              {dartLabel}
              <input
                type="number"
                value={dartScore}
                onChange={event => handleRoundScoreChange(event)(onScoreChange)}
              />
            </label>
          )
        )}
        <input type="submit" value="End Round" />
      </form>
    </CurrentRoundScoreBoard>
  )
}

export default CurrentRoundScore
