import React from "react";
import NavBar from "./NavBar";

const Games = () => (
  <div className="App mini-games Page">
    <NavBar />
    <hr />
    <a href="https://octobass.itch.io/dont-bug-me" aria-label="Don't bug me">
      <div className="DontBugMe game-panel" />
    </a>
    <hr />
    <a href="https://octobass.itch.io/cat-got-your-tongue" aria-label="Cat got your tongue?">
      <div className="CatGotYourTongue game-panel" />
    </a>
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
  </div>
);

export default Games;
