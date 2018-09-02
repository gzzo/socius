import React from 'react'
import { connect } from 'react-redux'

import Grid from 'components/grid'
import Page from 'components/page'

import css from './index.scss'

class GamePage extends React.Component {
  constructor(props) {
    super(props)

    this.gridContainer = React.createRef()
  }

  onKeyDown = (event) => {
    // TODO: move this to a separate ScrollingContainer and handle multiple key presses
    const scrollDistance = 25

    if (event.key === 'w') {
      this.gridContainer.current.scrollTop -= scrollDistance
    } else if (event.key === 'a') {
      this.gridContainer.current.scrollLeft -= scrollDistance
    } else if (event.key === 's') {
      this.gridContainer.current.scrollTop += scrollDistance
    } else if (event.key === 'd') {
      this.gridContainer.current.scrollLeft += scrollDistance
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown)
  }

  render() {
    const { columns, rows } = this.props.size

    return (
      <Page>
        <div className={css.gridContainer} ref={this.gridContainer}>
          <Grid columns={columns} rows={rows} name={name} />
        </div>
      </Page>
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
