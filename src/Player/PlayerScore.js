import React, { useEffect, useState } from "react"
import styled from "styled-components"
import uniqid from "uniqid"

import OverallScore from "./Score/OverallScore"
import RoundScore from "./Score/RoundScore"
import CurrentRoundScore from "./Score/CurrentRound/CurrentRoundScore"

const PlayerScoreBoard = styled.div`
  border: solid 1px gray;
  margin: 8px;
  flex-grow: 1;
`

const PlayerScore = ({ active, playerName, setActivePlayer }) => {
  const [roundScores, setRoundScores] = useState([])
  const [overallPlayerScore, setOverallPlayerScore] = useState(501)

  useEffect(() => {
    if (overallPlayerScore > 0) {
      return
    }

    alert(`Player ${playerName} won in ${roundScores.length} rounds!`)
  }, [overallPlayerScore])

  const handleNextRound = event => roundScore => {
    event.preventDefault()
    event.stopPropagation()

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
        roundScores.map((roundScore, index) => {
          const roundScoreKey = `soundScore-${uniqid()}`

          return (
            <RoundScore
              key={roundScoreKey}
              number={index + 1}
              score={roundScore}
            />
          )
        })}
      {active && (
        <CurrentRoundScore
          active={active}
          roundNumber={roundScores.length + 1}
          handleNextRound={handleNextRound}
          handleOverallPlayerScore={handleOverallPlayerScore}
        />
      )}
    </PlayerScoreBoard>
  )
}

export default PlayerScore
