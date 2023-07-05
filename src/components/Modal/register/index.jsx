import Box from "@mui/material/Box"
import { TextField } from "@mui/material";
import React from "react";
import { style } from "../login/style";
import UserAction from "../UserAction";
import { ModalContext } from "../../../context/Modal";
import { useContext, useState } from "react";
import { FormButton } from "../../Button";
import { InputForm } from "../style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import registerSchema from "../../../utils/schemas/register";
import useSendData from "../../../hooks/useSendData";
import TextInput from "../../UserInput/TextInput";
const Register = React.forwardRef(({handleModalFunction}, ref)=>{
  const {sender} = useSendData()
  const {register, handleSubmit, formState: { errors }} = useForm({resolver: yupResolver(registerSchema)})


  const registerUser =async (data)=>{
    let response = await sender("users/create", "POST", {email: data.email, password: data.password, username: data.username})
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
      <Box  ref={ref} sx={style}>
         <UserAction handleModalFunction={handleModalFunction}/>
         <InputForm onSubmit={handleSubmit(registerUser)}>
          <TextInput responseStatus={responseStatus} type="email" name="email" autocomplete="email" label="email" formControll={register("email")} />
          <TextInput responseStatus={responseStatus} type="username" autocomplete="username" name="username" label="username" formControll={register("username")} />
          <TextInput responseStatus={responseStatus} type="password" name="new-password" label="password" formControll={register("password")} />
         
        <FormButton type="submit" text="Register"/>
        </InputForm>
      </Box>
    )
  })

export default Register