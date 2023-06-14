import React from 'react'
import ProfileImage from './ProfileImage'

const ProfileInfo = ({username}) => {
  const url = `https://api.dicebear.com/6.x/initials/svg?seed=${username}&radius=10&backgroundType=gradientLinear`
  return (
    <div>
        <ProfileImage picture={url} size="regular"/>
        <h1>{username}</h1>
    </div>
  )
}

export default ProfileInfo