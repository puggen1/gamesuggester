import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { GameContext } from "../../context/games";
import GameInfo from "../Game/gameInfo";
import GameImage from "../Game/gameImage";
import { GamePage } from "../Game/index.styles";
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
    <div id="game" className='mainContent'>
      {Object.keys(game).length === 0 ? "loading":
      <GamePage>
      <GameInfo name={game.name} user={game.username} description={game.description ? game.description : undefined}  steam={game.url}/>
      <GameImage src={game.image} alt={`
      ${game.name}'s image
     `}/>
     </GamePage> 
}    
    </div>
  )
}

export default Game