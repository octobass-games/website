import React, { FunctionComponent } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import MoodySoup from "./MoodySoup";
import Team from "./Team";
import MiniGames from "./MiniGames";
import HatsAndCats from "./HatsAndCats";

const App: FunctionComponent = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/moody-soup" component={MoodySoup} />
      <Route exact path="/mini-games" component={MiniGames} />
      <Route exact path="/hats-and-cats" component={HatsAndCats} />
      <Route exact path="/team" component={Team} />
      <Route component={Home} />
    </Switch>
  </Router>
);

export default App;
