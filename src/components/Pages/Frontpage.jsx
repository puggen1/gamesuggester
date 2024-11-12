import {useContext} from 'react';
import {GameContext} from '../../context/games';
import GameCard from '../Game/GameCard';
import {Skeleton} from '@mui/material';
import '../../assets/style/game.css';

function Frontpage() {
	const {data, isLoading, isError} = useContext(GameContext);
	return (
		<div className="mainContent">
			<div id="gameCards">
				{isLoading &&
					new Array(12).fill(undefined).map((e, i) => {
						return <Skeleton variant="rounded" height={'200px'} className="gameCard" key={i} />;
					})}

				{isError ? <p>Error...</p> : null}

				{!isLoading &&
					!isError &&
					data.map((game) => {
						return <GameCard added={game.createdAt} id={game.id} image={game.image} key={game.id} title={game.title} url={game.url} user={game.addedBy?.username} />;
					})}
			</div>
		</div>
	);
}

export default Frontpage;
