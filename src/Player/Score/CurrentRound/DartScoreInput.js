import React from "react"

const DartScoreInput = ({
  dartLabel,
  dartScore,
  onScoreChange,
  handleRoundScoreChange
}) => (
  <label key={dartLabel.trim()}>
    {dartLabel}
    <input
      type="number"
      value={dartScore}
      onChange={event => handleRoundScoreChange(event)(onScoreChange)}
    />
  </label>
)

export default DartScoreInput
