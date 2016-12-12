const styles = {
  sidebar: {
  	WebkitUserSelect: 'none',
    paddingLeft: 14,
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
	},
}

export default styles