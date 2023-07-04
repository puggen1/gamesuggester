import React from 'react'
import ProfileImage from './ProfileImage'
import { Typography } from '@mui/material'
import {InnerProfileInfo} from "./index.styles"
const ProfileInfo = ({username}) => {
  const url = `https://api.dicebear.com/6.x/initials/svg?seed=${username}&radius=10&backgroundType=gradientLinear`
  return (
    <InnerProfileInfo>
        <ProfileImage picture={url} size="regular"/>
        <Typography variant='h4' component="h1" style={{color:"#e9e9e9"}}  fontFamily="Lato" fontWeight="400">{username}</Typography>
    </InnerProfileInfo>
  )
}

export default ProfileInfo