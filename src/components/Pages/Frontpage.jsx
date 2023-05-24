import {useContext} from 'react'
import { GameContext } from '../../context/games';
import GameCard from '../Game/GameCard';

const Frontpage = () => {
const {games} = useContext(GameContext);
  return (
    <div className='mainContent'>
    <div id="gameCards">{games.length === 0 ? "no data yet" : games.map(game =>{
      return <GameCard key={game.name} name={game.name} user={game.username} url={game.url} image={game.image} added={game.added}/>
    })}
    </div>
    </div>

  )
}

export default Frontpage