import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import { App } from './App'
import { rootReducer } from './store/reducers/rootReducer'
import createSagaMiddleware from 'redux-saga'
import { sagaWatcher } from './store/saga/sagas'

const saga = createSagaMiddleware()

const store = createStore(rootReducer, compose(applyMiddleware(saga)))

saga.run(sagaWatcher)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
