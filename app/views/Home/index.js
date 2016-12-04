// @flow
// external imports
import React from 'react'
// local imports
import styles from './styles'

const Home =  ({style, ...unusedProps}) => (
  <div style={{...styles.container, ...style}} {...unusedProps}>
    hello
  </div>
)

export default Home