import { TextField, styled } from "@mui/material";

const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    borderRadius: "40px",
    backgroundColor: theme.palette.warning.main,
    "::before, ::after": {
      borderBottom: "none !important",
    },
    "::hover": {
      "::before": {
        borderBottom: "none",
      },
    },
    "& .MuiInputBase-input": {
      borderRadius: "40px",
    },
    //label
    "& .MuiInputLabel-root": {
      color: theme.palette.primary.main,
    },
    //label when focused
    "& .Mui-focused": {
      color: theme.palette.primary.main + "!important",
    },
  },
}));

export { CustomTextField };
