import Box from "@mui/material/Box"
import ActivateModalButton from "../../Button";
import React from "react";
import {style} from "./style"
//do i have to use this?
const Login =React.forwardRef(({handleModalFunction}, ref)=>{
  return (
    <Box ref={ref} sx={style}>
           <ActivateModalButton dataType="login" handleModalFunction={handleModalFunction} text="Login" />
          <ActivateModalButton dataType="register" handleModalFunction={handleModalFunction} text="Register" />
    </Box>
  )
})

export default Login