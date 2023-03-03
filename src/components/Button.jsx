import React from 'react'
import Button from '@mui/material/Button';
import { borderRadius } from '@mui/system';
const ActivateModalButton = ({text, type, dataType, handleModalFunction, toggleModal=null}) => {
    return (
      <Button onClick={(e)=>{handleModalFunction(dataType), toggleModal ? toggleModal(true): null}} color="info" sx={{borderRadius:"5px"}} variant="contained">{text}</Button>
  )
}

export default ActivateModalButton