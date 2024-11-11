import {styled} from '@mui/material';
const OuterProfileStats = styled('div')(({theme}) => ({
	backgroundColor: theme.palette.secondary.main,
	borderRadius: '20px',
	display: 'grid',
	gridTemplateColumns: '1fr 1fr',
	gap: '1rem 0',
	color: theme.palette.warning.main,
	padding: '1rem',
	boxSizing: 'border-box',
	h6: {
		fontSize: 'calc(3vw * 0.3)',
		'@media screen and (max-width: 1250px)': {
			fontSize: 'calc(3vw * 0.35)',
		},
		'@media screen and (max-width: 1024px)': {
			fontSize: 'calc(3vw * 0.5)',
		},
		'@media screen and (max-width: 768px)': {
			fontSize: 'calc(3vw * 0.75)',
		},
		'@media screen and (max-width: 500px)': {
			fontSize: '1rem',
		},
	},
}));
export {OuterProfileStats};
