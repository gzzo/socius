import React from 'react'
import classNames from "classnames";

import css from "./index.scss";

class Tile extends React.Component {
  render() {
    const { column, row, isOddColumn } = this.props

    const classes = classNames(css.tile, {
      [css.oddColumnTile]: isOddColumn
    })

    return (
      <div className={classes} onClick={() => {console.log(column, row)}}>
        <div className={css.insideTile}>
          moo
        </div>
      </div>
    )
  }
}

export default Tile
