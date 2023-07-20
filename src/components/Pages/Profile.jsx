import { useParams } from "react-router-dom"
import { GameContext } from "../../context/games";
import { useContext } from "react";
import useApiFetcher from "../../hooks/useApiFetcher";
import ProfileInfo from "../Profile/ProfileInfo";
import {InfoSection, GamesSection, OuterProfile } from "../Profile/index.styles";
import GameCard from "../Game/GameCard";
import Dropdown from "../Dropdown";
import ProfileStats from "../Stats/ProfileStats";
const Profile = () => {
  //getting userName... maybe later use id
  const {name} = useParams();
  const {data, isLoading, error} = useApiFetcher("users/" + name);
  //getting all games
  const {data: games, isLoading: gamesLoading, error: gamesError} = useContext(GameContext);
  const storedUsername = window.localStorage.getItem("username");
  const LoggedIn = window.localStorage.getItem("userStatus") === "true" ? true : false;
  

  return (
    <div className='mainContent'>

      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data[0]?.username && <OuterProfile>
        <InfoSection>
       <ProfileInfo username={data[0].username}/>
       {/* here the settings dropdown will be, and stats*/}
       { (LoggedIn && storedUsername === name) && <Dropdown/>}
       <ProfileStats gamesAdded={games.filter(game =>{return game.uid === data[0].uid}).length}/>
       </InfoSection>
       <GamesSection>
        {gamesLoading && <div>Loading...</div>}
        {gamesError && <div>{gamesError}</div>}
        {games && <div className="games" id="gameCards">
          {games.map((game) => {
            if(game.uid === data[0].uid){
              return <GameCard key={game.name} name={game.name} image={game.image} user={game.username} added={game.added} url={game.url} profile="true"/>
            }
            return null})}</div>} </GamesSection> </OuterProfile>}
      </div>
    )
}

export default Profile