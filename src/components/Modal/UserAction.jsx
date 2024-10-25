import {Grid} from '@mui/material';
import ActivateModalButton from '../Button';
import {SingleUserAction} from './index.styles';
function UserAction({handleModalFunction}) {
	return (
		<Grid container justifyContent="center" marginBottom={2} spacing={2}>
			<Grid item xs={4}>
				<SingleUserAction>
					<ActivateModalButton dataType="login" handleModalFunction={handleModalFunction} text="Login" />
				</SingleUserAction>
			</Grid>

			<Grid item xs={4}>
				<SingleUserAction>
					<ActivateModalButton dataType="register" handleModalFunction={handleModalFunction} text="Register" />
				</SingleUserAction>
			</Grid>
		</Grid>
	);
}

export default UserAction;
