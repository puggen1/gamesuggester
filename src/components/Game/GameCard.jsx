import React from 'react'
import {Link} from "react-router-dom";
import GameCardImage from './GameCardImage'
import GameCardInfo from './GameCardInfo'
import "../../assets/style/game.css"
const GameCard = ({title, image, user, added, url, profile, id}) => {
  return (
    <Link to={`/game/${id}`} className={profile ? 'gameCard profileVersion' : "gameCard"}>
        <GameCardImage image={image} />
        <GameCardInfo  title={title} username={user} added={added} url={url} />
    </Link>
  )
}

export default GameCard