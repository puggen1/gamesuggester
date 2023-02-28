import React from 'react'
import ProfileImage from './ProfileImage'

const ProfileInfo = ({username}) => {
  return (
    <div>
        <ProfileImage picture={username} size="regular"/>
        <h1>{username}</h1>
    </div>
  )
}

export default ProfileInfo