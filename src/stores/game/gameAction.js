export const START_GAME = "START_GAME"

export function startGame(players) {
  return {
    type: START_GAME,
    payload: players
  }
}
