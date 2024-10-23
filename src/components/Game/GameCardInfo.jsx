import {Link} from 'react-router-dom';

function GameCardInfo({title, username}) {
	return (
		<div className="gameCardInfo">
			<h2 className="name">{title}</h2>

			<p className="userLink">
				added by <Link to={'profile/' + username}>{username} </Link>
			</p>

			<p className="view">Click to view</p>

			<p className="cardVote">voting (coming soon)</p>
		</div>
	);
}

export default GameCardInfo;
