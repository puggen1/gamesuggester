import React from 'react'
import Button from '@mui/material/Button';
import { borderRadius } from '@mui/system';
import { useContext } from 'react';
import { ModalContext } from '../context/Modal';
const ActivateModalButton = ({text, type, dataType,}) => {
  const {setModalStatus, setModal} = useContext(ModalContext)
    return (
      <Button onClick={(e)=>{setModal(dataType), setModalStatus ? setModalStatus(true): null}} color="info" sx={{borderRadius:"5px"}} variant="contained">{text}</Button>
  )
}
const FormButton = ({text, type})=>{
  return(
    <Button type={type} sx={{borderRadius:"5px"}} color="info"  variant="contained">{text}</Button>
  )
}

export default ActivateModalButton
export {FormButton}