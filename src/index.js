import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import SignInSide from './views/Login'

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.2.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import AdminLayout from "layouts/Admin.js";

const hist = createBrowserHistory();

const isLogged = localStorage.getItem('user');

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/admin" render={ isLogged ? ((props) => <AdminLayout {...props} />) : <Redirect to='/login' />} />
      <Route exact path="/login">
        { isLogged ? <Redirect to='/admin/dashboard' /> : <SignInSide /> }
      </Route>
      <Redirect to="/login" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
