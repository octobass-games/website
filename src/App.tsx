import React, { FunctionComponent } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import MoodySoup from "./MoodySoup";
import Team from "./Team";
import Games from "./Games";
import HatsAndCats from "./HatsAndCats";
import Halden from "./Halden/Halden";

const App: FunctionComponent = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/moody-soup" component={MoodySoup} />
      <Route exact path="/games" component={Games} />
      <Route exact path="/halden" component={Halden} />
      <Route exact path="/hats-and-cats" component={HatsAndCats} />
      <Route
        exact
        component={() => {
          (window as any).location = "https://octobass-games.github.io/vimboy";
          return null;
        }}
        path="/vimboy"
      />
      <Route exact path="/team" component={Team} />
      <Route component={Home} />
    </Switch>
  </Router>
);

export default App;
