import { coordsToTile, tileToCoords, cubeToCoords } from './gridUtil'

export const updateArrayItem = (array, itemIndex, newItem) => {
  return array.map((item, index) => {
    if(itemIndex !== index) {
      return item;
    }

    return {
      ...item,
      ...newItem
    };
  });
}

export const updateTiles = (array, tiles) => {
  return array.map((item, index) => {
    if(index in tiles) {
      return {
        ...item,
        ...tiles[index]
      };
    }

    return item
  });
}

export const updateNearbyTiles = (grid, columns, rows, tileNumber, distance, update) => {
  const nearbyTiles = {}
  const tileCoords = tileToCoords(tileNumber, columns, rows)

  _.range(-1 * distance, distance + 1).forEach(deltaX => {
    _.range(Math.max(-1 * distance, -1 * distance - deltaX), Math.min(distance, distance - deltaX) + 1).forEach(deltaY => {
      const deltaZ = -1 * deltaX - deltaY

      const offset = cubeToCoords({
        x: deltaX,
        y: deltaY,
        z: deltaZ
      })

      const newCoords = {
        col: tileCoords.col + offset.col,
        row: tileCoords.row + offset.row,
      }

      if (newCoords.col < 0 || newCoords.col >= columns || newCoords.row < 0 || newCoords.row >= rows) {
        return
      }

      const newTile = coordsToTile(newCoords, rows)
      nearbyTiles[newTile] = update
    })
  })

  return nearbyTiles
}
