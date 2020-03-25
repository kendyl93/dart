import React, { useState } from "react"
import styled from "styled-components"

import OverallScore from "./Score/OverallScore"
import RoundScore from "./Score/RoundScore"
import CurrentRoundScore from "./Score/CurrentRoundScore"

const PlayerScoreBoard = styled.div`
  border: solid 1px gray;
  margin: 8px;
`

const PlayerScore = ({ playerName }) => {
  const [roundNumber, setRoundNumber] = useState(1)
  const [overallPlayerScore, setOverallPlayerScore] = useState(501)

  const handleNextRound = event => roundScore => {
    event.preventDefault()
    event.stopPropagation()
    console.log({ roundScore })
    setRoundNumber(roundNumber + 1)
  }

  const handleOverallPlayerScore = roundScore =>
    setOverallPlayerScore(overallPlayerScore - roundScore)

  return (
    <PlayerScoreBoard>
      <h2>{playerName}</h2>
      <OverallScore overallPlayerScore={overallPlayerScore} />
      <CurrentRoundScore
        roundNumber={roundNumber}
        handleNextRound={handleNextRound}
        handleOverallPlayerScore={handleOverallPlayerScore}
      />
    </PlayerScoreBoard>
  )
}

export default PlayerScore
