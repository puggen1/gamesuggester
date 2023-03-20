import Box from "@mui/material/Box"
import Input from "@mui/material/Input";
import React from "react";
import { style } from "../login/style";
import { InputForm } from "../style";
import { useState } from "react";
import { TextField, Typography } from "@mui/material";
import { FormButton } from "../../Button";
import addGame from "../../../apiHandlers/addGame";
const AddGame =React.forwardRef((props, ref)=>{
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
      let response = await addGame(title, url, token, new Date());
      if(response.title){
        console.log("game added");
      }
      else{
        setResponseStatus(true)
      }
    }
    return (
      <Box ref={ref} sx={style}>
        <Typography variant="h2" component="h2" textAlign="center" margin={0} padding={0} fontSize={40} fontWeigh={400}>Add game</Typography>
        <InputForm onSubmit={addGameFunction}>
        <TextField  error={responseStatus} fullWidth type="text" label="game title" onChange={titleChange} value={title} color="warning" variant="filled" />
        <TextField  error={responseStatus} fullWidth type="url" onChange={urlChange} value={url} label="url (steam link)" color="warning" variant="filled" />
        <FormButton type="submit" text="Add game"/>
        </InputForm>
      </Box>
    )
  })

export default AddGame