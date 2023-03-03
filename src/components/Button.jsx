import React from 'react'
import Button from '@mui/material/Button';
import { borderRadius } from '@mui/system';
const MyButton = ({text, type, }) => {
 
    return (
      <Button color="info" sx={{borderRadius:"5px"}} variant="contained">Hello World</Button>
  )
}

export default MyButton