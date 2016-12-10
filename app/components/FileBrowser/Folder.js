// external imports
import React from 'react'
import liftC from 'react-liftc'
// local imports
import styles from './styles'

const state = {
  initialValue: true,
  handlers: {
    toggleActive(prev) { return !prev }
  }
}

const Folder =  ({name, files, renderChild, state, toggleActive, style, ...unusedProps}) => (
	<div>
		<p onClick={toggleActive} 
			style={state ? {...styles.arrow, ...styles.collapse} : {...styles.arrow, ...styles.expand}}>
				^
		</p>
		<p style={styles.folder} onClick={toggleActive}>{name}</p>
		{state && (
			<div style={{marginLeft: 22}}>
				{files.map((child, i)=><span key={i}>{renderChild(child)}</span>)}
			</div>
		)}
	</div>
)

export default liftC(state)(Folder)
