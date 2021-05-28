import React from "react";
import { Route, Switch } from "react-router";
import { DevPage } from "./components/DevPage";
import { IndexPage } from "./components/IndexPage";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={IndexPage} />
      <Route exact path="/dev" component={DevPage} />
    </Switch>
  );
}

export default App;
