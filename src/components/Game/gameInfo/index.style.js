import { styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const GameInfoDiv = styled("div")(({ theme }) => ({
  display: "grid",

  gridTemplateColumns: "auto auto auto",
  gridTemplateRows: "auto 1fr auto",
  maxHeight: "auto",
  width: "50%",
  maxWidth: "50%",
  backgroundColor: theme.palette.secondary.main,
  borderRadius: "20px",
  padding: "1rem",
  gap: "2rem",
  boxSizing: "border-box",
  alignContent: "space-between",
  alignItems: "grid-start",
  "@media (max-width: 1300px)": {
    width: "70%",
    maxWidth: "70%",
  },
  "@media (max-width: 1024px)": {
    width: "75%",
    maxWidth: "75%",
    margin: "0 auto",
  },
  "@media (max-width: 768px)": {
    width: "100%",
    maxWidth: "100%",
    gap:"0rem"

  },
}));


const Title = styled(Typography)(({ theme }) => ({
  gridColumn:"1/3",

  "@media (max-width: 768px)": {
    gridColumn:"1/4",
    gridRow:"1/2",
  },
}));
const Description = styled(Typography)(({ theme }) => ({
  gridRow:"2/3",
   gridColumn:"1/4",
    height:"100%",
    "@media (max-width: 768px)": {
      gridColumn:"1/4",
      gridRow:"3/4",
      margin:"1rem 0"
    },
}));
const AddedBy = styled(Typography)(({ theme }) => ({
  gridColumn:"3/4",
   margin:"auto 0 auto auto",
    "@media (max-width: 768px)": {
      gridColumn:"1/4",
      gridRow:"2/3",
      margin:"0.2rem auto 1rem 0",
    },
}));
const SteamLink = styled(Link)(({ theme }) => ({
  textDecorationColor:"white",
   gridColumn:"3/4",
    gridRow:"3/4",
     marginTop:"auto",
      "@media (max-width: 768px)": {
        gridColumn:"1/4",
        gridRow:"4/5",
      },
}));
export { GameInfoDiv, Title, Description, AddedBy, SteamLink };
