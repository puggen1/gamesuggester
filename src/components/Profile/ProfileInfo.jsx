import ProfileImage from './ProfileImage';
import {Typography} from '@mui/material';
import {InnerProfileInfo} from './index.styles';
import {useEffect, useState} from 'react';
function ProfileInfo({username, url}) {
	const [imgUrl, setImgUrl] = useState(url);

	useEffect(() => {
		if (url === undefined) {
			setImgUrl(`https://api.dicebear.com/6.x/initials/svg?seed=${username}&radius=10&backgroundType=gradientLinear`);
		}
	}, [url]);
	return (
		<InnerProfileInfo>
			<ProfileImage picture={imgUrl} size="large" />

			<Typography component="h1" fontFamily="Lato" fontWeight="400" style={{color: '#e9e9e9'}} variant="h4">
				{username}
			</Typography>
		</InnerProfileInfo>
	);
}

export default ProfileInfo;
