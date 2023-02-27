import React from 'react'
import {Link} from "react-router-dom";

const GameCardInfo = ({name, username, added, url}) => {
  return (
    <div className='gameCardInfo'>
        <h2>{name}</h2>
        <p>added by <Link to={"profile?username=" + username}>{username} </Link></p>
        
        </div>
  )
}

export default GameCardInfo