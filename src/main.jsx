import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { RouterProvider } from "react-router-dom";
import { Provider, useSelector } from "react-redux";

import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import store from "./store/store";
import { darkTheme, lightTheme, router } from "./app.init";
import { CssBaseline } from "@mui/material";

const MyThemeProvider = (props) => {
  const { apputilStore } = useSelector((state) => state);
  return (
    <ThemeProvider
      theme={apputilStore.themeMode == "dark" ? darkTheme : lightTheme}
    >
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <Provider store={store}>
      <MyThemeProvider />
    </Provider>
  </React.Fragment>
);
