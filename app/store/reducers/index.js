// @flow
import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import files from './files'

export default combineReducers({
  routing,
  files
})
