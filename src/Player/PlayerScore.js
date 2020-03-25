import React, { useState } from "react"
import styled from "styled-components"

import OverallScore from "./Score/OverallScore"
import RoundScore from "./Score/RoundScore"
import CurrentRoundScore from "./Score/CurrentRound/CurrentRoundScore"

const PlayerScoreBoard = styled.div`
  border: solid 1px gray;
  margin: 8px;
`

const PlayerScore = ({ active, playerName, setActivePlayer }) => {
  const [roundScores, setRoundScores] = useState([])
  const [overallPlayerScore, setOverallPlayerScore] = useState(501)

  const handleNextRound = event => roundScore => {
    event.preventDefault()
    event.stopPropagation()
    console.log({ roundScore })

    setActivePlayer()
    setRoundScores([...roundScores, roundScore])
  }

  const handleOverallPlayerScore = roundScore =>
    setOverallPlayerScore(overallPlayerScore - roundScore)

  return (
    <PlayerScoreBoard>
      <h2>
        {active && <div>&#8226;</div>}
        {playerName}
      </h2>
      <OverallScore overallPlayerScore={overallPlayerScore} />
      {roundScores.length > 0 &&
        roundScores.map((roundScore, index) => (
          <RoundScore number={index + 1} score={roundScore} />
        ))}
      <CurrentRoundScore
        roundNumber={roundScores.length + 1}
        handleNextRound={handleNextRound}
        handleOverallPlayerScore={handleOverallPlayerScore}
      />
    </PlayerScoreBoard>
  )
}

export default PlayerScore
