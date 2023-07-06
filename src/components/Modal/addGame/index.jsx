import Box from "@mui/material/Box"
import React from "react";
import { style } from "../login/style";
import { InputForm } from "../style";
import { useState } from "react";
import { Typography } from "@mui/material";
import { FormButton } from "../../Button";
import useSendData from "../../../hooks/useSendData";
import { useContext } from "react";
import { ModalContext } from "../../../context/Modal";
import { UserContext } from "../../../context/User";
import { useNavigate } from "react-router-dom";
import useApiFetcher from "../../../hooks/useApiFetcher";
import TextInput from "../../UserInput/TextInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import addGameSchema from "../../../utils/schemas/addGame";
const AddGame =React.forwardRef((props, ref)=>{
  const {data, isLoading, isError} = useApiFetcher("games")
  const navigate = useNavigate()
  const {sender} = useSendData()
  const {setModalStatus} = useContext(ModalContext);
  const {setLoggedIn} = useContext(UserContext)
  const [responseStatus, setResponseStatus] = useState(false)

  const {register, handleSubmit, formState: { errors }} = useForm({resolver: yupResolver(addGameSchema)})
    const addGameFunction =async (formData)=>{
      const token = localStorage.getItem("token");
      const data = await sender("games/add","POST", {url: formData.url, title: formData.title, date: new Date()}, token)
      if(data.code === "auth/id-token-expired"){
        localStorage.removeItem("username")
        localStorage.removeItem("token");
        localStorage.setItem("userStatus", false)
        setModalStatus(false);
        setLoggedIn(false)
      }
      if(data.title){
        navigate("/game/"+ data.title)
        setModalStatus(false)
      }
      else{
        setResponseStatus(true)
      }
    }
    return (
      <Box ref={ref} sx={style}>
        <Box marginBottom={2}>
        <Typography variant="h4" color={"#e9e9e9"} component="h2" textAlign="center" margin={0} padding={0}  fontWeight={300}>Add game</Typography>
        </Box>
        <InputForm onSubmit={handleSubmit(addGameFunction)}>
          <TextInput responseStatus={(responseStatus || errors?.title)} type="text" name="title" autocomplete="title" label="title" formControll={register("title")} />
          <TextInput responseStatus={(responseStatus || errors?.url)} type="url" name="url" autocomplete="url" label="url" formControll={register("url")} />
        <FormButton type="submit" text="Add game"/>
        </InputForm>
      </Box>
    )
  })

export default AddGame