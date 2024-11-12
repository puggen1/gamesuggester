import {Typography, Box, Tab, useMediaQuery, useTheme, Snackbar, Alert, Button} from '@mui/material';
Close;
import React, {useContext, useState} from 'react';
import {ModalContext} from '../../../context/Modal';
import {style} from './style';
import {TabContext, TabList, TabPanel} from '@mui/lab';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import {Close, Lock} from '@mui/icons-material';
import ProfileTab from './profileTab';
import SecurityTab from './securityTab';
//import {Email, Image, Password} from '@mui/icons-material';
const Settings = React.forwardRef(({value, setValue}) => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	// eslint-disable-next-line no-unused-vars
	const {setModalStatus, setModal} = useContext(ModalContext);
	const handleAction = (e, newValue) => {
		setValue(newValue);
	};

	/**
	 * alert controlls
	 */
	const [isOpen, setIsOpen] = useState(false);
	const [error, setError] = useState(false);
	const [message, setMessage] = useState('');
	const cancel = () => {
		setIsOpen(false);
	};
	return (
		<>
			<Box sx={style}>
				<Typography
					sx={{flexShrink: 0}} // Prevent header from shrinking
					component="h2"
					variant="h4"
					textAlign={'center'}
					color="warning">
					Settings
				</Typography>
				<Box
					sx={{
						display: 'flex',
						flexDirection: isMobile ? 'column' : 'row',
						paddingTop: '2rem',
						'& .MuiTab-root': {
							color: 'warning.main',
							'&.Mui-selected': {
								color: 'warning.main',
							},
						},
					}}>
					<TabContext value={value}>
						<TabList
							TabIndicatorProps={{
								sx: {
									backgroundColor: 'warning.main',
								},
							}}
							orientation={isMobile ? 'horizontal' : 'vertical'}
							onChange={handleAction}>
							<Tab icon={<ManageAccountsIcon />} iconPosition="start" label={'Profile'} value={'0'} color="warning" />
							<Tab icon={<Lock />} iconPosition="start" label={'Security'} value={'1'} />
						</TabList>
						<Box sx={{overflow: 'auto', height: '100%', maxHeight: '100%', maxWidth: '100%', width: '100%'}}>
							<TabPanel value="0" sx={{padding: '0 1rem', overflow: 'auto'}}>
								<ProfileTab feedBack={setMessage} openFeedback={setIsOpen} setFeedBackType={setError} />
							</TabPanel>
							<TabPanel value="1" sx={{padding: '0 1rem'}}>
								<SecurityTab feedBack={setMessage} openFeedback={setIsOpen} setFeedBackType={setError} />
							</TabPanel>
						</Box>
					</TabContext>
				</Box>
			</Box>
			<Snackbar autoHideDuration={10000} onClose={cancel} open={isOpen}>
				<Alert sx={{display: 'flex', alignItems: 'center'}} severity={error ? 'warning' : 'success'}>
					{message}
					<Button
						onClick={() => {
							cancel();
						}}>
						<Close />
					</Button>
				</Alert>
			</Snackbar>
		</>
	);
});

export default Settings;
