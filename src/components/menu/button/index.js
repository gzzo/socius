import React from 'react'

class MenuButton extends React.Component {
  render() {
    return (
      <div onClick={this.props.onClick}>
        {this.props.children}
      </div>
    )
  }
}

export default MenuButton
