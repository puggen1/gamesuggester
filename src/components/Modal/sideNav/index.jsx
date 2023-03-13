import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from './style'
const SideNav = ({handleModalFunction, setModalStatus}) => {
  return (
    <Nav>
        <Link to="/">Home</Link>
        <button onClick={()=>{handleModalFunction("AddGame")}}>add game +</button>
    </Nav>
  )
}

export default SideNav