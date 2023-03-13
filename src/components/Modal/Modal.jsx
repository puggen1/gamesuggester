import Background from "./ModalBackground"
import Modal from "@mui/material/Modal"
import Login from "./login";
import Register from "./register";
import AddGame from "./addGame";
import SideNav from "./sideNav";
//changing from css toggle to return toggle to prop toggle
const ModalComp = ({status, type, setModalStatus, handleModalFunction}) => {
  if(type === "login"){
    return(
      <Modal open={status} onClose={()=>{setModalStatus(false)}}>
        <Login key="login" handleModalFunction={handleModalFunction} setModalStatus={setModalStatus}/>
      </Modal>
    ) 
  }
  else if(type === "register"){
    return(
      <Modal open={status} onClose={()=>{setModalStatus(false)}}>
        <Register key="register" handleModalFunction={handleModalFunction} setModalStatus={setModalStatus}/>
      </Modal>
    )
  }
  else if(type === "sidenav"){
    return(
      <Modal open={status} onClose={()=>{setModalStatus(false)}}>
        <SideNav key="sidenav" handleModalFunction={handleModalFunction} setModalStatus={setModalStatus}/>
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