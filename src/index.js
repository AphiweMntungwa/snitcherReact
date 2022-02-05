import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import Posts from "./Components/Posts/Posts";
import Details from "./Components/Details/Details";
import Newpost from "./Components/Newpost/Newpost";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Routes>
      <Route
        path="/"
        element={
          <App>
            <Posts />
          </App>
        }
      />
      <Route
        path="/details"
        element={
          <App>
            <Details />
          </App>
        }
      />
      <Route
        path="/new"
        element={
          <App>
            <Newpost />
          </App>
        }
      />
    </Routes>
  </Router>,
  document.getElementById("root")
);
