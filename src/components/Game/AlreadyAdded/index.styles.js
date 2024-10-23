import {styled} from '@mui/material';

const OuterAlreadyAdded = styled('div')(({theme}) => ({
	backgroundColor: theme.palette.secondary.main,
	boxSizing: 'border-box',
	padding: '1rem',
	borderRadius: '10px',
	width: '400px',
	textAlign: 'center',
	'@media screen and (max-width: 500px)': {
		width: '100%',
		maxWidth: '90%',
		'& h3, & p': {
			fontSize: '1rem',
		},
	},
}));

export {OuterAlreadyAdded};
