import { Outer, LoggedInSection, LoggedOutSection } from "./index.styles"
import { useContext } from "react"
import { UserContext } from "../../../context/User"
import { ModalContext } from "../../../context/Modal"
import { Button } from "@mui/material"
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
         <Link to={"/profile/" + localStorage.getItem("username")}><Button variant="contained" color="info" sx={{borderRadius:"20px"}}>view profile</Button></Link>
         <Button variant="contained" color="info" sx={{borderRadius:"20px"}} onClick={()=>{Logout()}}>Logout</Button>
         </div>
        </LoggedInSection>
        :
       <LoggedOutSection>
       <Button variant="contained" color="secondary" onClick={()=>{setModalStatus(true); setModal("login")}}>Login</Button>
       <Button variant="contained" color="secondary" onClick={()=>{setModalStatus(true); setModal("register")}}>Register</Button>
       </LoggedOutSection>
        }
    </Outer>
  )
}

export default NavProfileSection