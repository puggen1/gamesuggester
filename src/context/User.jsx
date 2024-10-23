import {createContext, useEffect, useMemo, useRef, useState} from 'react';
import useSendData from '../hooks/useSendData';
import {Alert, Snackbar} from '@mui/material';
export const UserContext = createContext();

function User({children}) {
	const {sender} = useSendData();

	/**
	 * user things to not need updating storage
	 */
	const localstorageStatus = window.localStorage.getItem('userStatus');
	const token = useRef(window.localStorage.getItem('token'));
	const refreshToken = useRef(window.localStorage.getItem('refreshToken'));
	const [loggedIn, setLoggedIn] = useState(localstorageStatus === 'true' ? true : false);

	useEffect(() => {
		//it should call the refresh endpoint to get new token and set it in localstorage
		if (loggedIn && token?.current?.length > 0) {
			(async () => {
				const body = {
					refreshToken: refreshToken.current,
				};
				const response = await sender('users/refreshtoken', 'POST', body, token.current);
				if (response.token) {
					token.current = response.token;
				}
			})();
		}
	}, []);

	/**
	 * for login and logout
	 */
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [username, setUsername] = useState('');
	const [responseStatus, setResponseStatus] = useState(false);
	const emailChange = (event) => {
		setEmail(event.target.value);
	};
	const passwordChange = (event) => {
		setPassword(event.target.value);
	};
	const usernameChange = (event) => {
		setUsername(event.target.value);
	};

	const logout = () => {
		setLoggedIn(false);
		window.localStorage.setItem('userStatus', false);
		window.localStorage.removeItem('username');
		window.localStorage.removeItem('token');
		window.localStorage.removeItem('refreshToken');
	};

	const [isOpen, setIsOpen] = useState(false);
	const [alertMessage, setAlertMessage] = useState('');
	const closeSnack = () => {
		setIsOpen(false);
	};
	const openSnack = () => {
		setIsOpen(true);
	};
	const loginUser = async (data) => {
		let response = await sender('users/login', 'POST', {
			email: data.email,
			password: data.password,
		});
		if (!response.token) {
			setResponseStatus(true);
			return {status: false, message: response.message};
		} else {
			setResponseStatus(false);
			localStorage.setItem('token', response.token);
			token.current = response.token;

			localStorage.setItem('refreshToken', response.refreshToken);
			refreshToken.current = response.refreshToken;

			localStorage.setItem('username', response.username);
			localStorage.setItem('userStatus', true);
			setLoggedIn(true);
			setAlertMessage('Logged in');
			openSnack();
			return {status: true, message: ''};
		}
	};
	const registerUser = async (data) => {
		let response = await sender('users/register', 'POST', {
			email: data.email,
			password: data.password,
			username: data.username,
		});
		if (response.uid) {
			setResponseStatus(false);
			await loginUser(data);
			setAlertMessage('successfully registered, logging in');
			openSnack();
			return {status: true, message: ''};
		} else {
			setResponseStatus(true);
			return {status: false, message: response.message};
		}
	};
	const contextItems = useMemo(() => ({setLoggedIn, loggedIn, loginUser, email, emailChange, password, passwordChange, usernameChange, username, logout, token, refreshToken, responseStatus, registerUser}), [setLoggedIn, loggedIn, loginUser, email, emailChange, password, passwordChange, usernameChange, username, logout, token, refreshToken, responseStatus, registerUser]);
	return (
		<UserContext.Provider value={contextItems}>
			{children}

			<Snackbar
    anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
    autoHideDuration={5000}
    onClose={closeSnack}
    open={isOpen}
			>
				<Alert>{alertMessage}</Alert>
			</Snackbar>
		</UserContext.Provider>
	);
}

export default User;
