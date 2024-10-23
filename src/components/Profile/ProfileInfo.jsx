import ProfileImage from './ProfileImage';
import {Typography} from '@mui/material';
import {InnerProfileInfo} from './index.styles';
function ProfileInfo({username}) {
	const url = `https://api.dicebear.com/6.x/initials/svg?seed=${username}&radius=10&backgroundType=gradientLinear`;
	return (
    <InnerProfileInfo>
        <ProfileImage
            picture={url}
            size="regular"
        />

        <Typography
            component="h1"
            fontFamily="Lato"
            fontWeight="400"
            style={{color: '#e9e9e9'}}
            variant="h4"
        >
            {username}
        </Typography>
    </InnerProfileInfo>
	);
}

export default ProfileInfo;
