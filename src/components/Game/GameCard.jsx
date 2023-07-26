import React from 'react'
import {Link} from "react-router-dom";
import GameCardImage from './GameCardImage'
import GameCardInfo from './GameCardInfo'
import "../../assets/style/game.css"
const GameCard = ({id, title, image, url, profile}) => {
  return (
    <Link to={`/game/${id}`} className={profile ? 'gameCard profileVersion' : "gameCard"}>
        <GameCardImage image={image} />
        <GameCardInfo  title={title} url={url} />
    </Link>
  )
}

export default GameCard