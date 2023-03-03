import { createTheme } from "@mui/material/styles";
const theme = createTheme({
    //own theme here
    palette: {
        primary: {
          main: `#2F4E5C`,
          contrastText: "#292929"
        },
        secondary: {
          main: `#213D46`,
        },
        info:{
            main: "#69A0B8"
        }
      },
    
  });

export {theme}