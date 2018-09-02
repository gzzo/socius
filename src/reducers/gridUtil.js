export const tileToCoords = (tileNumber, columns, rows) => {
  return {
    col: tileNumber % columns,
    row: Math.floor(tileNumber / columns) % rows
  }
}

export const coordsToTile = (coords, rows) => {
  return coords.col + coords.row * rows
}

export const cubeToCoords = (cube) => {
  return {
    col: cube.x + (cube.z - (cube.z & 1)) / 2,
    row: cube.z,
  }
}

export const coordsToCube = (col, row) => {
  return {
    x: col - (row - (row & 1)) / 2,
    y: row,
    z: -1 * col - row,
  }
}
