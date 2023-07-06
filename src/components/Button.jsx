import React from 'react'
import Button from '@mui/material/Button';
import { borderRadius } from '@mui/system';
import { useContext } from 'react';
import { ModalContext } from '../context/Modal';
import { ProfileButton } from './index.styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const ActivateModalButton = ({text, type, dataType,}) => {
  const {setModalStatus, setModal} = useContext(ModalContext)
    return (
      <Button onClick={(e)=>{setModal(dataType), setModalStatus ? setModalStatus(true): null}} color="info" sx={{borderRadius:"5px"}} variant="contained">{text}</Button>
  )
}

const HeaderProfileButton = ({dataType}) => {
  const {setModalStatus, setModal} = useContext(ModalContext)
  return (
    <ProfileButton><AccountCircleIcon onClick={(e)=>{setModal(dataType), setModalStatus ? setModalStatus(true): null}} fontSize="large" /> </ProfileButton>
  )
}
const FormButton = ({text, type})=>{
  return(
    <Button type={type} sx={{borderRadius:"5px"}} color="info"  variant="contained">{text}</Button>
  )
}

export default ActivateModalButton
export {FormButton, HeaderProfileButton}