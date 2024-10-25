import Button from '@mui/material/Button';
import {LoadingButton} from '@mui/lab';
import {useContext} from 'react';
import {ModalContext} from '../context/Modal';
import {ProfileButton} from './index.styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function ActivateModalButton({text, dataType}) {
	const {setModalStatus, setModal} = useContext(ModalContext);
	return (
		<Button
    color="info"
    onClick={() => {
				setModal(dataType), setModalStatus ? setModalStatus(true) : null;
			}}
    sx={{borderRadius: '5px'}}
    variant="contained"
		>
			{text}
		</Button>
	);
}

function HeaderProfileButton({dataType}) {
	const {setModalStatus, setModal} = useContext(ModalContext);
	return (
		<ProfileButton>
			<AccountCircleIcon
    fontSize="large"
    onClick={() => {
					setModal(dataType), setModalStatus ? setModalStatus(true) : null;
				}}
			/>{' '}
		</ProfileButton>
	);
}
function FormButton({text, type, isLoading}) {
	return (
		<LoadingButton color="info" loading={isLoading} sx={{borderRadius: '5px'}} type={type} variant="contained">
			{text}
		</LoadingButton>
	);
}

export default ActivateModalButton;
export {FormButton, HeaderProfileButton};
