import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import React from "react";
import { Route, Switch } from "react-router";
import { DevPage } from "./components/DevPage";
import { IndexPage } from "./components/IndexPage";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/dev" component={DevPage} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
