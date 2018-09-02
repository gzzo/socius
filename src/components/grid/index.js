import React from 'react'
import _ from 'lodash'

import Tile from "components/tile";

import css from './index.scss'

class Grid extends React.Component {
  render() {
    const { columns, rows } = this.props

    return (
      <div className={css.grid} style={{'--columns': columns}}>
        {_.range(columns * rows).map(tileNumber => {
          const column = tileNumber % columns
          const row = Math.floor(tileNumber / columns) % rows
          const isOddColumn = tileNumber % (columns * 2) >= columns

          return (
            <Tile
              key={tileNumber}
              row={row}
              column={column}
              isOddColumn={isOddColumn}
              tileNumber={tileNumber}
            />
          )
        })}
      </div>
    )
  }
}

export default Grid
