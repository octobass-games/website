import React from "react";
import { Link } from "react-router-dom";
import logo from "./simple-octobass.svg";

const MiniGames = () => (
  <div className="App mini-games">
    <Link to="/">
      <img className="bass-logo" src={logo} alt="home" />
    </Link>
    <div className="flex-container mini-projects-header">
      <h1>Mini Projects</h1>
    </div>
    <hr />
    <Link to="/hats-and-cats">
      <div className="HatsAndCats mini-game-panel">
        <div className="main-header flex-container">
          <img
            className="flex-item moody-soup-logo"
            src="https://i.imgur.com/XkjWCD5.png"
            alt="moody"
          />
        </div>
      </div>
    </Link>
    <hr />
    <a href="https://octobass-games.github.io/vimboy">
      <div className="Vimboy mini-game-panel">
        <div className="main-header flex-container">
          <h2 className="vimboy-title">vimboy</h2>
        </div>
      </div>
    </a>
    <hr />
  </div>
);

export default MiniGames;
