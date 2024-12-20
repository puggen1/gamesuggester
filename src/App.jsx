import Footer from './components/Footer';
import Header from './components/Header/Header';
import {Routes, Route} from 'react-router-dom';
import {useEffect, useState, useContext} from 'react';
import {UserContext} from './context/User';
import {ThemeProvider} from '@mui/material';
import ModalComp from './components/Modal/Modal';
import Frontpage from './components/Pages/Frontpage';
import Profile from './components/Pages/Profile';
import Game from './components/Pages/Game';
import './assets/style/style.css';
import './assets/style/buttons.css';
import {theme} from './assets/style/theme';
import '@fontsource/lato';
import AddGame from './components/Pages/AddGame';
import useSendData from './hooks/useSendData';

function App() {
	/*
  /modal controls
  */
	let [user, setUser] = useState(null);
	const {loggedIn, setLoggedIn, logout} = useContext(UserContext);
	const {sender} = useSendData();

	useEffect(() => {
		if (loggedIn) {
			let token = localStorage.getItem('token');
			let username = localStorage.getItem('username');
			const test = async () => {
				const response = await sender('users/refreshToken', 'POST', {}, token);
				if (response?.error) {
					setUser(null);
					logout();
				} else {
					setUser({username, userStatus: loggedIn, token});
				}
			};
			test();
		} else {
			setUser(null);
			setLoggedIn(false);
			console.log('dette skal kjøre når logget ut');
		}
	}, [loggedIn]);

	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<Header user={user} />

				<ModalComp />

				<Routes>
					<Route element={<Frontpage />} index />

					<Route element={<Profile user={user} />} path="profile/:name" />

					<Route element={<Game />} path="game/:id" />

					<Route element={<AddGame />} path="game/add" />

					<Route element={<h1>404 not found</h1>} path="*" />
				</Routes>

				<Footer />
			</div>
		</ThemeProvider>
	);
}

export default App;
