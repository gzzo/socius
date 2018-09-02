import React from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { toggleTile } from 'reducers/game'

import css from './index.scss'

class Tile extends React.Component {
  render() {
    const { column, row, isOddColumn, active } = this.props

    const classes = classNames(css.tile, {
      [css.oddColumnTile]: isOddColumn
    })

    return (
      <div className={classes} onClick={this.props.toggleTile}>
        <div className={css.insideTile}>
          {active && "testing"}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const game = state.game.games[props.match.params.name]
  return {
    active: game.grid[props.tile].active
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    toggleTile: name => () => dispatch(toggleTile(name, props.tile))
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
