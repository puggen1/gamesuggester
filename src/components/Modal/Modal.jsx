import {Modal} from '@mui/material';
import Login from './login';
import Register from './register';
import {useContext} from 'react';
import {ModalContext} from '../../context/Modal';
import Settings from './settings';
//changing from css toggle to return toggle to prop toggle
function ModalComp() {
	const {modalStatus, setModalStatus, modal, setModal, setTab, tab} = useContext(ModalContext);
	if (modal === 'login') {
		return (
			<Modal
				onClose={() => {
					setModalStatus(false);
				}}
				open={modalStatus}>
				<Login handleModalFunction={setModal} key="login" setModalStatus={setModalStatus} />
			</Modal>
		);
	} else if (modal === 'register') {
		return (
			<Modal
				onClose={() => {
					setModalStatus(false);
				}}
				open={modalStatus}>
				<Register handleModalFunction={setModal} key="register" setModalStatus={setModalStatus} />
			</Modal>
		);
	} else if (modal === 'settings') {
		return (
			<Modal
				sx={{overflow: 'auto'}}
				onClose={() => {
					setModalStatus(false);
				}}
				open={modalStatus}>
				<Settings value={tab} setValue={setTab} handleModalFunction={setModal} key="settings" setModalStatus={setModalStatus} />
			</Modal>
		);
	}
}

export default ModalComp;
