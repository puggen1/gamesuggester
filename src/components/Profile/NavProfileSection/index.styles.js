import {Box, styled} from '@mui/material';

const Outer = styled(Box, {shouldForwardProp: (prop) => prop !== 'loggedIn'})(({loggedIn}) => ({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-evenly',
	width: '100%',
	alignItems: 'center',
	marginTop: loggedIn ? '0px' : 'auto',
	marginBottom: loggedIn ? 'auto' : '1rem',
}));
const LoggedInSection = styled(Box)(() => ({
	width: '100%',
	padding: '1rem',
	gap: '1rem',
	display: 'flex',
	flexDirection: 'column',
}));
const LoggedOutSection = styled(Box)(() => ({
	display: 'flex',
	width: '100%',
	justifyContent: 'space-between',
	padding: '0rem 1rem',
}));

export {Outer, LoggedInSection, LoggedOutSection};
