import { START_GAME } from "./gameAction"

const initialState = {
  players: {}
}

export function gameReducer(state = initialState, action) {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        players: action.payload
      }
    default:
      return state
  }
}

export const getPlayers = state => state.players
