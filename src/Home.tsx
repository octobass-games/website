import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="App">
    <div className="main-header flex-container">
      <div className="logo flex-item" />
    </div>
    <div className="flex-container game-images">
      <Link to="/games" className="fade-in">
        <img
          className="game-image flex-item"
          src="https://i.imgur.com/V91m7jg.png"
          alt="mini games"
        ></img>
      </Link>
      <Link to="/team" className="fade-in">
        <img
          className="game-image flex-item"
          src="https://i.imgur.com/fuyqr8A.png"
          alt="team"
        ></img>
      </Link>
    </div>
    <div className="links flex-container">
      <a href="https://octobass.itch.io/" title="itch.io">
        <i className="fas fa-gamepad link flex-item"></i>
      </a>
      <a
        href="https://www.youtube.com/channel/UCnn7NagMQ0LmW89RH-Dya3Q"
        title="youtube"
      >
        <i className="fab fa-youtube link flex-item"></i>
      </a>
      <a href="https://octobassgames.tumblr.com" title="tumblr">
        <i className="fab fa-tumblr link flex-item"></i>
      </a>
      <a href="https://bsky.app/profile/octobass-games.bsky.social" title="bluesky">
        <i className="far fa-sticky-note link flex-item"></i>
      </a>
      <a href="https://github.com/octobass-games" title="github">
        <i className="fab fa-github link flex-item"></i>
      </a>
    </div>
  </div>
);

export default Home;
