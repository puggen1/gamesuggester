import Box from "@mui/material/Box"
import React from "react";
import { style } from "../login/style";
import { InputForm } from "../style";
import { useState } from "react";
import { TextField, Typography } from "@mui/material";
import { FormButton } from "../../Button";
import useSendData from "../../../hooks/useSendData";
import { useContext } from "react";
import { ModalContext } from "../../../context/Modal";
import { UserContext } from "../../../context/User";
import { useNavigate } from "react-router-dom";
import useApiFetcher from "../../../hooks/useApiFetcher";
const AddGame =React.forwardRef((props, ref)=>{
  const {data, isLoading, isError} = useApiFetcher("games")
  const navigate = useNavigate()
  const {sender} = useSendData()
  const {setModalStatus} = useContext(ModalContext);
  const {setLoggedIn} = useContext(UserContext)
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [responseStatus, setResponseStatus] = useState(false)
    const urlChange = (e)=>{
      setUrl(e.target.value)
    }
    const titleChange = (e)=>{
      setTitle(e.target.value)
    }
    const addGameFunction =async (e)=>{
      e.preventDefault();
      const token = localStorage.getItem("token");
      const data = await sender("games/add","POST", {url: url, title: title, date: new Date()}, token)
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
        <Typography variant="h2" component="h2" textAlign="center" margin={0} padding={0} fontSize={40} fontWeight={100}>Add game</Typography>
        <InputForm onSubmit={addGameFunction}>
        <TextField error={responseStatus} fullWidth type="text" label="game title" onChange={titleChange} value={title} color="warning" variant="filled" />
        <TextField  error={responseStatus} fullWidth type="url" onChange={urlChange} value={url} label="url (steam link)" color="warning" variant="filled" />
        <FormButton type="submit" text="Add game"/>
        </InputForm>
      </Box>
    )
  })

export default AddGame