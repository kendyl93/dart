import { startGame, getCreatedPlayers } from "./gameAction"

export const createGame = players => startGame(players)

export const fetchPlayers = () => getCreatedPlayers()
