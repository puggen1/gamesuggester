import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import ArrowDropUp from '@mui/icons-material/ArrowDropUp';
import Settings from '@mui/icons-material/Settings';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import EditIcon from '@mui/icons-material/Edit';
import PasswordIcon from '@mui/icons-material/Password';
import EmailIcon from '@mui/icons-material/Email';
import {Button} from '@mui/material';

import {useState} from 'react';
import {OuterDropdown} from './index.styles.js';
function Dropdown() {
	/*
    what i need: a button for toggling the dropdown
    content is hidden by default
    state for toggling the dropdown

     */
	const [isOpen, setIsOpen] = useState(false);
	return (
		<OuterDropdown>
			<Button
				className={isOpen ? 'mainButton open' : 'mainButton'}
				color="secondary"
				endIcon={isOpen ? <ArrowDropUp /> : <ArrowDropDown />}
				onClick={() => {
					setIsOpen((prev) => {
						return !prev;
					});
				}}
				startIcon={<Settings className="rotate" />}
				variant="contained">
				Settings
			</Button>

			<div className={isOpen ? 'dropdownContent showContent' : 'dropdownContent'}>
				<div className="dropdownItem">
					<Button color="secondary" endIcon={<ArrowDropUp sx={{visibility: 'hidden'}} />} startIcon={<OpenInNewIcon />} variant="contained">
						Open Settings
					</Button>
				</div>

				<div className="dropdownItem">
					<Button color="secondary" endIcon={<ArrowDropUp sx={{visibility: 'hidden'}} />} startIcon={<EditIcon />} variant="contained">
						Change Avatar
					</Button>
				</div>

				<div className="dropdownItem">
					<Button color="secondary" endIcon={<ArrowDropUp sx={{visibility: 'hidden'}} />} startIcon={<PasswordIcon />} variant="contained">
						Change Password
					</Button>
				</div>

				<div className="dropdownItem">
					<Button color="secondary" endIcon={<ArrowDropUp sx={{visibility: 'hidden'}} />} startIcon={<EmailIcon />} variant="contained">
						Change Email
					</Button>
				</div>
			</div>
		</OuterDropdown>
	);
}

export default Dropdown;
