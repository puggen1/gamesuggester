import {Typography} from '@mui/material';
import {OuterProfileStats} from './index.styles';
import {StatBox} from '../index.styles';
import Stat from '../Stat';
import CountryFlag from '../../CountryFlag';
function ProfileStats({gamesAdded, gamesVoted, joined, nationality}) {
	return (
		<OuterProfileStats>
			{typeof gamesAdded === 'number' && (
				<StatBox>
					<Typography variant="h6">Games Added</Typography>

					<Stat
    stat={
							<Typography fontWeight="300" variant="h6">
								{gamesAdded}
							</Typography>
						}
					/>
				</StatBox>
			)}

			{gamesVoted ? (
				<StatBox>
					<Typography variant="h6">Games Voted</Typography>

					<Stat
    stat={
							<Typography fontWeight="300" variant="h6">
								{gamesVoted}
							</Typography>
						}
					/>
				</StatBox>
			) : null}

			{nationality ? (
				<StatBox>
					<Typography variant="h6">Nationality</Typography>

					<Stat stat={<CountryFlag flag={nationality} />} />
				</StatBox>
			) : null}

			{joined ? (
				<StatBox>
					<Typography variant="h6">Joined</Typography>

					<Stat
    stat={
							<Typography fontWeight="300" variant="h6">
								{joined}
							</Typography>
						}
					/>
				</StatBox>
			) : null}
		</OuterProfileStats>
	);
}

export default ProfileStats;
