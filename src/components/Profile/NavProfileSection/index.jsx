import { Outer, LoggedInSection, LoggedOutSection } from "./index.styles"
import { useContext } from "react"
import { UserContext } from "../../../context/User"
import { ModalContext } from "../../../context/Modal"
import { Button, Typography } from "@mui/material"
import NavProfileBanner from "../NavProfileBanner"
import { Link } from "react-router-dom"
const NavProfileSection = ({loggedIn}) => {
    const {Logout} = useContext(UserContext)
    const {setModalStatus, setModal} = useContext(ModalContext)
  return (
    <Outer loggedIn={loggedIn}>
        {loggedIn ? 
        <LoggedInSection>
         <NavProfileBanner username={localStorage.getItem("username")}/>
         <div style={{display:"flex", justifyContent:"space-between"}}>
         <Link to={"/profile/" + localStorage.getItem("username")}><Button variant="contained" color="info" sx={{borderRadius:"20px"}}><Typography fontWeight="500">view profile</Typography></Button></Link>
         <Button variant="contained" color="info" sx={{borderRadius:"20px"}} onClick={()=>{Logout()}}><Typography fontWeight="500">Logout</Typography></Button>
         </div>
        </LoggedInSection>
        :
       <LoggedOutSection>
       <Button variant="contained" color="secondary" onClick={()=>{setModalStatus(true); setModal("login")}}><Typography fontWeight="500">Login</Typography></Button>
       <Button variant="contained" color="secondary" onClick={()=>{setModalStatus(true); setModal("register")}}><Typography fontWeight="500">Register</Typography></Button>
       </LoggedOutSection>
        }
    </Outer>
  )
}

export default NavProfileSection