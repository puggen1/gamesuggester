import React, {useEffect, useState} from 'react'
import getGames from '../../apiHandlers/getGames'
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
      return <p key={game.uid}>{game.name}</p>
    })}</div>
  )
}

export default Frontpage