import { createStore as ReduxCreateStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import tasksReducer from '../reducers/tasks'

export default function createStore(history) {
  return ReduxCreateStore(
    combineReducers({
      tasks: tasksReducer,
      router: routerReducer,
    }),
    applyMiddleware(
      routerMiddleware(history)
    )
  )
}