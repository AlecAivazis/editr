// external imports
import React from 'react'
import liftC from 'react-liftc'
// local imports

const state = {
  initialValue: true,
  handlers: {
    toggleActive(prev) { return !prev }
  }
}

const Folder =  ({name, files, renderChild, state, toggleActive, style, ...unusedProps}) => (
	<div>
		<p onClick={toggleActive} style={foo}>*</p>
		<p style={{display: 'inline'}}>{name}</p>
		{state && (
			<div style={{marginLeft: 15}}>
				{files.map((child, i)=><span key={i}>{renderChild(child)}</span>)}
			</div>
		)}
	</div>
)

export default liftC(state)(Folder)

const foo= {
	cursor: 'pointer', fontSize: 20, display: 'inline',
	WebkitUserSelect: 'none', /* Chrome/Safari */        
	MozUserSelect: 'none', /* Firefox */
	MsUserSelect: 'none', /* IE10+ */
	OUserSelect: 'none',
	userSelect: 'none',
}