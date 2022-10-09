import { createTheme, responsiveFontSizes } from "@mui/material";
import { amber } from "@mui/material/colors";

let theme = createTheme({
  palette: {
    mode: "dark",
    primary: amber,
  },
  typography: {
    fontPrimary: "gabriela",
  },
});

theme = responsiveFontSizes(theme);

export default theme;
