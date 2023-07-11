import { Typography } from "@mui/material";
import ProfileImage from "../ProfileImage";
import { OuterBanner } from "./index.styles";
const NavProfileBanner = ({username}) => {

  return (
    <OuterBanner>
        <ProfileImage picture={"https://api.dicebear.com/5.x/initials/svg?backgroundType=gradientLinear&radius=10&seed=" + username} size="small"/>
        <Typography variant="h6" component="p" textAlign="end" marginRight="1rem" color="#e9e9e9">{username}</Typography>
    </OuterBanner>
  )
}

export default NavProfileBanner