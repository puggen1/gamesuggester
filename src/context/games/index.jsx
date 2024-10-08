import useApiFetcher from "../../hooks/useApiFetcher";
import { createContext, useState, useEffect } from "react"
export const GameContext = createContext()
const Games = ({children}) => {
  const [url, setUrl] = useState("games")
  const {data, isLoading, isError, trigger} = useApiFetcher(url)
  console.log(data)
  return (
    <GameContext.Provider value={{data, isLoading, isError, trigger}}>
    {children}
    </GameContext.Provider>
  )
}

export default Games