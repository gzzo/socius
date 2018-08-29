import React from 'react'
import { Route } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import { Helmet } from 'react-helmet'

import Home from 'pages/home'

import css from 'sanitize.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Hello</title>
        </Helmet>
        <Route path="/" component={Home} />
      </div>
    )
  }
}

export default hot(module)(App)
