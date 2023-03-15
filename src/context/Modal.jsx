import { createContext,  useState} from "react";


export const ModalContext = createContext();

const Modal = (props)=>{
    let [modalStatus, setModalStatus] = useState(false);
    let [modal, setModal] = useState("");
    return(
        <>
        <ModalContext.Provider value={{modalStatus, setModalStatus, modal, setModal}}>
            {props.children}
        </ModalContext.Provider>
        </>
    )
}


export default Modal