import { startGame, getCreatedPlayers } from "./gameAction"
import { PLAYERS } from "../../constants/players"

export const createGame = players => {
  try {
    window.localStorage.setItem(PLAYERS, JSON.stringify(players))

    return startGame(players)
  } catch (error) {
    console.error(error)
  }
}
export const fetchPlayers = () => {
  const players = JSON.parse(window.localStorage.getItem(PLAYERS))

  return getCreatedPlayers(players)
}
