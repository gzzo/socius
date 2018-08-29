import React from 'react'
import classNames from 'classnames'
import _ from 'lodash'

import css from './index.scss'

class Grid extends React.Component {
  render() {
    const { width, height } = this.props

    return (
      <div className={css.grid} style={{'--width': '100px', '--columns': width}}>
        {_.range(width * height).map(row => {
          const classes = classNames(css.tile, {
            [css.oddColumnTile]: row % (width * 2) >= width
          })
          return (
            <div className={classes} key={row}>
              X
            </div>
          )
        })}
      </div>
    )
  }
}

export default Grid
