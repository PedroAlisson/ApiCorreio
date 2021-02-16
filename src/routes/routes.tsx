import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Correios from "../pages/Correios";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Correios} />
  </Switch>
);

export default Routes;
