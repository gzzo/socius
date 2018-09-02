import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import { reducers, rootSaga } from 'reducers'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory } from 'history'


import App from './app'

const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  connectRouter(history)(reducers),
  compose(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware,
    ),
  ),
);
sagaMiddleware.run(rootSaga);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App history={history} />
    </Provider>,
    document.getElementById('root')
  )
}

if (module.hot) {
  module.hot.accept('app', render)
  module.hot.accept('reducers', () => {
    store.replaceReducer(connectRouter(history)(reducers))
  })
}

render()
