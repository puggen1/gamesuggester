import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from './style'
const SideNav = React.forwardRef(({handleModalFunction}, ref)=>{
  return (
    <Nav ref={ref}>
        <Link to="/">Home</Link>
        <button onClick={()=>{handleModalFunction("AddGame")}}>add game +</button>
    </Nav>
  )
})


export default SideNav