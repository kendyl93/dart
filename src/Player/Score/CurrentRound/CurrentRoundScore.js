import React, { useState } from "react"
import styled from "styled-components"

import DartScoreInput from "./DartScoreInput"

const CurrentRoundScoreBoard = styled.div`
  form {
    display: flex;
    flex-direction: column;
  }
`

const CurrentRoundScore = ({
  roundNumber,
  handleNextRound,
  handleOverallPlayerScore
}) => {
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
      <form
        onSubmit={event => {
          handleNextRound(event)(overallRoundScore)
          handleOverallPlayerScore(overallRoundScore)
        }}
      >
        {Object.entries(DARTS_NUMBERS).map(
          ([dartLabel, { dartScore, onScoreChange }]) => (
            <DartScoreInput
              dartLabel={dartLabel}
              dartScore={dartScore}
              onScoreChange={onScoreChange}
              handleRoundScoreChange={handleRoundScoreChange}
            />
          )
        )}
        <input type="submit" value="End Round" />
      </form>
    </CurrentRoundScoreBoard>
  )
}

export default CurrentRoundScore
