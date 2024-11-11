import {createContext, useMemo, useState} from 'react';

export const ModalContext = createContext();

function Modal({children}) {
	let [modalStatus, setModalStatus] = useState(false);
	let [modal, setModal] = useState('');
	let [tab, setTab] = useState('0');
	const contextItems = useMemo(() => ({modalStatus, setModalStatus, modal, setModal, tab, setTab}), [modalStatus, setModalStatus, modal, setModal, tab, setTab]);
	return <ModalContext.Provider value={contextItems}>{children}</ModalContext.Provider>;
}

export default Modal;
