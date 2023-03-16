import Box from "@mui/material/Box"
import { TextField } from "@mui/material";
import Typography from '@mui/material/Typography';
import ActivateModalButton from "../../Button";
import React from "react";
import { style } from "../login/style";
import UserAction from "../UserAction";
import { UserContext } from "../../../context/User";
import { useContext, useState } from "react";
import { FormButton } from "../../Button";
import register from "../../../apiHandlers/register";
import { InputForm } from "../style";
const Register = React.forwardRef(({handleModalFunction}, ref)=>{
  const [responseStatus, setResponseStatus] = useState(false)
  let {email, emailChange, password, passwordChange,username, usernameChange} = useContext(UserContext);
    const registerUser = async  (event)=>{
          event.preventDefault();
          await register(email, password, username)

      }
    return (
      <Box ref={ref} sx={style}>
         <UserAction handleModalFunction={handleModalFunction}/>
         <InputForm onSubmit={registerUser}>
         <TextField error={responseStatus} fullWidth type="text" onChange={usernameChange} value={username} label="username" color="warning" variant="filled"/>
         <TextField  error={responseStatus} fullWidth type="email" label="Email" onChange={emailChange} value={email} color="warning" variant="filled" />
        <TextField  error={responseStatus} fullWidth type="password" onChange={passwordChange} value={password} label="Password" color="warning" variant="filled" />
        <FormButton type="submit" text="Register"/>
        </InputForm>
      </Box>
    )
  })

export default Register