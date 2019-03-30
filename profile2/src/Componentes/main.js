/**
 * Alocacao de todas as Rotas
 */
import React from "react";
import PP from "./PP";
import Projectos from "./Projectos";
import { Switch, Route } from "react-router-dom";

const Main = () => (
  <Switch>
    <Route exact path="/" component={PP} />
    <Route path="/Projectos" component={Projectos} />
  </Switch>
);
export default Main;
