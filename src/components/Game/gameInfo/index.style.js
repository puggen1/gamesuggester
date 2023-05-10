import { styled } from "@mui/material";
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
}));

export { GameInfoDiv };
