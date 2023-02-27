import React, {useEffect, useState} from 'react'
import getGames from '../../apiHandlers/getGames'
import GameCard from '../Game/GameCard';
const Frontpage = () => {
  let [games, setGames] = useState([]);
  useEffect(()=>{
    (async()=>{
      let something = await getGames()
      setGames(something);
    })();
    
    
  })
  return (
    <div className='mainContent'>{games.map(game =>{
      return <GameCard key={game.name} name={game.name} user={game.username} url={game.url} image={game.image} added={game.added} />
    })}</div>
  )
}

export default Frontpage