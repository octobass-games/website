import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  render() {
    return (
      <div className="App">
        <header className="my-element">
          <div className="logo"/>

        </header>
        <div className="links flex-container">
        <a href="https://twitter.com/OctobassGames"><i className="fab fa-twitter link flex-item"></i></a>
          <a href="https://octobass.itch.io/"><i className="fas fa-gamepad link flex-item"></i></a>
          <a href="https://octobassgames.tumblr.com"><i className="fab fa-tumblr link flex-item"></i></a>
          
        </div>
      </div>)
  }
}

export default App;
