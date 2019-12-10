import React, { FunctionComponent } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import MoodySoup from "./MoodySoup";
import HatsAndCats from "./HatsAndCats";
import Team from "./Team";

const App: FunctionComponent = () => (
  <Router>
    <Switch>
      <Route exact path="/moody-soup" component={MoodySoup} />
      <Route exact path="/hats-and-cats" component={HatsAndCats} />
      <Route exact path="/team" component={Team} />
      <Route component={Home} />
    </Switch>
  </Router>
);

export default App;
