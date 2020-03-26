const byId = ({ id }) => id

export const getPlayersIds = players => players.map(byId)
