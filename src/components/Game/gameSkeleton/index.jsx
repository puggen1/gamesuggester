import {Skeleton} from '@mui/material';
import {GamePage} from '../index.styles';
import {AddedBy, GameInfoDiv, Description, Title} from '../gameInfo/index.style';
import GameImage from '../gameImage';
const GameSkeleton = () => {
	return (
		<GamePage>
			<GameInfoDiv>
				<Title>
					<Skeleton variant="text" width={'100%'}></Skeleton>
				</Title>
				<Skeleton variant="text" width={'100%'}>
					<AddedBy color="white" component="p" textAlign="end" variant="p"></AddedBy>
				</Skeleton>
				<Description color="white" component="p" variant="p">
					<Skeleton variant="text" width={'100%'} height={'100px'}></Skeleton>
				</Description>
			</GameInfoDiv>
			<GameImage loading={true} />
		</GamePage>
	);
};

export default GameSkeleton;
