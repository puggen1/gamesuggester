import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from './style'
import { useContext } from 'react'
import { ModalContext } from '../../../context/Modal'
import { UserContext } from '../../../context/User'
import { Button, Grid } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { fontSize } from '@mui/system'
const SideNav = React.forwardRef(({handleModalFunction}, ref)=>{
  const {setModalStatus} = useContext(ModalContext);
  const {loggedIn, setLoggedIn} = useContext(UserContext)
  return (
    <Nav ref={ref}>
        <Grid container spacing={2} paddingTop={3} paddingLeft={2}  alignItems="start"   justifyContent="center"  direction="column">
        <Grid item xs={12} alignSelf="end">
        <Button color='warning' onClick={()=>{setModalStatus(false)}} variant='text'><CloseIcon sx={{fontSize:50}}/></Button>
        </Grid>
        <Grid item xs={12}>
        <Link to="/" style={{ textDecoration: 'none' }}> <Button color='warning' sx={{fontSize:25}} onClick={()=>{setModalStatus(false)}} variant='text'>Home</Button></Link>
        </Grid>
        <Grid item xs={12}>
        <Button variant='text' color="warning" sx={{fontSize:25}} onClick={()=>{handleModalFunction(loggedIn ? "AddGame" : "login"), console.log(loggedIn)}}>add game +</Button>
        </Grid>
        <Grid item xs={12}>
        {loggedIn ? <Button onClick={()=>{setLoggedIn(false), localStorage.removeItem("username"),localStorage.removeItem("token"), localStorage.setItem("userStatus", false)}} sx={{fontSize:25}} variant="text" color='warning'>Logout</Button> : null}
        </Grid>
        </Grid>
    </Nav>
  )
})


export default SideNav