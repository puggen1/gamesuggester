import {useContext} from 'react'
import { GameContext } from '../../context/games';
import GameCard from '../Game/GameCard';

const Frontpage = () => {
const {data, isLoading, isError} = useContext(GameContext);
  return (
    <div className='mainContent'>
    <div id="gameCards">
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error...</p>}
      {(!isLoading && !isError) && data.map(game =>{
      return <GameCard key={game.id} id={game.id} title={game.title} url={game.url} image={game.image} />
    })}
    </div>
    </div>

  )
}

export default Frontpage