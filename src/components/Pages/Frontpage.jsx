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
        console.log(game)
      return <GameCard key={game.id} title={game.title} user={game.addedBy?.username} url={game.url} image={game.image} added={game.createdAt} id={game.id}/>
    })}
    </div>
    </div>

  )
}

export default Frontpage