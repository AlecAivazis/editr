// @flow
// external imports
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
// local imports
import configureStore from './store/configureStore'
import { Home } from './views'

const store = configureStore()

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
)
