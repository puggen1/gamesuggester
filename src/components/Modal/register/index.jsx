import Box from "@mui/material/Box"
import { TextField, Typography } from "@mui/material";
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
import TextInput from "../../UserInput/TextInput";
import { UserContext } from "../../../context/User";
const Register = React.forwardRef(({handleModalFunction}, ref)=>{
  const {register, handleSubmit, formState: { errors }} = useForm({resolver: yupResolver(registerSchema)})
  const [isLoading, setisLoading] = useState(false)
  const [error, setError] = useState("")
  const {registerUser, responseStatus} = useContext(UserContext)
  const {setModalStatus, setModal} = useContext(ModalContext)

  const registerAction = async  (data)=>{
    setisLoading(true)
    let response = await registerUser(data, setModal)
    if(response.status){
      setError("")
      setisLoading(false)
      setModalStatus(false)
    }
    else{
      setError(response.message)
      setisLoading(false)
    }
  }
  console.log(error)
    return (
      <Box  ref={ref} sx={style}>
         <UserAction handleModalFunction={handleModalFunction}/>
         <InputForm onSubmit={handleSubmit(registerAction)}>
          <TextInput responseStatus={(responseStatus || errors?.email)} error={errors?.email} type="email" name="email" autocomplete="email" label="email" formControll={register("email")} />
          <TextInput responseStatus={(responseStatus || errors?.username)} error={errors?.username} type="username" autocomplete="username" name="username" label="username" formControll={register("username")} />
          <TextInput responseStatus={(responseStatus || errors?.password)} error={errors?.password} type="password" name="new-password" label="password" formControll={register("password")} />
          <div>
          <Typography color="error" variant="p" component={"p"} fontSize={12} padding={"0px 1rem"}>{error ? error : ""}</Typography>
          </div>
        <FormButton  isLoading={isLoading} type="submit" text="Register"/>
        </InputForm>
      </Box>
    )
  })

export default Register