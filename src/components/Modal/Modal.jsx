import Background from "./ModalBackground"
import { Modal } from "@mui/material";
import Login from "./login";
import Register from "./register";
import AddGame from "./addGame";
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
  else if(modal === "register"){
    return(
      <Modal  open={modalStatus} onClose={()=>{setModalStatus(false)}}>
        <Register key="register" handleModalFunction={setModal} setModalStatus={setModalStatus}/>
      </Modal>
    )
  }
  else{
    return(
      <Modal key="AddGame" open={modalStatus} onClose={()=>{setModalStatus(false)}}>
        <AddGame handleModalFunction={setModal}/>
      </Modal>
    )
  }
 
}

export default ModalComp