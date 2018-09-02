import React from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import MenuButton from 'components/menu/button';

class MenuPage extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <MenuButton onClick={this.props.onCreateNewGame}>
              Create New Game
            </MenuButton>
          </li>
          <li>
            <MenuButton>
              Load Game
            </MenuButton>
          </li>
          <li>
            <MenuButton>
              Options
            </MenuButton>
          </li>
        </ul>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCreateNewGame: () => dispatch(push('/create'))
  }
}

const connectedMenuPage = connect(null, mapDispatchToProps)(MenuPage)

export default connectedMenuPage
