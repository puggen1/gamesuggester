<<<<<<< Updated upstream
import { useParams } from "react-router-dom"
import { GameContext } from "../../context/games";
import { useContext } from "react";
import useApiFetcher from "../../hooks/useApiFetcher";
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
        <h1>{data[0].username}</h1>
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
=======
import { Avatar, Typography } from '@mui/material'
import {useState} from 'react'
import { useParams } from 'react-router-dom'
import { ProfileInfo } from '../Profile/index.styles'
const Profile = () => {
  const {name} = useParams()

  return (
    <div className='mainContent'>
    <ProfileInfo>
      <Avatar sizes='normal'/>
      <Typography component="h1" variant='h5'>{name}</Typography>
    </ProfileInfo>
    </div>
  )
>>>>>>> Stashed changes
}

export default Profile