import React from 'react'
import { connect } from 'react-redux'

import Grid from 'components/grid'

class GamePage extends React.Component {
  render() {
    const { width, height } = this.props.game.size

    return (
      <div>
        <Grid width={width} height={height} />
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
