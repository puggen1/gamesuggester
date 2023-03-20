import React from 'react'
import {Link} from "react-router-dom";
import GameCardImage from './GameCardImage'
import GameCardInfo from './GameCardInfo'
import "../../assets/style/game.css"
const GameCard = ({name, image, user, added, url}) => {
  return (
    <Link to={`/game/${name}`} className='gameCard'>
        <GameCardImage image={image} />
        <GameCardInfo  name={name} username={user} added={added} url={url} />
    </Link>
  )
}

export default GameCard