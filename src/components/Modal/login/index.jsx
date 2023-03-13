import Box from "@mui/material/Box"
import React, { useState } from "react";
import {style} from "./style"
import UserAction from "../UserAction";
import { Button, TextField } from "@mui/material";  
import { InputForm } from "../style";
import styled from "styled-components";
import { FormButton } from "../../Button";
import login from "../../../apiHandlers/login";
import { UserContext } from "../../../context/User";
import { useContext } from "react";
const Login =React.forwardRef(({handleModalFunction, setModalStatus}, ref)=>{
  let {loggedIn, setLoggedIn} = useContext(UserContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseStatus, setResponseStatus] = useState(false)
  const emailChange = (event)=>{
    setEmail(event.target.value)
  }
  const passwordChange = (event)=>{
    setPassword(event.target.value)
  }
  const loginUser = async (event)=>{
    event.preventDefault()
      let response = await login(email, password)
      if(!response.token){
        setResponseStatus(true)
      }
      else{
        setResponseStatus(false);
        console.log(response)
        localStorage.setItem("token", response.token);
        localStorage.setItem("username", response.username);
        localStorage.setItem("userStatus", true)
        setLoggedIn(true)
        setModalStatus(false)
      }
  }

  return (<Box sx={style}>
        <UserAction handleModalFunction={handleModalFunction}/>
        <InputForm onSubmit={loginUser}>
        <TextField  error={responseStatus} fullWidth type="email" label="Email" onChange={emailChange} value={email} color="warning" variant="filled" />
        <TextField  error={responseStatus} fullWidth type="password" onChange={passwordChange} value={password} label="Password" color="warning" variant="filled" />
        <FormButton type="submit" text="login"/>
        </InputForm>
        </Box>
  )
})

export default Login