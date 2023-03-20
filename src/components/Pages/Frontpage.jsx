import React, {useEffect, useState} from 'react'
import getGames from '../../apiHandlers/getGames'
import GameCard from '../Game/GameCard';
/*  
import { useContext } from 'react';
import { UserContext } from '../../context/User';
  <button onClick={()=>{setLoggedIn(false), localStorage.clear()}}>logoutTest</button>
*/
const Frontpage = () => {
  //const {loggedIn, setLoggedIn} = useContext(UserContext)
  let [games, setGames] = useState(null);
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
  }, []);
  return (
    <div className='mainContent'>
    <div id="gameCards">{!games ? "no data yet" : games.map(game =>{
      return <GameCard key={game.name} name={game.name} user={game.username} url={game.url} image={game.image} added={game.added}/>
    })}
    </div>
    </div>

  )
}

export default Frontpage