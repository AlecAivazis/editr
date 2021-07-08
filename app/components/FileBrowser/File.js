// external imports
import React from 'react'
// local imports
import styles from './styles'

const File =  ({name, style, ...unusedProps}) => (
	<p style={styles.file}>{name}</p>
)

export default File