import React from 'react'
import {Link} from "react-router-dom";

const GameCardInfo = ({title, url}) => {
  return (
    <div className='gameCardInfo'>
        <h2 className='name'>{title}</h2>
        <p className='userLink'></p>
        <p className='view'>Click to view</p>
        <p className='cardVote'>voting (coming soon)</p>
        </div>
  )
}

export default GameCardInfo