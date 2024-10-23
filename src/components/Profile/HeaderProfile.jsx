import {HeaderProfileButton} from '../Button';
import {Link} from 'react-router-dom';
import ProfileImage from './ProfileImage';
import {Typography} from '@mui/material';

function HeaderProfile({user}) {
	if (user) {
		return (
			<Link
    className="headerProfile"
    to={'/profile/' + user.username}
			>
				<Typography
    component="p"
    margin="0"
    variant="body1"
				>
					{user.username}
				</Typography>

				<ProfileImage
    picture={user.profilePicture}
    size="small"
				/>
			</Link>
		);
	}
	return (
		<div className="headerProfile">
			<HeaderProfileButton
    dataType="login"
    type="primary modalButton"
			/>
		</div>
	);
}

export default HeaderProfile;
