import Box from "@mui/material/Box"
import React, { useState } from "react";
import {style} from "./style"
import UserAction from "../UserAction";
import { Button, TextField } from "@mui/material";  
import { InputForm } from "../style";
import { FormButton } from "../../Button";
import { UserContext } from "../../../context/User";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "../../../utils/schemas/login";
import useSendData from "../../../hooks/useSendData";
import TextInput from "../../UserInput/TextInput";
const Login =React.forwardRef(({handleModalFunction, setModalStatus}, ref)=>{
  const {sender} = useSendData()
  const {setLoggedIn} = useContext(UserContext)
  const {register, handleSubmit, formState: { errors }} = useForm({resolver: yupResolver(loginSchema)})
  const [responseStatus, setResponseStatus] = useState(false)
  const loginUser = async (data)=>{
      let response = await sender("users/login", "POST", {email: data.email, password: data.password})
      console.log(response)
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
        <TextInput responseStatus={(responseStatus || errors?.email)} type="email" name="email" autocomplete="email" label="email" formControll={register("email")} />
        <TextInput responseStatus={(responseStatus || errors?.password)} type="password" name="password" autocomplete="current-password" label="password" formControll={register("password")} />
        <FormButton type="submit" text="login"/>
        </InputForm>
        </Box>
  )
})

export default Login