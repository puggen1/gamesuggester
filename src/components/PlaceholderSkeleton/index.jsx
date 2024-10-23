import {Skeleton} from '@mui/material';
import AddGamePlaceholder from './AddGamePlaceholder';
function PlaceholderSkeleton({children, type}) {
	if (type === 'addGame') {
		return <AddGamePlaceholder />;
	} else {
		return <Skeleton>{children}</Skeleton>;
	}
}

export default PlaceholderSkeleton;
