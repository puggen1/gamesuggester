import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from './style'
import { useContext } from 'react'
import { UserContext } from '../../../context/User'
const SideNav = React.forwardRef(({handleModalFunction}, ref)=>{
  const {loggedIn, setLoggedIn} = useContext(UserContext)
  console.log(loggedIn)
  return (
    <Nav ref={ref}>
        <Link to="/">Home</Link>
        <button onClick={()=>{handleModalFunction(loggedIn ? "AddGame" : "login")}}>add game +</button>
        {loggedIn ? <button onClick={()=>{setLoggedIn(false), localStorage.clear()}}>Logout</button> : null}
    </Nav>
  )
})


export default SideNav