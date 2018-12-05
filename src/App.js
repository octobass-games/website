import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import MoodySoup from './MoodySoup.js';
import HatsAndCats from './HatsAndCats.js';
import Team from './Team.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  render() {
    return (
       <Router>
          <Switch>
            <Route exact path="/moody-soup" component={MoodySoup} />
            <Route exact path="/hats-and-cats" component={HatsAndCats} />
            <Route exact path="/team" component={Team} />
            <Route component={Home} />
          </Switch>
        </Router>)
  }
}

export default App;
