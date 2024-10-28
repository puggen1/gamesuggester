import styled from 'styled-components';
import {styled as muiStyled} from '@mui/material';
const Nav = styled.div`
	background-color: #2f4e5c;
	width: 350px;
	height: 100%;
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 350px) {
		width: 100%;
	}
`;
const Links = muiStyled('div')(() => ({
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 75px)',
	justifyContent: 'space-between',
	gridGap: '1rem',
	padding: '1rem',
	boxSizing: 'border-box',
	'@media screen and (max-width: 350px)': {
		gridTemplateColumns: 'repeat(3, 1fr)',
	},
}));
const LinkItem = muiStyled('div')(({theme}) => ({
	width: '100%',
	height: '100%',
	backgroundColor: theme.palette.secondary.main,
	borderRadius: '20px',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	minHeight: '75px',
	minWidth: '75px',
	'&:hover': {
		backgroundColor: theme.palette.secondary.dark,
		cursor: 'pointer',
	},
	a: {
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	'@media screen and (max-width: 350px)': {
		minHeight: '50px',
		minWidth: '50px',
	},
}));
export {Nav, Links, LinkItem};
