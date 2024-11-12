import {Skeleton} from '@mui/material';
import {GameImg} from './index.styles';
function GameImage({src, alt, loading}) {
	if (loading) {
		return (
			<Skeleton variant="rounded" width={'100%'}>
				<GameImg src="./logo.png" />
			</Skeleton>
		);
	}
	return <GameImg alt={alt} src={src} />;
}

export default GameImage;
