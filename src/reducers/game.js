const CREATE_GAME = 'game/CREATE_GAME'

export const createGame = (name, width, height) => {
  return {
    type: CREATE_GAME,
    name,
    width,
    height
  }
}

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_GAME:
      return {
        ...state,
        games: {
          ...state.games,
          [action.name]: {
            size: {
              width: action.width,
              height: action.height,
            },
            grid: _.range(action.width * action.height).map(cell => {
              return {
                info: 'info'
              }
            })
          }
        }

      }
    default:
      return state
  }
}
