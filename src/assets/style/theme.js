import { createTheme } from "@mui/material/styles";
const theme = createTheme({
    //own theme here
    palette: {
        primary: {
          main: `#2F4E5C`,
          //contrastText: "#292929"
        },
        secondary: {
          main: `#213D46`,
        },
        info:{
            main: "#69A0B8"
        },
        background:{
            main:"#2f4e5c",
            secondary:"#213D46"
        }
      },
    
  });

export {theme}