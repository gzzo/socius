import React from 'react'
import { connect } from 'react-redux'
import MenuButton from 'components/menu/button'
import { push } from 'connected-react-router'

import { createGame } from 'reducers/game'

class CreatePage extends React.Component {
  create = () => {
    this.props.createGame()
    this.props.push()
  }

  render() {
    return (
      <div>
        <MenuButton onClick={this.create}>
          create
        </MenuButton>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createGame: () => dispatch(createGame('test', 20, 20)),
    push: () => dispatch(push('/game/test'))
  }
}

const connectedCreatePage = connect(null, mapDispatchToProps)(CreatePage)

export default connectedCreatePage
