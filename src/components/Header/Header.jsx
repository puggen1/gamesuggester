import React from 'react'
import HeaderProfile from '../Profile/HeaderProfile'
import Navigation from '../Navigation'

const Header = ({user}) => {
    
   return(<header>
        <Navigation />
        <p>Game Suggester</p>
        <HeaderProfile user={user}/>
    </header>)

}

export default Header