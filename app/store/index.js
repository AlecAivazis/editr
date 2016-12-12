
let createStore

if (process.env.NODE_ENV === 'production') {
  createStore = require('./production') // eslint-disable-line global-require
} else {
  createStore = require('./development') // eslint-disable-line global-require
}

export default createStore()
