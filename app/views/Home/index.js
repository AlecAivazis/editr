// @flow
// external imports
import React from 'react'
import { connect } from 'react-redux'
// local imports
import NestedDropdown from '../../components/FileBrowser/'
import styles from './styles'

const selector = ({files}) => ({files: files.total})
const FileBrowser = connect(selector)(NestedDropdown)

const Home =  ({style, ...unusedProps}) => (
  <div style={{...styles.container, ...style}} {...unusedProps}>
  	<FileBrowser style={{width: '20%', padding: 14}}/>
    <div style={styles.contentPane}>
    	Main Content
    </div>
  </div>
)

export default Home
