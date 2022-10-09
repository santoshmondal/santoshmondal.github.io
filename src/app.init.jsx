import { createBrowserRouter } from "react-router-dom";
import { createTheme, responsiveFontSizes } from "@mui/material";
import { amber } from "@mui/material/colors";

import App from "./App";
import ErrorPage from "./components/ErrorPage";

// ------------ Theme SETUP -------------
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

// ------------ ROUTER SETUP -------------
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

// Finally Export
export { theme, router };
