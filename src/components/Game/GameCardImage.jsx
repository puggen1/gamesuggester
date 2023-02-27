import React from 'react'

const GameCardImage = ({image}) => {
  return (
    <div className='cardImage'>
        <img src={image} alt="game image"/>
    </div>
  )
}

export default GameCardImage