import Button from "../Button"
import {Link} from "react-router-dom";
import ProfileImage from "./ProfileImage";
import modalToggler from "../Modal/modalTarget";
const HeaderProfile = ({user, modalFunction}) => {
    if(user){
        return(
            <Link className="headerProfile" to={'/profile?username=' + user.username}><p>{user.username}</p> <ProfileImage picture={user.profilePicture} size="small"/> </Link>
        )
    }
  return (
    <div className="headerProfile" ><Button modalFunction={modalFunction} dataType="login" type="primary modalButton" text="login / register"/></div>

  )
}

export default HeaderProfile