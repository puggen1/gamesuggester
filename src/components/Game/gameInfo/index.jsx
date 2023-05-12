import React from 'react'
import { GameInfoDiv, SteamLink, AddedBy, Description, Title } from './index.style'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const GameInfo = ({name, steam, user, description}) => {

  return (
    <GameInfoDiv>
      <Title variant='h4' color="white" fontFamily="lato" fontWeight="500"  component="h1">{name}</Title>
      <AddedBy variant="p" color="white" component="p" textAlign="end">added by: <Link to={"/profile/" + user} style={{textDecorationColor:"white", color:"white"}}>{user}</Link></AddedBy>
      <Description variant="p" color="white" component="p">{description ? description : "no description"}</Description>
    <SteamLink to={steam} target='_blank' ><Typography variant="p" color="white" component="p" textAlign="end">view on steam</Typography></SteamLink>
    </GameInfoDiv>
  )
}

export default GameInfo