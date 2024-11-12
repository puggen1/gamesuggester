import {Outer, LoggedInSection, LoggedOutSection} from './index.styles';
import {useContext} from 'react';
import {UserContext} from '../../../context/User';
import {ModalContext} from '../../../context/Modal';
import {Button, Typography} from '@mui/material';
import NavProfileBanner from '../NavProfileBanner';
import {Link} from 'react-router-dom';
function NavProfileSection({loggedIn, setOpenDrawer}) {
	const {logout} = useContext(UserContext);
	const {setModalStatus, setModal} = useContext(ModalContext);
	return (
		<Outer loggedIn={loggedIn}>
			{loggedIn ? (
				<LoggedInSection>
					<NavProfileBanner username={localStorage.getItem('username')} url={localStorage.getItem('profilePicture')} />

					<div style={{display: 'flex', justifyContent: 'space-between'}}>
						<Link to={'/profile/' + localStorage.getItem('username')}>
							<Button
								color="info"
								onClick={() => {
									setOpenDrawer(false);
								}}
								sx={{borderRadius: '20px'}}
								variant="contained">
								<Typography fontWeight="500">view profile</Typography>
							</Button>
						</Link>

						<Button
							color="info"
							onClick={() => {
								logout();
							}}
							sx={{borderRadius: '20px'}}
							variant="contained">
							<Typography fontWeight="500">Logout</Typography>
						</Button>
					</div>
				</LoggedInSection>
			) : (
				<LoggedOutSection>
					<Button
						color="secondary"
						onClick={() => {
							setModalStatus(true);
							setModal('login');
						}}
						variant="contained">
						<Typography fontWeight="500">Login</Typography>
					</Button>

					<Button
						color="secondary"
						onClick={() => {
							setModalStatus(true);
							setModal('register');
						}}
						variant="contained">
						<Typography fontWeight="500">Register</Typography>
					</Button>
				</LoggedOutSection>
			)}
		</Outer>
	);
}

export default NavProfileSection;
