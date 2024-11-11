import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import GameInfo from '../Game/gameInfo';
import GameImage from '../Game/gameImage';
import {GamePage} from '../Game/index.styles';
import useApiFetcher from '../../hooks/useApiFetcher';
function Game() {
	const {id} = useParams();
	const [game, setGame] = useState({});
	const {data, isLoading, isError} = useApiFetcher('games/' + id);

	useEffect(() => {
		if (data && !isLoading && !isError) {
			setGame(data);
		}
	}, [data, isLoading, isError]);

	return (
		<div className="mainContent" id="game">
			{isLoading ? <p>Loading...</p> : null}

			{isError ? <p>Error...</p> : null}

			{!isLoading && !isError && (
				<GamePage>
					<GameInfo description={game.description ? game.description : undefined} steam={game.url} title={game.title} user={game.addedBy?.username} />

					<GameImage
						alt={`
      ${game.title}'s image
     `}
						src={game.image}
					/>
				</GamePage>
			)}
		</div>
	);
}

export default Game;
