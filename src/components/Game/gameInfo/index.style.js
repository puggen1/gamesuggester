import { styled } from "@mui/material";
const GameInfoDiv = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 2fr",
  gridTemplateRows: "50px auto auto",
  gap: "5% 0",
  maxHeight: "100%",
  backgroundColor: theme.palette.secondary.main,
  borderRadius: "20px",
  padding: "1rem",
  boxSizing: "border-box",
  alignContent: "space-between",
  alignItems: "center",
}));

export { GameInfoDiv };
