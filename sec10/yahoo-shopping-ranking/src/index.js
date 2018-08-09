import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import { ConnectRouter } from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory'

import App from './App'
import createStore from './createStore'

// Storeの生成
const store = createStore(
  combineReducers(reducers),
  applyMiddleware(logger)
)

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)
