const styles = {
  sidebar: {
  	WebkitUserSelect: 'none',
  	padding: 14,
  	width: '20%',
  	display: 'flex',
  	flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: 'green'
  },
  file: {
  	cursor: 'pointer',
  	margin: 4
  },
  folder: {
  	display: 'inline',
  	cursor: 'pointer',
  },
  arrow: {
  	margin: 0,
  	marginRight: 6,
		cursor: 'pointer', 
		fontSize: 16,
		fontWeight: 'bold', 
		display: 'inline-block',      
	},
	collapse: {
		position: 'relative',
    top: -3,
    left: 3,
		WebkitTransform: 'rotate(180deg)',
	},
	expand: { 
		WebkitTransform: 'rotate(90deg)',
	}
}

export default styles