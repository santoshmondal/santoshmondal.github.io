import React from "react";
import { Route, Switch } from "react-router";
import { ComingSoon } from "./components/ComingSoon";
import { IndexPage } from "./components/IndexPage";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={IndexPage} />
      <Route exact path="/dev" component={ComingSoon} />
    </Switch>
  );
}

export default App;
