import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router";
import { DevPage } from "./components/DevPage";
import { IndexPage } from "./components/IndexPage";

const darkTheme = createMuiTheme({
  palette: { type: "dark" },
});

const lightTheme = createMuiTheme({
  palette: { type: "light" },
});

function App() {
  const appState = useSelector((state) => state);

  return (
    <ThemeProvider theme={appState.theme === "dark" ? darkTheme : lightTheme}>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/dev" component={DevPage} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
