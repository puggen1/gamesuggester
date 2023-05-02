import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { GameContext } from "../../context/games";
import GameInfo from "../Game/gameInfo";
import GameImage from "../Game/gameImage";
const Game =  () => {
  const {games}= useContext(GameContext);
  const {name} = useParams()
  const [game, setGame] = useState({})
  useEffect(()=>{
    const gameSetter =  ()=>{
      if(Object.keys(games).length > 0){
      const currentGame =  games.find(e =>  e.name === name)
      setGame(currentGame)
    }}
    gameSetter()
  },[games])

  return (
    <div className='mainContent'>
      {Object.keys(game).length === 0 ? "loading":
      <>
      <GameInfo name={game.name} user={game.username} description="description coming soon"  steam={game.url}/>
      <GameImage src={game.image} alt={`
      ${game.name}'s image
     `}/>
     </> 
}    
    </div>
  )
}

export default Game