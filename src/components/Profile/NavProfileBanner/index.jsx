import {Typography} from '@mui/material';
import ProfileImage from '../ProfileImage';
import {OuterBanner} from './index.styles';
function NavProfileBanner({username}) {
	return (
		<OuterBanner>
			<ProfileImage picture={'https://api.dicebear.com/5.x/initials/svg?backgroundType=gradientLinear&radius=10&seed=' + username} size="small" />

			<Typography color="#e9e9e9" component="p" marginRight="1rem" textAlign="end" variant="h6">
				{username}
			</Typography>
		</OuterBanner>
	);
}

export default NavProfileBanner;
