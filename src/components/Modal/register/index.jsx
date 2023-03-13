import Box from "@mui/material/Box"
import Typography from '@mui/material/Typography';
import ActivateModalButton from "../../Button";
import React from "react";
import { style } from "../login/style";
import UserAction from "../UserAction";
const Register =React.forwardRef(({handleModalFunction}, ref)=>{
    return (
      <Box ref={ref} sx={style}>
         <UserAction handleModalFunction={handleModalFunction}/>
      </Box>
    )
  })

export default Register