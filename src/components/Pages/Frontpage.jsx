import React, {useEffect, useState} from 'react'
import getGames from '../../apiHandlers/getGames'
import GameCard from '../Game/GameCard';
const Frontpage = () => {
  let [games, setGames] = useState([]);
  useEffect(()=>{
  const runner = async ()=>{
    let something = await getGames()
    setGames(something);
  }
  runner()
  let interval = setInterval(async ()=>{
    runner()
  }, 60000) 
  return () => clearInterval(interval);
  }, [])
  return (
    
    <div id="gameCards" className='mainContent'>{games.map(game =>{
      return <GameCard key={game.name} name={game.name} user={game.username} url={game.url} image={game.image} added={game.added} singleGame={"game?title=" + game.name}/>
    })}</div>
  )
}

export default Frontpage