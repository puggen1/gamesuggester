import React from 'react'
import GameCardImage from './GameCardImage'
import GameCardInfo from './GameCardInfo'
import "../../assets/css/game.css"
const GameCard = ({name, image, user, added, url}) => {
  return (
    <div className='gameCard'>
        <GameCardImage image={image} />
        <GameCardInfo  name={name} username={user} added={added} url={url} />
    </div>
  )
}

export default GameCard