import React from 'react'
import { GameInfoDiv, SteamLink, Description, Title } from './index.style'
import { Typography } from '@mui/material'

const GameInfo = ({title, steam, description}) => {

  return (
    <GameInfoDiv>
      <Title variant='h4' color="white" fontFamily="lato" fontWeight="500"  component="h1">{title}</Title>
      <Description variant="p" color="white" component="p">{description ? description : "no description"}</Description>
    <SteamLink to={steam} target='_blank' ><Typography variant="p" color="white" component="p" textAlign="end">view on steam</Typography></SteamLink>
    </GameInfoDiv>
  )
}

export default GameInfo