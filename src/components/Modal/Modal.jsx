import Background from "./ModalBackground"
import { Modal } from "@mui/material";
import Login from "./login";
import Register from "./register";
import { useContext } from "react";
import { ModalContext } from "../../context/Modal";
//changing from css toggle to return toggle to prop toggle
const ModalComp = () => {
  const {modalStatus, setModalStatus, modal, setModal} = useContext(ModalContext)
  if(modal === "login"){
    return(
      <Modal open={modalStatus} onClose={()=>{setModalStatus(false)}}>
        <Login key="login" handleModalFunction={setModal} setModalStatus={setModalStatus}/>
      </Modal>
    ) 
  }
  else if (modal === "register"){
    return(
      <Modal  open={modalStatus} onClose={()=>{setModalStatus(false)}}>
        <Register key="register" handleModalFunction={setModal} setModalStatus={setModalStatus}/>
      </Modal>
    )
  }
 
}

export default ModalComp