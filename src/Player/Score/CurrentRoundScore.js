import React from "react"
import styled from "styled-components"

const CurrentRoundScoreBoard = styled.div`
  form {
    display: flex;
    flex-direction: column;
  }
`

const CurrentRoundScore = () => (
  <CurrentRoundScoreBoard>
    Round 5
    <form>
      <input type="number" value={19} onChange={() => {}} />
      <input type="number" value={10} onChange={() => {}} />
      <input type="number" value={60} onChange={() => {}} />
      <input type="submit" value="Next player" />
    </form>
  </CurrentRoundScoreBoard>
)

export default CurrentRoundScore
