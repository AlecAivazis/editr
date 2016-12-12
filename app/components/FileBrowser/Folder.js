// external imports
import React from 'react'
import liftC, {toggleState} from 'react-liftc'
// local imports
import FileBrowser from '.'
import styles from './styles'

const Folder =  ({name, files, state:active, toggle, style, ...unusedProps}) => (
	<div>
        {console.log(files)}
        <div onClick={toggle}>
            {active ? 'v ' : '> '}
            {name}
        </div>
        {active && <FileBrowser files={files} />}
	</div>
)

export default liftC(toggleState)(Folder)
