import React from 'react'

import Page from 'components/page'
import Grid from 'components/grid'

class Home extends React.Component {
  render() {
    return (
      <Page>
        <Grid width={7} height={7} />
      </Page>
    )
  }
}

export default Home
