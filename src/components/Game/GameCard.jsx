import {Link} from 'react-router-dom';
import GameCardImage from './GameCardImage';
import GameCardInfo from './GameCardInfo';
import '../../assets/style/game.css';
function GameCard({title, image, user, added, url, profile, id}) {
	return (
		<Link
    className={profile ? 'gameCard profileVersion' : 'gameCard'}
    to={`/game/${id}`}
		>
			<GameCardImage image={image} />

			<GameCardInfo
    added={added}
    title={title}
    url={url}
    username={user}
			/>
		</Link>
	);
}

export default GameCard;
