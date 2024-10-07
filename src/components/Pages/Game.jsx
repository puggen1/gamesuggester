import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { GameContext } from "../../context/games";
import GameInfo from "../Game/gameInfo";
import GameImage from "../Game/gameImage";
import { GamePage } from "../Game/index.styles";
import useApiFetcher from "../../hooks/useApiFetcher";
const Game =  () => {
  const {id} = useParams()
  const [game, setGame] = useState({})
  const {data, isLoading, isError} = useApiFetcher("games/" + id)

  useEffect(()=>{
    console.log(data)
    if(data && (!isLoading && !isError)){
      setGame(data)
    }},[data, isLoading, isError])

  return (
    <div id="game" className='mainContent'>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error...</p>}
      {(!isLoading && !isError) && 
      <GamePage>
      <GameInfo name={game.title} user={game.addedBy?.username} description={game.description ? game.description : undefined}  steam={game.url}/>
      <GameImage src={game.image} alt={`
      ${game.title}'s image
     `}/>
     </GamePage> 
}    
    </div>
  )
}

export default Game