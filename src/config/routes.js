import React from "react";
import ReactDOM from "react-dom";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

import Main from '../components/Main';
import Navbar from '../components/Navbar';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Navbar />
      <IndexRoute component={Main} />
    </Route>
  </Router>
);


export default routes;