import styled from "styled-components";
import { styled as muiStyled } from "@mui/material";
const Nav = styled.div`
  background-color: #2f4e5c;
  width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Links = muiStyled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 100px)",
  gridGap: "1rem",
  padding: "1rem",
  boxSizing: "border-box",
}));
const LinkItem = muiStyled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  backgroundColor: theme.palette.secondary.main,
  borderRadius: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100px",
  minWidth: "100px",
  "&:hover": {
    backgroundColor: theme.palette.secondary.dark,
    cursor: "pointer",
  },
  a: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
export { Nav, Links, LinkItem };
