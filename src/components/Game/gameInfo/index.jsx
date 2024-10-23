import {GameInfoDiv, SteamLink, AddedBy, Description, Title} from './index.style';
import {Typography} from '@mui/material';
import {Link} from 'react-router-dom';

function GameInfo({title, steam, user, description}) {
	return (
		<GameInfoDiv>
			<Title
    color="white"
    component="h1"
    fontFamily="lato"
    fontWeight="500"
    variant="h4"
			>
				{title}
			</Title>

			<AddedBy
    color="white"
    component="p"
    textAlign="end"
    variant="p"
			>
				added by:{' '}
				<Link
    style={{textDecorationColor: 'white', color: 'white'}}
    to={'/profile/' + user}
				>
					{user}
				</Link>
			</AddedBy>

			<Description
    color="white"
    component="p"
    variant="p"
			>
				{description ? description : 'no description'}
			</Description>

			<SteamLink
    target="_blank"
    to={steam}
			>
				<Typography
    color="white"
    component="p"
    textAlign="end"
    variant="p"
				>
					view on steam
				</Typography>
			</SteamLink>
		</GameInfoDiv>
	);
}

export default GameInfo;
