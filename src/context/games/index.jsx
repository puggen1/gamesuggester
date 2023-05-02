import { createContext, useState, useEffect } from "react"
import getGames from "../../apiHandlers/getGames";
export const GameContext = createContext()
const Games = ({children}) => {
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
  }, []);
  return (
    <GameContext.Provider value={{games}}>
    {children}
    </GameContext.Provider>
  )
}

export default Games