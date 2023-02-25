import Button from "../Button"
import {Link} from "react-router-dom";
import ProfileImage from "./ProfileImage";
const HeaderProfile = ({user}) => {
    if(user){
        return(
            <Link to={'/profile?username=' + user.username}><p>{user.username}</p> <ProfileImage picture={user.profilePicture} size="small"/> </Link>
        )
    }
  return (
    <div><Button target="login" text="login / register"/></div>

  )
}

export default HeaderProfile