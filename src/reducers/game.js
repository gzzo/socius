import _ from 'lodash'

import { updateArrayItem, updateNearbyTiles, updateTiles } from './reducerUtil'

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

export const toggleTile = (name, tileNumber) => {
  return {
    type: TOGGLE_TILE,
    name,
    tileNumber,
  }
}

const createGameState = (action) => {
  return {
    size: {
      columns: action.columns,
      rows: action.rows,
    },
    grid: _.range(action.columns * action.rows).map(tileNumber => {
      return {
        info: 'info',
        tileNumber,
      }
    })
  }
}

const spawnUnit = (grid, index, unit) => {
  return updateArrayItem(grid, index, unit)
}

const initialGame = createGameState(createGame('test', 20, 20))
initialGame.grid = spawnUnit(initialGame.grid, 3, {
  unit: 'settler'
})

const initialState = {
  games: {
    test: initialGame
  }
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case CREATE_GAME: {
      const game = createGameState(action)

      return {
        ...state,
        games: {
          ...state.games,
          [action.name]: game
        },
      }
    }

    case TOGGLE_TILE: {
      const game = state.games[action.name]
      const tile = game.grid[action.tileNumber]

      const tileChanges = {
        ...updateNearbyTiles(game.grid, game.size.columns, game.size.rows, action.tileNumber, 2, {
          highlight: !tile.active
        }),
        [action.tileNumber]: {
          active: !tile.active
        },
      }

      return {
        ...state,
        games: {
          ...state.games,
          [action.name]: {
            ...game,
            grid: updateTiles(game.grid, tileChanges),
            activeUnit: action.tileNumber,
          }
        }
      }
    }

    default:
      return state
  }
}
