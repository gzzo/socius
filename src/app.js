import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import { Helmet } from 'react-helmet'
import { ConnectedRouter } from 'connected-react-router'

import MenuPage from 'pages/menu'
import CreatePage from 'pages/create'
import GamePage from 'pages/game'

import css from 'sanitize.css'

class App extends React.Component {
  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <div>
          <Helmet>
            <title>Hello</title>
          </Helmet>
          <Switch>
            <Route path="/game/:name" component={GamePage} />
            <Route path="/create" component={CreatePage} />
            <Route path="/" component={MenuPage} />
          </Switch>
        </div>
      </ConnectedRouter>
    )
  }
}

export default hot(module)(App)
