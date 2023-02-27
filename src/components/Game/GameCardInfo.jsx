import React from 'react'
import {Link} from "react-router-dom";

const GameCardInfo = ({name, username, added, url}) => {
  return (
    <div className='gameCardInfo'>
        <h2 className='name'>{name}</h2>
        <p className='userLink'>added by <Link to={"profile?username=" + username}>{username} </Link></p>
        <p className='view'>Click to view</p>

        <p className='cardVote'>voting (coming soon)</p>
        </div>
  )
}

export default GameCardInfo