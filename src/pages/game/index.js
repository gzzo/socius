import React from 'react'
import { connect } from 'react-redux'

import Grid from 'components/grid'

import css from './index.scss'

class GamePage extends React.Component {
  render() {
    const { columns, rows } = this.props.game.size

    return (
      <div className={css.gridContainer}>
        <Grid columns={columns} rows={rows} />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    game: state.game.games[props.match.params.name]
  }
}

const connectedGamePage = connect(mapStateToProps)(GamePage)

export default connectedGamePage
