import Box from "@mui/material/Box"
import React, { useState } from "react";
import {style} from "./style"
import UserAction from "../UserAction";
import { Alert,AlertTitle, Button, TextField, Typography } from "@mui/material"; 
import Snackbar from '@mui/material/Snackbar';
import { InputForm } from "../style";
import { FormButton } from "../../Button";
import { UserContext } from "../../../context/User";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "../../../utils/schemas/login";
import useSendData from "../../../hooks/useSendData";
import TextInput from "../../UserInput/TextInput";
import { Close } from "@mui/icons-material";
const Login =React.forwardRef(({handleModalFunction, setModalStatus}, ref)=>{
  const {setLoggedIn, token, refreshToken, loginUser, responseStatus} = useContext(UserContext)
  const {register, handleSubmit, formState: { errors }} = useForm({resolver: yupResolver(loginSchema)})
  const [isLoading, setisLoading] = useState(false)
  const [error, setError] = useState("")


  const loginAction =async (data)=>{
    setisLoading(true)
    const response = await loginUser(data)
    if(response.status){
      setisLoading(false)
      setModalStatus(false)
      setError("")
    }
    else{
      setisLoading(false)
      setError(response.message)
    }
  }

  return (<>
  <Box sx={style}>
        <UserAction handleModalFunction={handleModalFunction}/>
        <InputForm onSubmit={handleSubmit(loginAction)}>
        <TextInput responseStatus={(responseStatus || errors?.email)} error={errors?.email} type="email" name="email" autocomplete="email" label="email" formControll={register("email")} />
        <TextInput responseStatus={(responseStatus || errors?.password)} error={errors?.password} type="password" name="password" autocomplete="current-password" label="password" formControll={register("password")} />
        <div>
          <Typography color="error" variant="p" component={"p"} fontSize={12} padding={"0px 1rem"}>{error ? error : ""}</Typography>
          </div>
        <FormButton isLoading={isLoading} type="submit" text="login"/>
        </InputForm>
       
        </Box>
        </>
  )
})

export default Login