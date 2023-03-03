import Background from "./ModalBackground"
import Modal from "@mui/material/Modal"
import Login from "./login";
import Register from "./register";
import AddGame from "./addGame";
//changing from css toggle to return toggle to prop toggle
const ModalComp = ({status, type, setModalStatus, handleModalFunction}) => {
  if(type === "login"){
    return(
      <Modal open={status} onClose={()=>{setModalStatus(false)}}>
        <Login key="login" handleModalFunction={handleModalFunction} />
      </Modal>
    ) 
  }
  else if(type === "register"){
    return(
      <Modal open={status} onClose={()=>{setModalStatus(false)}}>
        <Register key="register" handleModalFunction={handleModalFunction}/>
      </Modal>
    )
  } 
  else{
    return(
      <Modal key="AddGame" open={status} onClose={()=>{setModalStatus(false)}}>
        <AddGame/>
      </Modal>
    )
  }
 
}

export default ModalComp