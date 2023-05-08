import React from 'react'
import { GameInfoDiv } from './index.style'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const GameInfo = ({name, steam, user, description}) => {

  return (
    <GameInfoDiv>
      <Typography variant='h4' color="white" fontFamily="lato" fontWeight="500" gridColumn="1/3" component="h1">{name}</Typography>
      <Typography variant="p" color="white" component="p" textAlign="end" style={{ gridColumn:"3/4"}}>added by: <Link to={"/profile/" + user} style={{textDecorationColor:"white", color:"white"}}>{user}</Link></Typography>
      <Typography variant="p" color="white" component="p">{description}</Typography>
    <Link to={steam} target='_blank' ta style={{textDecorationColor:"white", gridColumn:"3/4", gridRow:"3/4"}}><Typography variant="p" color="white" component="p" textAlign="end">view on steam</Typography></Link>
    </GameInfoDiv>
  )
}

export default GameInfo