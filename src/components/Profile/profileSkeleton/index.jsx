import {Skeleton} from '@mui/material';
import ProfileStats from '../../Stats/ProfileStats';
import {GamesSection, InfoSection, OuterProfile} from '../index.styles';
import '../../../assets/style/game.css';
const ProfileSkeleton = () => {
	return (
		<OuterProfile>
			<InfoSection>
				<Skeleton variant="rounded" height={'250px'}></Skeleton>
				<Skeleton variant="rounded" width={'100%'}>
					<ProfileStats gamesAdded={0} />
				</Skeleton>
			</InfoSection>
			<GamesSection>
				<div className="games" id="gameCards">
					{new Array(6).fill(undefined).map((e, i) => {
						return <Skeleton className="gameCard profileVersion" key={i} height={'250px'} variant="rounded"></Skeleton>;
					})}
				</div>
			</GamesSection>
		</OuterProfile>
	);
};

export default ProfileSkeleton;
