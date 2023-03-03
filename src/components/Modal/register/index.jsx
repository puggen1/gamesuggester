import Box from "@mui/material/Box"
import Typography from '@mui/material/Typography';
import ActivateModalButton from "../../Button";
import React from "react";
import { style } from "../login/style";
const Register =React.forwardRef(({handleModalFunction}, ref)=>{
    return (
      <Box ref={ref} sx={style}>
          <ActivateModalButton dataType="login" handleModalFunction={handleModalFunction} text="Login" />
          <ActivateModalButton dataType="AddGame" handleModalFunction={handleModalFunction} text="Register" />
      </Box>
    )
  })

export default Register