import React from 'react'
import HeaderProfile from '../Profile/HeaderProfile'
import Navigation from '../Navigation'
import "../../assets/style/header.css"
import "../../assets/style/profile.css"

const Header = ({user}) => {
   return(<header>
        <Navigation />
        <p className='logo'>Game Suggester</p>
        <HeaderProfile user={user}/>
    </header>)

}

export default Header