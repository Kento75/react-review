import React from 'react'
import { render } from 'react-dom'
import tasksReducer from './reducers/tasks'
import TodoApp from './components/TodoApp'
import { createState } from 'redux'

const store = createState(tasksReducer)

function renderApp(store) {
  render(
    <TodoApp store={ store } />,
    document.getElementById('root')
  )
}
