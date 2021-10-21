import { h } from "preact";
import { Router } from "preact-router";

import Header from "./header";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import Profile from "../routes/profile";
import News from "../routes/news";

const App = () => (
  <div id="app">
    <Header />
    <Router>
      <Home path="/" />
      <News path="/news/" />
      <Profile path="/profile/" user="Jon" />
      <Profile path="/profile/:user" />
    </Router>
  </div>
);

export default App;
