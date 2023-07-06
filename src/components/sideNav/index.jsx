import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Links, LinkItem } from './index.styles'
import { useContext } from 'react'
import { ModalContext } from '../../context/Modal'
import { UserContext } from '../../context/User'
import { Button, Drawer,Box } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import CloseIcon from '@mui/icons-material/Close';
const SideNav = ({openDrawer, setOpenDrawer}) =>{
  const {setModalStatus,setModal} = useContext(ModalContext);
  const {loggedIn, setLoggedIn} = useContext(UserContext)
  return (
    <Drawer anchor='left' open={openDrawer} onClose={()=>{setOpenDrawer(false)}}>
    <Nav>
        <Box sx={{display:"grid", justifyContent:"end"}}>
          <Button color='warning' onClick={()=>{setOpenDrawer(false)}} variant='text'><CloseIcon sx={{fontSize:50}}/></Button>
        </Box>
        <Links>
        <LinkItem onClick={()=>{setOpenDrawer(false)}}>
        <Link to="/" style={{ textDecoration: 'none' }}>
        <HomeIcon fontSize='large' color='warning'/>
        </Link>
        </LinkItem>
        
        {loggedIn && <LinkItem onClick={()=>{setModalStatus(true); setModal(loggedIn ? "AddGame" : "login"); setOpenDrawer(false)}}>+</LinkItem>}
        <LinkItem>
        cooming soon
        </LinkItem>
        </Links>
        {loggedIn ? <Button onClick={()=>{setLoggedIn(false), localStorage.removeItem("username"),localStorage.removeItem("token"), localStorage.setItem("userStatus", false)}} sx={{fontSize:25}} variant="text" color='warning'>Logout</Button> : null}
        
    </Nav>
    </Drawer>
  )
}

/**
 * <LinkItem onClick={()=>{setModalStatus(true); setModal(loggedIn ? "AddGame" : "login"); setOpenDrawer(false)}}>
        <Button variant='text' color="warning" sx={{fontSize:25}} >add game +</Button>
        </LinkItem>
 */
export default SideNav