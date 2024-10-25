import {styled} from '@mui/material';
const OuterBanner = styled('div')(({theme}) => ({
	backgroundColor: theme.palette.secondary.main,
	borderRadius: '40px',
	height: '50px',
	display: 'grid',
	gridTemplateColumns: '50px auto',
	alignItems: 'center',
	img: {
		borderRadius: '40px',
		height: '100%',
		width: '100%',
	},
}));

export {OuterBanner};
