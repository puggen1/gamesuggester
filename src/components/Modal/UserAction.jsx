import React from 'react'
import { Grid } from '@mui/material'
import ActivateModalButton from '../Button'
const UserAction = ({handleModalFunction}) => {
  return (
    <Grid container spacing={2}   justifyContent="center">
    <Grid item xs={4}>
    <ActivateModalButton dataType="login" handleModalFunction={handleModalFunction} text="Login" />
    </Grid>
    <Grid item xs={4}>
    <ActivateModalButton dataType="register" handleModalFunction={handleModalFunction} text="Register" />
    </Grid>
    </Grid>
  )
}

export default UserAction