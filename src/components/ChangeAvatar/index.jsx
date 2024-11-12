import {Box, Typography, Button, useMediaQuery} from '@mui/material';
import useApiFetcher from '../../hooks/useApiFetcher';
import {useContext} from 'react';
import {UserContext} from '../../context/User';
import useSendData from '../../hooks/useSendData';
import {useState, useEffect} from 'react';
import {LoadingButton} from '@mui/lab';
import {useTheme} from '@emotion/react';
import {Check} from '@mui/icons-material';
import {useNavigate} from 'react-router-dom';
import AvatarSkeleton from './skeleton';
const ChangeAvatar = ({setFeedBackType, feedBack, openFeedback}) => {
	const navigate = useNavigate();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	console.log(isMobile);
	const {data, isLoading, isError} = useApiFetcher('avatar');
	const {token} = useContext(UserContext);
	const {sender} = useSendData();
	const [avatar, setAvatar] = useState('');
	const [avatarIsLoading, setAvatarIsLoading] = useState(false);
	const handleClick = (seed) => {
		setAvatar(seed);
	};
	const handleChangeAvatar = () => {
		(async () => {
			setAvatarIsLoading(true);
			feedBack('');
			const response = await sender('users/settings', 'PUT', {avatar: avatar}, token.current);
			if (!response.error) {
				setFeedBackType(false);
				feedBack(response.message);
				setTimeout(() => {
					navigate(0);
				}, 2000);
			} else {
				feedBack('something went wrong');
				setFeedBackType(true);
			}
			openFeedback(true);
			setAvatarIsLoading(false);
		})();
	};
	useEffect(() => {
		if (!isLoading && data.length > 0) {
			setAvatar(data[0].seed);
		}
	}, [data, isLoading]);
	return (
		<>
			{isLoading && <AvatarSkeleton />}
			{!isLoading && isError && <p>Error</p>}
			{!isLoading && data.length > 0 && (
				<Box sx={{overflow: 'auto'}}>
					<Typography component={'h3'} variant="h5" color="warning" sx={{marginLeft: '0.5rem', padding: '0.5rem 0'}}>
						Update Avatar
					</Typography>
					<Box sx={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row', gap: '0.5rem', width: '100%', height: '250px', overflow: 'scroll', marginBottom: '1rem'}}>
						{data.map(({svg, seed}, index) => {
							return (
								<Button
									key={index}
									onClick={() => {
										handleClick(seed);
									}}
									id={seed}>
									{avatar === seed && (
										<Box sx={{position: 'relative'}}>
											<Check color="black" sx={{opacity: '0.8', position: 'absolute', width: '5rem', height: '5rem', top: '0', left: 0}} />
											<Box sx={{height: '5rem', width: '5rem', border: 'solid 4px success', boxSizing: 'border-box'}} dangerouslySetInnerHTML={{__html: svg}}></Box>
										</Box>
									)}
									{avatar !== seed && <Box sx={{height: '5rem', width: '5rem'}} dangerouslySetInnerHTML={{__html: svg}} />}
								</Button>
							);
						})}
					</Box>
					<Box sx={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
						<LoadingButton loading={avatarIsLoading} onClick={handleChangeAvatar} variant="contained" color="info">
							Update
						</LoadingButton>
					</Box>
				</Box>
			)}
		</>
	);
};

export default ChangeAvatar;
