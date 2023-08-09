import { styled } from "@mui/material";
const OuterAddGameCard = styled("div")(({ theme }) => ({
  boxSizing: "border-box",
  borderRadius: "20px",
  backgroundColor: theme.palette.secondary.main,
  display: "grid",
  padding: "3rem",
  gap: "1rem",
  gridTemplateRows: "auto 2fr",
  gridTemplateColumns: "50% 50%",
  gridTemplateAreas: `"title link" "img desc"`,
  width: "700px",
  "& .steamLink": {
    color: theme.palette.warning.main,
    fontWeight: "100",
    textDecorationColor: theme.palette.warning.main,
    textAlign: "end",
    ":hover": {
      textDecoration: "none",
    },
  },
  "& .gameTitle": {
    color: theme.palette.warning.main,
    fontWeight: "400",
    fontSize: "1.12rem",
  },
  "& .description": {
    color: theme.palette.warning.main,
    fontSize: "0.9rem",
  },
  "& .image": {
    borderRadius: "20px",
    maxWidth: "100%",
    width: "100%",
    height: "100%",
    maxHeight: "200px",
    objectFit: "cover",
  },
}));

export { OuterAddGameCard };
