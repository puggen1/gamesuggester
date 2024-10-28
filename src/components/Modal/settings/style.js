const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '80%',
	minHeight: '96%',
	bgcolor: 'background.secondary',
	border: '',
	borderRadius: '10px',
	boxShadow: 24,
	p: 4,
	boxSizing: 'border-box',
	'@media (max-width: 470px)': {
		width: '95%',
		p: 2,
	},
	'@media (max-width: 375px)': {
		p: 1,
	},
};

export {style};
