import { styled } from "@mui/material";
const OuterAddGameCard = styled("div")(({ theme }) => ({
  boxSizing: "border-box",
  borderRadius: "20px",
  backgroundColor: theme.palette.secondary.main,
  display: "grid",
  padding: "3rem",
  gap: "1rem",
  gridTemplateRows: "auto 2fr",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gridTemplateAreas: `"title title title link" "img img desc desc"`,
  width: "700px",
  "& .steamLink": {
    gridArea: "link",
    color: theme.palette.warning.main,
    fontWeight: "100",
    textDecorationColor: theme.palette.warning.main,
    textAlign: "end",
    ":hover": {
      textDecoration: "none",
    },
  },
  "& .gameTitle": {
    gridArea: "title",
    color: theme.palette.warning.main,
    fontWeight: "400",
    fontSize: "1.12rem",
  },
  "& .description": {
    gridArea: "desc",
    color: theme.palette.warning.main,
    fontSize: "0.9rem",
  },
  "& .image": {
    gridArea: "img",
    borderRadius: "20px",
    maxWidth: "100%",
    width: "100%",
    height: "100%",
    maxHeight: "200px",
    objectFit: "cover",
  },
}));

export { OuterAddGameCard };
