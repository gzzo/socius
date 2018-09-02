import React from 'react'
import _ from 'lodash'

import Tile from "components/tile";

import css from './index.scss'

class Grid extends React.Component {
  render() {
    const { columns, rows } = this.props

    return (
      <div className={css.grid} style={{'--columns': columns}}>
        {_.range(columns * rows).map(tile => {
          const column = tile % columns
          const row = Math.floor(tile / columns) % rows
          const isOddColumn = tile % (columns * 2) >= columns

          return (
            <Tile
              key={tile}
              row={row}
              column={column}
              isOddColumn={isOddColumn}
            />
          )
        })}
      </div>
    )
  }
}

export default Grid
