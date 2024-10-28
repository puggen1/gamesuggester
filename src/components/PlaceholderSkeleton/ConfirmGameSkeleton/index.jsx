import {OuterAddGameCard} from '../../Game/AddGameCard/index.styles';
import {Skeleton, Typography} from '@mui/material';
function ConfirmGameSkeleton() {
	return (
		<OuterAddGameCard>
			<Skeleton className="gameTitle" variant="text">
				<Typography component="h3" variant="body1">
					placeholder
				</Typography>
			</Skeleton>

			<Skeleton className="steamLink" variant="text">
				<Typography>Steam Link</Typography>
			</Skeleton>

			<Skeleton className="image" height={250} variant="rounded">
				<img />
			</Skeleton>

			<Skeleton className="description" variant="rounded" width={250}>
				<Typography component="p" variant="body2">
					placeholder
				</Typography>
			</Skeleton>
		</OuterAddGameCard>
	);
}

export default ConfirmGameSkeleton;
