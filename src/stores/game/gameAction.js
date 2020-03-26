export const START_GAME = "START_GAME"
export const GET_PLAYERS = "GET_PLAYERS"

export const startGame = players => {
  return {
    type: START_GAME,
    payload: players
  }
}

export const getCreatedPlayers = () => {
  return {
    type: GET_PLAYERS
  }
}
