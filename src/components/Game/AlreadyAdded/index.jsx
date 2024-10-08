import { Typography, colors } from "@mui/material"
import { Link } from "react-router-dom"
import {Link as MuiLink, useTheme}  from "@mui/material"
import { OuterAlreadyAdded } from "./index.styles"
const AlreadyAdded = ({data}) => {
  const theme = useTheme()
  return (
    <OuterAlreadyAdded>
        <Typography variant="h6" color={theme.palette.warning.main} component="h3">{data.title} have already been added</Typography>
        <Typography color={theme.palette.warning.main} variant="h6" component={"p"}> View it <Link style={{color:theme.palette.warning.main}} to={"/game/" + data.id}>here</Link></Typography>
    </OuterAlreadyAdded>
  )
}

export default AlreadyAdded