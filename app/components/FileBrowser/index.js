// external imports
import React from 'react'
// local imports
import File from './File'
import Folder from './Folder'
import styles from './styles'

const FileBrowser =  ({style, files, dispatch, ...unusedProps}) => (
    <div style={{...styles.sidebar, ...style}} {...unusedProps}>
    	{files.map((entry, i) =>
    		// if the has children
    		(entry.files && entry.files.length > 0)
    			// treat it like a directory
    			? <Folder name={entry.name} files={entry.files} key={i}/>
    			// otherwise its a file
    			: <File name={entry.name} key={i}/>
    	)}
    </div>
)

export default FileBrowser