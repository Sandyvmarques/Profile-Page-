/**
 * Alocacao de todas as Rotas
 */
import React from "react";
import PP from "./PP";
import { Switch, Route } from "react-router-dom";

const Main = () => (
  <Switch>
    <Route exact path="/" component={PP} />
  </Switch>
);
export default Main;
