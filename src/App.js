import React from "react";
import { Route, Switch } from "react-router";
import { IndexPage } from "./components/IndexPage";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={IndexPage} />
    </Switch>
  );
}

export default App;
