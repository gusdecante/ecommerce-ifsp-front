import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import { About, Main } from "./pages/index";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/about" component={About} />
    </Switch>
  </BrowserRouter>
);

export default Routes;