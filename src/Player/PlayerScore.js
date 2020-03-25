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

  const handleNextRound = event => roundScore => {
    event.preventDefault()
    event.stopPropagation()
    console.log({ roundScore })
    setRoundNumber(roundNumber + 1)
  }

  return (
    <PlayerScoreBoard>
      <h2>{playerName}</h2>
      <OverallScore />
      <CurrentRoundScore
        roundNumber={roundNumber}
        handleNextRound={handleNextRound}
      />
    </PlayerScoreBoard>
  )
}

export default PlayerScore
