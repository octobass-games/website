import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
      <div className="App">

        <div className="main-header flex-container">
          <div className="logo flex-item"/>
        </div>
        <div className="flex-container game-images">
            <Link to="/moody-soup"  className="fade-in">
              <img className="game-image flex-item" src="https://i.imgur.com/IkdDQBO.png" alt="moody-soup"/>
            </Link>
            <Link to="/hats-and-cats" className="fade-in">
              <img className="game-image flex-item" src="https://i.imgur.com/JMrVs09.png" alt="hats-and-cats"></img>
            </Link>
            <Link to="/team" className="fade-in">
              <img className="game-image flex-item" src="https://i.imgur.com/fuyqr8A.png" alt="team"></img>
            </Link>
        </div>
        <div className="links flex-container">
        <a href="https://twitter.com/OctobassGames" title="twitter"><i className="fab fa-twitter link flex-item"></i></a>
          <a href="https://octobass.itch.io/" title="itch.io"><i className="fas fa-gamepad link flex-item"></i></a>
          <a href="https://octobassgames.tumblr.com" title="tumblr"><i className="fab fa-tumblr link flex-item"></i></a>
        </div>
      </div>);

export default Home;
