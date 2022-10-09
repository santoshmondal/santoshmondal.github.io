import { createBrowserRouter } from "react-router-dom";
import { createTheme, responsiveFontSizes } from "@mui/material";
import { amber } from "@mui/material/colors";

import App from "./App";
import ErrorPage from "./components/ErrorPage";

// ------------ Theme SETUP -------------
let darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: amber,
  },
  typography: {
    fontPrimary: "gabriela",
  },
});

darkTheme = responsiveFontSizes(darkTheme);

let lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: amber,
  },
  typography: {
    fontPrimary: "gabriela",
  },
});

lightTheme = responsiveFontSizes(lightTheme);

// ------------ ROUTER SETUP -------------
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

// Finally Export
export { darkTheme, lightTheme, router };
