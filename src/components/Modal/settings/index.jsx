import {Typography, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import React, {useContext} from 'react';
import {ModalContext} from '../../../context/Modal';
import {style} from './style';
import {Email, Image, Password} from '@mui/icons-material';
const Settings = React.forwardRef(() => {
	// eslint-disable-next-line no-unused-vars
	const {setModalStatus, setModal} = useContext(ModalContext);
	return (
		<Box sx={style}>
			<Typography component="h2" variant="h4" textAlign={'center'} color="warning">
				Settings
			</Typography>
			<List>
				<ListItem>
					<ListItemButton>
						<ListItemIcon>
							<Image />
						</ListItemIcon>
						<ListItemText color="warning" primary="Avatar" />
					</ListItemButton>
				</ListItem>
				<ListItem>
					<ListItemButton>
						<ListItemIcon>
							<Password />
						</ListItemIcon>
						<ListItemText color="warning" primary="password" />
					</ListItemButton>
				</ListItem>
				<ListItem>
					<ListItemButton>
						<ListItemIcon>
							<Email />
						</ListItemIcon>
						<ListItemText color="warning" primary="Email" />
					</ListItemButton>
				</ListItem>
			</List>
		</Box>
	);
});

export default Settings;
