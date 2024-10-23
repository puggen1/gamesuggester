import {useContext} from 'react';
import {GameContext} from '../../context/games';
import GameCard from '../Game/GameCard';

function Frontpage() {
	const {data, isLoading, isError} = useContext(GameContext);
	return (
    <div className="mainContent">
        <div id="gameCards">
            {isLoading ? <p>
                Loading...
                         </p> : null}

            {isError ? <p>
                Error...
                       </p> : null}

            {!isLoading &&
					!isError &&
					data.map((game) => {
						return (<GameCard
    added={game.createdAt}
    id={game.id}
    image={game.image}
    key={game.id}
    title={game.title}
    url={game.url}
    user={game.addedBy?.username}
						        />);
					})}
        </div>
    </div>
	);
}

export default Frontpage;
