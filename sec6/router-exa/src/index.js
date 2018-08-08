import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory'
import TodoApp from './containers/TodoApp'
import createStore from './store'

const history = createBrowserHistory()

const store = createStore(history)

render (
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
      <TodoApp />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
