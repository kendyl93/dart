import React from "react"
import OverallScore from "./Score/OverallScore"
import RoundScore from "./Score/RoundScore"
import CurrentRoundScore from "./Score/CurrentRoundScore"

const PlayerScore = () => (
  <div>
    PlayerScore
    <OverallScore />
    <RoundScore />
    <RoundScore />
    <CurrentRoundScore />
  </div>
)

export default PlayerScore
