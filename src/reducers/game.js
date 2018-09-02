import _ from 'lodash'

import { updateArrayItem } from './reducerUtil'

const CREATE_GAME = 'game/CREATE_GAME'

const TOGGLE_TILE = 'game/TOGGLE_TILE'

export const createGame = (name, columns, rows) => {
  return {
    type: CREATE_GAME,
    name,
    columns,
    rows
  }
}

export const toggleTile = (name, tile) => {
  return {
    type: TOGGLE_TILE,
    name,
    tile,
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

const spawnUnit = (grid, index, unit) => {
  return updateArrayItem(grid, index, unit)
}

const initialGame = createGameState(createGame('test', 20, 20))
initialGame.grid = spawnUnit(initialGame.grid, 3, {
  type: 'settler'
})

console.log(initialGame)

const initialState = {
  games: {
    test: initialGame
  }
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case CREATE_GAME:
      const game = createGameState(action)

      return {
        ...state,
        games: {
          ...state.games,
          [action.name]: game
        },
      }

    case TOGGLE_TILE:
      return {
        ...state,
        games: {
          ...state.games,
          [action.name]: {
            ...state.games[action.name],
            grid: updateArrayItem(state.games[action.name].grid, action.tile, {
              active: !state.games[action.name].grid[action.tile].active
            })
          }
        }
      }

    default:
      return state
  }
}
