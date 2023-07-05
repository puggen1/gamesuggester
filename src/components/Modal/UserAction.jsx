import React from 'react'
import { Grid } from '@mui/material'
import ActivateModalButton from '../Button'
import { SingleUserAction } from './index.styles'
const UserAction = ({handleModalFunction}) => {
  return (
    <Grid container spacing={2} marginBottom={2} justifyContent="center">
    <Grid item xs={4} >
      <SingleUserAction>
    <ActivateModalButton dataType="login" handleModalFunction={handleModalFunction} text="Login" />
    </SingleUserAction>
    </Grid>
    <Grid item xs={4} >
    <SingleUserAction>
    <ActivateModalButton dataType="register" handleModalFunction={handleModalFunction} text="Register" />
    </SingleUserAction>
    </Grid>
    </Grid>
  )
}

export default UserAction