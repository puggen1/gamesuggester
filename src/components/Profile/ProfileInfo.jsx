import ProfileImage from './ProfileImage';
import {Typography} from '@mui/material';
import {InnerProfileInfo} from './index.styles';
function ProfileInfo({username, url}) {
	return (
		<InnerProfileInfo>
			<ProfileImage picture={url} size="large" />

			<Typography component="h1" fontFamily="Lato" fontWeight="400" style={{color: '#e9e9e9'}} variant="h4">
				{username}
			</Typography>
		</InnerProfileInfo>
	);
}

export default ProfileInfo;
