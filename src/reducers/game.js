import _ from 'lodash'

const CREATE_GAME = 'game/CREATE_GAME'

export const createGame = (name, columns, rows) => {
  return {
    type: CREATE_GAME,
    name,
    columns,
    rows
  }
}

const createGameState = (action) => {
  return {
    size: {
      columns: action.columns,
      rows: action.rows,
    },
    grid: _.range(action.columns * action.rows).map(cell => {
      return {
        info: 'info'
      }
    })
  }
}

const initialState = {
  games: {
    test: createGameState(createGame('test', 20, 20))
  }
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_GAME:
      return {
        ...state,
        games: {
          ...state.games,
          [action.name]: createGameState(action)
        }
      }
    default:
      return state
  }
}
