import {LoadingButton} from '@mui/lab';
import {Box, Skeleton} from '@mui/material';
const AvatarSkeleton = () => {
	let arr = new Array(25).fill(undefined);

	return (
		<Box sx={{overflow: 'auto'}}>
			<Skeleton variant="text" height={'4rem'}></Skeleton>
			<Box sx={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row', gap: '0.5rem', width: '100%', height: '250px', overflow: 'scroll', marginBottom: '1rem'}}>
				{arr.map((e, i) => {
					return <Skeleton key={i} height={'5rem'} width={'5rem'} variant="rectangular" />;
				})}
			</Box>
			<Box sx={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
				<Skeleton height={'4rem'}>
					<LoadingButton disabled={true} variant="contained" color="info">
						Update
					</LoadingButton>
				</Skeleton>
			</Box>
		</Box>
	);
};

export default AvatarSkeleton;
