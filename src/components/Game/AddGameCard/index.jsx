import {Typography, Link} from '@mui/material';
import {OuterAddGameCard} from './index.styles';
function AddGameCard({gameData}) {
	const {name, header_image, short_description, appID} = gameData;
	const steamUrl = 'https://store.steampowered.com/app/' + appID;
	return (
		<OuterAddGameCard>
			<Typography className="gameTitle" component="h3" variant="body1">
				{name}
			</Typography>

			<Link className="steamLink" href={steamUrl} target="_blank" variant="body1">
				Steam Link
			</Link>

			<img alt={name + `'s image`} className="image" src={header_image} />

			<Typography className="description" component="p" variant="body2">
				{short_description}
			</Typography>
		</OuterAddGameCard>
	);
}

export default AddGameCard;
