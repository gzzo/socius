import React from 'react'
import { connect } from 'react-redux'

import Grid from 'components/grid'

import css from './index.scss'

class GamePage extends React.Component {
  render() {
    const { columns, rows } = this.props.size

    return (
      <div className={css.gridContainer}>
        <Grid columns={columns} rows={rows} name={name} />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const game = state.game.games[props.match.params.name]
  return {
    size: game.size,
    name: props.match.params.name,
  }
}

const connectedGamePage = connect(mapStateToProps)(GamePage)

export default connectedGamePage
