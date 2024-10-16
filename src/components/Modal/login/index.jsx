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
  const {setLoggedIn, token, refreshToken, loginUser, responseStatus} = useContext(UserContext)
  const {register, handleSubmit, formState: { errors }} = useForm({resolver: yupResolver(loginSchema)})


  const loginAction =async (data)=>{
    const response = await loginUser(data)
    if(response){
      setModalStatus(false)
    }
  }

  return (<Box sx={style}>
        <UserAction handleModalFunction={handleModalFunction}/>
        <InputForm onSubmit={handleSubmit(loginAction)}>
        <TextInput responseStatus={(responseStatus || errors?.email)} error={errors?.email} type="email" name="email" autocomplete="email" label="email" formControll={register("email")} />
        <TextInput responseStatus={(responseStatus || errors?.password)} error={errors?.password} type="password" name="password" autocomplete="current-password" label="password" formControll={register("password")} />
        <FormButton type="submit" text="login"/>
        </InputForm>
        </Box>
  )
})

export default Login