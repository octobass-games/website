import React from "react";
import Gallery from "./Gallery";
import NavBar from "./NavBar";

const images = ["https://i.imgur.com/A43Lrgs.gif"];

const HatsAndCats = () => (
  <div className="HatsAndCats App Page">
    <NavBar />
    <div className="main-header flex-container">
      <img
        className="flex-item moody-soup-logo"
        src="https://i.imgur.com/XkjWCD5.png"
        alt="moody"
      />
    </div>
    <div className="flex-container description">
      <div className="flex-item">
        <img
          className="moody-soup-image witch"
          src="https://i.imgur.com/oNm60DE.png"
          alt="moody"
        />
      </div>
      <div className="flex-item moody-soup-description">
        <p>
          Hats and Cats - A small jumping platformer where you collect hats and
          cats. Currently on hold.
        </p>
      </div>
    </div>
    <br />
    <Gallery images={images} />
  </div>
);

export default HatsAndCats;
