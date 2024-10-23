import {Typography} from '@mui/material';
import {Link} from 'react-router-dom';
import {useTheme} from '@mui/material';
import {OuterAlreadyAdded} from './index.styles';
function AlreadyAdded({data}) {
	const theme = useTheme();
	return (
    <OuterAlreadyAdded>
        <Typography
            color={theme.palette.warning.main}
            component="h3"
            variant="h6"
        >
            {data.title}

            {' '}
            have already been added
        </Typography>

        <Typography
            color={theme.palette.warning.main}
            component="p"
            variant="h6"
        >
            {' '}

            View it
            {' '}

            <Link
                style={{color: theme.palette.warning.main}}
                to={'/game/' + data.id}
            >
                here
            </Link>
        </Typography>
    </OuterAlreadyAdded>
	);
}

export default AlreadyAdded;
