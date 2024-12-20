import {useParams} from 'react-router-dom';
import {GameContext} from '../../context/games';
import {useContext} from 'react';
import useApiFetcher from '../../hooks/useApiFetcher';
import ProfileInfo from '../Profile/ProfileInfo';
import {InfoSection, GamesSection, OuterProfile} from '../Profile/index.styles';
import GameCard from '../Game/GameCard';
import Dropdown from '../Dropdown';
import ProfileStats from '../Stats/ProfileStats';
import ProfileSkeleton from '../Profile/profileSkeleton';
function Profile() {
	//getting userName... maybe later use id
	const {name} = useParams();
	const {data, isLoading, error} = useApiFetcher('users/' + name);
	//getting all games
	const {data: games, isLoading: gamesLoading, error: gamesError} = useContext(GameContext);
	const storedUsername = window.localStorage.getItem('username');
	const LoggedIn = window.localStorage.getItem('userStatus') === 'true' ? true : false;
	console.log(data);
	return (
		<div className="mainContent">
			{isLoading && <ProfileSkeleton />}
			{error ? <div>{error}</div> : null}
			{data[0]?.username ? (
				<OuterProfile>
					<InfoSection>
						<ProfileInfo username={data[0]?.username} url={data[0]?.photoURL} />
						{/* here the settings dropdown will be, and stats*/}
						{LoggedIn && storedUsername === name ? <Dropdown /> : null}
						<ProfileStats
							gamesAdded={
								games.filter((game) => {
									return game.addedBy.uid === data[0].uid;
								}).length
							}
						/>
					</InfoSection>
					<GamesSection>
						{gamesLoading ? <div></div> : null}
						{gamesError ? <div>{gamesError}</div> : null}
						{games ? (
							<div className="games" id="gameCards">
								{games.map((game) => {
									if (game.addedBy?.uid === data[0].uid) {
										return <GameCard id={game.id} image={game.image} key={game.id} profile="true" title={game.title} url={game.url} user={game.addedBy?.username} />;
									}
									return null;
								})}
							</div>
						) : null}{' '}
					</GamesSection>{' '}
				</OuterProfile>
			) : null}
		</div>
	);
}
export default Profile;
