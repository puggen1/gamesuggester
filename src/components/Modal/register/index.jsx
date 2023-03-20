import Box from "@mui/material/Box"
import { TextField } from "@mui/material";
import Typography from '@mui/material/Typography';
import ActivateModalButton from "../../Button";
import React from "react";
import { style } from "../login/style";
import UserAction from "../UserAction";
import { UserContext } from "../../../context/User";
import { ModalContext } from "../../../context/Modal";
import { useContext, useState } from "react";
import { FormButton } from "../../Button";
import register from "../../../apiHandlers/register";
import { InputForm } from "../style";
const Register = React.forwardRef(({handleModalFunction}, ref)=>{
  const [responseStatus, setResponseStatus] = useState(false)
  const {setModalStatus, setModal} = useContext(ModalContext)
  let {email, emailChange, password, passwordChange,username, usernameChange} = useContext(UserContext);
    const registerUser = async  (event)=>{
          event.preventDefault();
          let response = await register(email, password, username)
          if(response.uid){
            setResponseStatus(false)
            console.log("profile registered")
            setModal("login")
          }
          else{
            setResponseStatus(true)
            console.log(response.message)
          }
      }
    return (
      <Box ref={ref} sx={style}>
         <UserAction handleModalFunction={handleModalFunction}/>
         <InputForm onSubmit={registerUser} >
         <TextField  error={responseStatus} fullWidth type="email"  autocomplete="email" name="email"  label="Email" onChange={emailChange} value={email} color="warning" variant="filled" />
         <TextField error={responseStatus} fullWidth type="text"  name="display-name" onChange={usernameChange} value={username} label="username" color="warning" variant="filled"/>
         <TextField  error={responseStatus} fullWidth type="password"  autoComplete="new-password" name="password" onChange={passwordChange} value={password} label="Password" color="warning" variant="filled" />
        <FormButton type="submit" text="Register"/>
        </InputForm>
      </Box>
    )
  })

export default Register