import ActivateModalButton from "../Button"
import {Link} from "react-router-dom";
import ProfileImage from "./ProfileImage";
const HeaderProfile = ({user,handleModalFunction, toggleModal}) => {
    if(user){
        return(
            <Link className="headerProfile" to={'/profile?username=' + user.username}><p>{user.username}</p> <ProfileImage picture={user.profilePicture} size="small"/> </Link>
        )
    }
  return (
    <div className="headerProfile" ><ActivateModalButton active={false} toggleModal={toggleModal} handleModalFunction={handleModalFunction}  dataType="login" type="primary modalButton" text="login / register"/></div>

  )
}

export default HeaderProfile