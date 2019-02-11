import React from "react";
import "./App.css";
import Photos from "./containers/Photos";
import { Switch, Route } from "react-router-dom";
import Modal from './containers/Modal';

const App = () => (
  <Switch>
    <Route path="/:id" exact component={Modal} />
    <Route path="/" exact component={Photos} />
    <Route render={() => <h1>404 : Not Found</h1>} />
  </Switch>
);

export default App;
