import useApiFetcher from '../../hooks/useApiFetcher';
import {createContext, useMemo} from 'react';
export const GameContext = createContext();
function Games({children}) {
	const url = useMemo(() => 'games', []);
	const {data, isLoading, isError, trigger} = useApiFetcher(url);
	const contextItems = useMemo(()=>({data, isLoading, isError, trigger}),[data,isLoading,isError])
	return (<GameContext.Provider value={contextItems}>
    {children}
         </GameContext.Provider>);
}

export default Games;
