import { combineReducers } from "redux"

import { gameReducer } from "./game/gameReducer"

const rootReducer = combineReducers({
  gameData: gameReducer
})

export default rootReducer
