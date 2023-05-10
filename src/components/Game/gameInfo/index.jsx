import React from 'react'
import { GameInfoDiv } from './index.style'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const GameInfo = ({name, steam, user, description}) => {

  return (
    <GameInfoDiv>
      <Typography variant='h4' color="white" fontFamily="lato" fontWeight="500" gridColumn="1/3" component="h1">{name}</Typography>
      <Typography variant="p" color="white" component="p" textAlign="end" style={{ gridColumn:"3/4", margin:"auto 0 auto auto"}}>added by: <Link to={"/profile/" + user} style={{textDecorationColor:"white", color:"white"}}>{user}</Link></Typography>
      <Typography variant="p" color="white" sx={{gridRow:"2/3", gridColumn:"1/4", height:"100%"}} component="p">{description ? description : "no description"}</Typography>
    <Link to={steam} target='_blank' style={{textDecorationColor:"white", gridColumn:"3/4", gridRow:"3/4", marginTop:"auto"}}><Typography variant="p" color="white" component="p" textAlign="end">view on steam</Typography></Link>
    </GameInfoDiv>
  )
}

export default GameInfo