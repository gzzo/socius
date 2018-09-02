import React from 'react'

class Page extends React.Component {
  onContextMenu = (event) => {
    event.preventDefault()
    console.log('right click')
    return false;
  }

  render() {
    return (
      <div onContextMenu={this.onContextMenu}>
        {this.props.children}
      </div>
    )
  }
}

export default Page
