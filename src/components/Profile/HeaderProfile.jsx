import ActivateModalButton from "../Button"
import {Link} from "react-router-dom";
import ProfileImage from "./ProfileImage";
import { Button, Typography } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../../context/User";
import { ModalContext } from "../../context/Modal";
const HeaderProfile = ({user}) => {
    const {setModalStatus, setModal} = useContext(ModalContext)
    if(user){
        return(<>
              <Link className="headerProfile" to={'/profile/' + user.username}><Typography component="p" variant="body1" margin="0">{user.username}</Typography> <ProfileImage picture={user.profilePicture} size="small"/> </Link>
              </>
        )
    }
  return (
    <div className="headerProfile" ><ActivateModalButton active={false} toggleModal={setModalStatus} handleModalFunction={setModal}  dataType="login" type="primary modalButton" text="login / register"/></div>

  )
}

export default HeaderProfile