// @flow
// external imports
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
// local imports
import store from './store'
import { Home } from './views'

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
)
