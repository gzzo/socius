import React from 'react'
import classNames from 'classnames'
import _ from 'lodash'

import css from './index.scss'

class Grid extends React.Component {
  render() {
    const { width, height } = this.props

    return (
      <div className={css.grid} style={{'--Nhexa': width}}>
        {_.range(width * height).map(cell => {
          const classes = classNames(css.tile, {
            [css.oddColumnTile]: cell % (width * 2) >= width
          })

          const column = cell % width
          const row = Math.floor(cell / width) % height

          return (
            <div className={classes} key={cell} onClick={() => {console.log(column, row)}}>
              <div className={css.insideTile}>
                moo
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Grid
