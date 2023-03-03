import Box from "@mui/material/Box"
import Input from "@mui/material/Input";
import React from "react";
import { style } from "../login/style";
const AddGame =React.forwardRef((props, ref)=>{
    return (
      <Box ref={ref} sx={style}>
        <Input />
      </Box>
    )
  })

export default AddGame