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
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "../../../utils/schemas/login";
const Login =React.forwardRef(({handleModalFunction, setModalStatus}, ref)=>{
  const {setLoggedIn} = useContext(UserContext)
  const {register, handleSubmit, formState: { errors }} = useForm({resolver: yupResolver(loginSchema)})
  const [responseStatus, setResponseStatus] = useState(false)
  const loginUser = async (data)=>{
      let response = await login(data.email, data.password)
      if(!response.token){
        setResponseStatus(true)
      }
      else{
        setResponseStatus(false);
        localStorage.setItem("token", response.token);
        localStorage.setItem("username", response.username);
        localStorage.setItem("userStatus", true)
        setLoggedIn(true)
        setModalStatus(false)
      
      }
  }

  return (<Box sx={style}>
        <UserAction handleModalFunction={handleModalFunction}/>
        <InputForm onSubmit={handleSubmit(loginUser)}>
        <TextField  error={responseStatus} fullWidth type="email" name="email" autoComplete="username email" inputProps={{autoComplete: "email",}} label="Email" {...register("email")} color="warning" variant="filled" />
        <TextField  error={responseStatus} fullWidth type="password" name="password" autoComplete="password" inputProps={{autoComplete: "password",}} {...register("password")} label="Password" color="warning" variant="filled" />
        <FormButton type="submit" text="login"/>
        </InputForm>
        </Box>
  )
})

export default Login