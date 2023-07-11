import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Links, LinkItem } from './index.styles'
import { useContext } from 'react'
import { ModalContext } from '../../context/Modal'
import { UserContext } from '../../context/User'
import { Button, Drawer,Box } from '@mui/material'
import NavProfileSection from '../Profile/NavProfileSection'
import HomeIcon from '@mui/icons-material/Home';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import ControllerIcon from '@mui/icons-material/SportsEsports';
const SideNav = ({openDrawer, setOpenDrawer}) =>{
  const {setModalStatus,setModal} = useContext(ModalContext);
  const {loggedIn, setLoggedIn} = useContext(UserContext)
  return (
    <Drawer className='sideNav' anchor='left' open={openDrawer} onClose={()=>{setOpenDrawer(false)}}>
    <Nav>
        <Box sx={{display:"grid", justifyContent:"end", padding:"0 1rem"}}>
          <Button color='warning' onClick={()=>{setOpenDrawer(false)}} variant='text'><CloseIcon sx={{fontSize:50}}/></Button>
        </Box>
        <Links>
        <LinkItem onClick={()=>{setOpenDrawer(false)}}>
        <Link to="/" style={{ textDecoration: 'none' }}>
        <HomeIcon fontSize='large' color='warning'/>
        </Link>
        </LinkItem>
        
        {loggedIn && <LinkItem onClick={()=>{setModalStatus(true); setModal(loggedIn ? "AddGame" : "login"); setOpenDrawer(false)}}><AddIcon fontSize='large' color='warning'/></LinkItem>}
        <LinkItem>
        <ControllerIcon fontSize='large' color='warning'/>
        </LinkItem>
        </Links>
        <NavProfileSection loggedIn={loggedIn} setLoggedIn={setLoggedIn} setOpenDrawer={setOpenDrawer}/>
        
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