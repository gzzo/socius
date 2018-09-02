import React from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { colors } from 'constants/colors'
import { unitComponents } from 'constants/units'
import { toggleTile } from 'reducers/game'

import css from './index.scss'

class Tile extends React.Component {
  render() {
    const { column, row, isOddColumn, active, tileNumber, highlight, unit } = this.props

    const containerClasses = classNames(css.tile, {
      [css.oddColumnTile]: isOddColumn,
      [css.active]: active,
    })

    const TileUnit = unit && unitComponents[unit]

    return (
      <div className={containerClasses} onClick={this.props.toggleTile} style={{'--color': colors[column + 25]}}>
        <div className={css.innerContainer}>
          <div className={css.content}>
            <div>
              {tileNumber} - {column}, {row}
            </div>
            {TileUnit && <TileUnit />}
            {active && "active"}
            {highlight && "highlight"}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const game = state.game.games[props.match.params.name]
  const tile = game.grid[props.tileNumber]

  return {
    active: tile.active,
    highlight: tile.highlight,
    unit: tile.unit,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    toggleTile: name => () => dispatch(toggleTile(name, props.tileNumber))
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    toggleTile: dispatchProps.toggleTile(ownProps.match.params.name)
  }
}

const connectedTile = withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(Tile))

export default connectedTile
