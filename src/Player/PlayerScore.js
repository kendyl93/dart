import React from "react"
import styled from "styled-components"

import OverallScore from "./Score/OverallScore"
import RoundScore from "./Score/RoundScore"
import CurrentRoundScore from "./Score/CurrentRoundScore"

const PlayerScoreBoard = styled.div`
  border: solid 1px gray;
  margin: 8px;
`

const PlayerScore = ({ playerName }) => (
  <PlayerScoreBoard>
    <h2>{playerName}</h2>
    <OverallScore />
    <RoundScore />
    <RoundScore />
    <CurrentRoundScore />
  </PlayerScoreBoard>
)

export default PlayerScore
