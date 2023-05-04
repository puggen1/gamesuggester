import { styled } from "@mui/material";
const GameInfoDiv = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gridTemplateRows: "auto auto",
  gap: "10% 0",
  maxHeight: "100%",
  backgroundColor: theme.palette.secondary.main,
  borderRadius: "20px",
  padding: "1rem",
  boxSizing: "border-box",
}));

export { GameInfoDiv };
