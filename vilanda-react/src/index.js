import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import Setting from "./pages/setting/";
import TodoList from "./pages/todolist/TodoList.jsx";
import Login from "./pages/Login";
console.log(process.env);

ReactDOM.render(
  <Router>
    <Route path="/" component={App} />
    <Route path="/setting" component={Setting} />
    <Route path="/todo" component={TodoList} />
    <Route path="/home" component={App} />
    <Route path="/login" component={Login} />
  </Router>,
  document.getElementById("vilanda")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
