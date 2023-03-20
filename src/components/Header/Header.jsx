import React from 'react'
import HeaderProfile from '../Profile/HeaderProfile'
import Navigation from '../Navigation'
import "../../assets/style/header.css"
import "../../assets/style/profile.css"
import { Link } from 'react-router-dom'

const Header = ({user}) => {
   return(<header>
        <Navigation  dataType="sidenav"/>
        <Link to="/" className='logo'>Game Suggester</Link>
        <HeaderProfile  user={user}/>
    </header>)

}

export default Header