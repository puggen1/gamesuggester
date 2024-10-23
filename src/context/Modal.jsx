import {createContext, useMemo, useState} from 'react';

export const ModalContext = createContext();

function Modal({children}) {
	let [modalStatus, setModalStatus] = useState(false);
	let [modal, setModal] = useState('');
	const contextItems = useMemo(()=>({modalStatus, setModalStatus, modal, setModal}),[modalStatus, setModalStatus, modal, setModal])
	return (
    <ModalContext.Provider value={contextItems}>
        {children}
    </ModalContext.Provider>
	);
}

export default Modal;
