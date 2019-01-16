// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { createBrowserHistory } from "history";

// const hist = createBrowserHistory();

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

//import AdminLayout from "./layouts/Admin/Admin.jsx";
//import RTLLayout from "./layouts/RTL/RTL.jsx";
import LandingComponent from './components/Landing/Landing'
//import Login from './components/Login/Login'

import "./assets/scss/black-dashboard-react.scss";
import "./assets/demo/demo.css";
import "./assets/css/nucleo-icons.css";
import "./components/Landing/Landing.css"
// import "./assets/css/custom-styles.css"

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
    {/* <Route path="/login" render={props => <Login {...props} />} /> */}
      {/* <Route path="/search" render={props => <AdminLayout {...props} />} /> */}
      {/* <Route path="/rtl" render={props => <RTLLayout {...props} />} /> */}
      <Route exact path="/" component={LandingComponent} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
