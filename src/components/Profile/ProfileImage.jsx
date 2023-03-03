import React from 'react'
import "../../assets/style/profileImage.css";
const ProfileImage = ({picture, size}) => {
  let classes = `profileImage ${size}`;
  return (
    <img src={picture} className={classes}/>
  )
}

export default ProfileImage