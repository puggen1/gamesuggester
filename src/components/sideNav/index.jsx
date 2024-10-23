import {Link, useNavigate} from 'react-router-dom';
import {Nav, Links, LinkItem} from './index.styles';
import {useContext} from 'react';
import {ModalContext} from '../../context/Modal';
import {UserContext} from '../../context/User';
import {Button, Drawer, Box} from '@mui/material';
import NavProfileSection from '../Profile/NavProfileSection';
import HomeIcon from '@mui/icons-material/Home';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import ControllerIcon from '@mui/icons-material/SportsEsports';
function SideNav({openDrawer, setOpenDrawer}) {
	const {setModalStatus, setModal} = useContext(ModalContext);
	const {loggedIn, setLoggedIn} = useContext(UserContext);
	const navigate = useNavigate();
	return (
		<Drawer
    anchor="left"
    className="sideNav"
    onClose={() => {
				setOpenDrawer(false);
			}}
    open={openDrawer}
		>
			<Nav>
				<Box sx={{display: 'grid', justifyContent: 'end', padding: '0 1rem'}}>
					<Button
    color="warning"
    onClick={() => {
							setOpenDrawer(false);
						}}
    variant="text"
					>
						<CloseIcon sx={{fontSize: 50}} />
					</Button>
				</Box>

				<Links>
					<LinkItem
    onClick={() => {
							setOpenDrawer(false);
						}}
					>
						<Link
    style={{textDecoration: 'none'}}
    to="/"
						>
							<HomeIcon
    color="warning"
    fontSize="large"
							/>
						</Link>
					</LinkItem>

					{loggedIn ? (
						<LinkItem
    onClick={() => {
								setModalStatus(true);
								setModal(loggedIn ? navigate('/game/add') : 'login');
								setOpenDrawer(false);
							}}
						>
							<AddIcon
    color="warning"
    fontSize="large"
							/>
						</LinkItem>
					) : null}

					<LinkItem>
						<ControllerIcon
    color="warning"
    fontSize="large"
						/>
					</LinkItem>
				</Links>

				<NavProfileSection
    loggedIn={loggedIn}
    setLoggedIn={setLoggedIn}
    setOpenDrawer={setOpenDrawer}
				/>
			</Nav>
		</Drawer>
	);
}

/**
 * <LinkItem onClick={()=>{setModalStatus(true); setModal(loggedIn ? "AddGame" : "login"); setOpenDrawer(false)}}>
        <Button variant='text' color="warning" sx={{fontSize:25}} >add game +</Button>
        </LinkItem>
 */
export default SideNav;
