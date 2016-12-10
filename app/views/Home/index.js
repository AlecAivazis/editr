// @flow
// external imports
import React from 'react'
// local imports
import FileBrowser from '../FileBrowser'
import styles from './styles'

const Home =  ({style, ...unusedProps}) => (
  <div style={{...styles.container, ...style}} {...unusedProps}>
  	<FileBrowser styles={styles} />
    <div style={styles.contentPane}>
    	Main Content
    </div>
  </div>
)

export default Home