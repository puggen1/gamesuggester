import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import ArrowDropUp from '@mui/icons-material/ArrowDropUp';
import Settings from '@mui/icons-material/Settings';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import EditIcon from '@mui/icons-material/Edit';
import PasswordIcon from '@mui/icons-material/Password';
import EmailIcon from '@mui/icons-material/Email';
import { Button } from "@mui/material";

import { useState } from "react"
import { OuterDropdown } from "./index.styles.js"
const Dropdown = () => {
    /*
    what i need: a button for toggling the dropdown
    content is hidden by default
    state for toggling the dropdown

     */
    const [isOpen, setIsOpen] = useState(false);
  return (
    <OuterDropdown>
        <Button className={isOpen ? 'mainButton open': "mainButton"} startIcon={<Settings className='rotate'/>} endIcon={isOpen ? <ArrowDropUp/> : <ArrowDropDown/>} color="secondary" variant="contained" onClick={()=>{setIsOpen((prev)=>{return !prev})}}>Settings</Button>
        {<div className={isOpen ? 'dropdownContent showContent' : "dropdownContent"}>
            <div className='dropdownItem'><Button startIcon={<OpenInNewIcon/>} endIcon={<ArrowDropUp sx={{visibility:"hidden"}} />} variant='contained' color='secondary'>Open Settings</Button></div>
            <div className='dropdownItem'><Button startIcon={<EditIcon/>} endIcon={<ArrowDropUp sx={{visibility:"hidden"}} />} variant='contained' color='secondary'>Change Avatar</Button></div>
            <div className='dropdownItem'><Button startIcon={<PasswordIcon/>} endIcon={<ArrowDropUp sx={{visibility:"hidden"}} />} variant='contained' color='secondary'>Change Password</Button></div>
            <div className='dropdownItem'><Button startIcon={<EmailIcon/>} endIcon={<ArrowDropUp sx={{visibility:"hidden"}} />} variant='contained' color='secondary'>Change Email</Button></div>
        </div>}
    </OuterDropdown>
  )
}

export default Dropdown