import { useParams } from "react-router-dom"
import { GameContext } from "../../context/games";
import { useContext } from "react";
import useApiFetcher from "../../hooks/useApiFetcher";
import ProfileInfo from "../Profile/ProfileInfo";
const Profile = () => {
  //getting userName... maybe later use id
  const {name} = useParams();
  const {data, isLoading, error} = useApiFetcher("/users?username="+name);
  //getting all games
  const {data: games, isLoading: gamesLoading, error: gamesError} = useContext(GameContext);
  
  return (
    <div className='mainContent'>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data[0]?.username && <div>
       <ProfileInfo username={data.username} avatar={data.avatar}/>
        <h2>Games:</h2>
        {gamesLoading && <div>Loading...</div>}
        {gamesError && <div>{gamesError}</div>}
        {games && <div>
          {games.map((game) => {
            if(game.uid === data[0].uid){
              return <div key={game.name}>{game.name}</div>
            }
            return null})}</div>}</div>}
      </div>
    )
}

export default Profile