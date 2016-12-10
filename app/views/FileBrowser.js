// external imports
import React from 'react'
// local imports
import File from './File'
import Folder from './Folder'

const exampleFolder = {
	name: 'Borat stuff', 
	path: null, 
	files: [
		{name: 'azumat.txt', path: null, files: []},
		{name: 'pamela_naked.jpg', path: null, files: []},
		{name: 'Rule 34', path: null, files: [
			{name: 'wawaweewa', path: null, files: []},
			{name: 'king of the castle', path: null, files: []},
		]},
		{name: 'yekshimesh', path: null, files: []}
	]
}

const renderChild = (child) => {
	if (child.files.length > 0){
		return (
			<Folder name={child.name} files={child.files} renderChild={renderChild} />
		)
	}
	else{
		return (<File name={child.name} />)
	}
}

const FileBrowser =  ({style, styles, ...unusedProps}) => (
    <div style={{...styles.sidebar, ...style}} {...unusedProps}>
  		{renderChild(exampleFolder)}
    </div>
)

export default FileBrowser