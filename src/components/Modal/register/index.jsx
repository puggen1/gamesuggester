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
import registerUserApiCall from "../../../apiHandlers/register";
import { InputForm } from "../style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import registerSchema from "../../../utils/schemas/register";
const Register = React.forwardRef(({handleModalFunction}, ref)=>{

  const {register, handleSubmit, formState: { errors }} = useForm({resolver: yupResolver(registerSchema)})


  const registerUser =async (data)=>{
    let response = await registerUserApiCall(data.email, data.password, data.username)
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

  const [responseStatus, setResponseStatus] = useState(false)
  const {setModalStatus, setModal} = useContext(ModalContext)
    return (
      <Box ref={ref} sx={style}>
         <UserAction handleModalFunction={handleModalFunction}/>
         <InputForm onSubmit={handleSubmit(registerUser)} >
         <TextField  error={responseStatus} fullWidth type="email"  autoComplete="email" name="email"  label="Email" {...register("email")} color="warning" variant="filled" />
         <TextField error={responseStatus} fullWidth type="text"  name="display-name" {...register("username")} label="username" color="warning" variant="filled"/>
         <TextField  error={responseStatus} fullWidth type="password"  autoComplete="new-password" name="password" {...register("password")} label="Password" color="warning" variant="filled" />
        <FormButton type="submit" text="Register"/>
        </InputForm>
      </Box>
    )
  })

export default Register