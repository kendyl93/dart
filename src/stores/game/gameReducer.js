import { START_GAME, GET_PLAYERS } from "./gameAction"

const initialState = {
  players: {}
}

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        players: action.payload
      }
    case GET_PLAYERS:
      return {
        ...state,
        players: state.players
      }
    default:
      return state
  }
}

export const getPlayers = state => state.players
