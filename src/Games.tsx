import React from "react";
import { Link } from "react-router-dom";
import logo from "./simple-octobass.svg";

const Games = () => (
  <div className="App mini-games">
    <Link to="/">
      <img className="bass-logo" src={logo} alt="home" />
    </Link>
    <hr />
    <a href="https://octobass.itch.io/lunar-heist" aria-label="Lunar Heist">
      <div className="LunarHeist game-panel" />
    </a>
    <hr />
    <a href="https://octobass-games.github.io/vimboy" aria-label="Vimboy">
      <div className="Vimboy game-panel">
        <div className="flex-container game-panel__label">
          <h2 className="vimboy-title">vimboy</h2>
        </div>
      </div>
    </a>
    <hr />
    <Link to="/hats-and-cats" aria-label="Hats and Cats">
      <div className="HatsAndCats game-panel">
        <div className="flex-container game-panel__label">
          <img
            className="flex-item moody-soup-logo"
            src="https://i.imgur.com/XkjWCD5.png"
            alt="moody"
          />
        </div>
      </div>
    </Link>
    <hr />
  </div>
);

export default Games;
