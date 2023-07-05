import { styled } from "@mui/material";
const OuterStat = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: "10px",
  height: "60px",
  width: "auto",
  minWidth: "60px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: theme.palette.warning.main,
  padding: "0.1rem",
}));

export { OuterStat };
