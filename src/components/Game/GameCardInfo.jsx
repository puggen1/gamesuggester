import React from 'react'

const GameCardInfo = ({name, username, added, url}) => {
  return (
    <div className='gameCardInfo'>
        <h2>{name}</h2>
        <p>added by {username}</p>
        
        </div>
  )
}

export default GameCardInfo