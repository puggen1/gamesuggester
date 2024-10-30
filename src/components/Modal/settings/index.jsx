import {Typography, Box, Tab} from '@mui/material';
import React, {useContext} from 'react';
import {ModalContext} from '../../../context/Modal';
import {style} from './style';
import {TabContext, TabList, TabPanel} from '@mui/lab';
import ProfileTab from './profileTab';
import SecurityTab from './securityTab';
//import {Email, Image, Password} from '@mui/icons-material';
const Settings = React.forwardRef(({value, setValue}) => {
	// eslint-disable-next-line no-unused-vars
	const {setModalStatus, setModal} = useContext(ModalContext);
	const handleAction = (e, newValue) => {
		setValue(newValue);
	};
	return (
		<Box sx={style}>
			<Typography component="h2" variant="h4" textAlign={'center'} color="warning">
				Settings
			</Typography>
			<Box sx={{display: 'flex', paddingTop: '2rem'}}>
				<TabContext value={value}>
					<TabList orientation="vertical" onChange={handleAction}>
						<Tab label={'Profile'} value={'0'} />
						<Tab label={'Security'} value={'1'} />
					</TabList>
					<Box sx={{width: '100%'}}>
						<TabPanel value="0" sx={{padding: '0 1rem', overflow: 'auto'}}>
							<ProfileTab />
						</TabPanel>
						<TabPanel value="1" sx={{padding: '0 1rem'}}>
							<SecurityTab />
						</TabPanel>
					</Box>
				</TabContext>
			</Box>
		</Box>
	);
});

export default Settings;
