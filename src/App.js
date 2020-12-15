import React from "react";
//import React from "react";
import { render } from "react-dom";
//import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import About from "./Components/About";
import Home from "./Components/Home";
import Topics from "./Components/Topics";

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);

export default App;
