import React from 'react';
import { Link } from 'react-router-dom';
import logo from './simple-octobass.svg'
import Gallery from './Gallery.js'

const images = ["https://i.imgur.com/cVtphzG.gif", "https://i.imgur.com/pnSyR5d.gif",
                "https://i.imgur.com/6jIewZa.gif", "https://i.imgur.com/kouVAc7.gif",
                "https://i.imgur.com/TPJjNdu.gif", "https://i.imgur.com/TeH9aVm.gif"]

const MoodySoup = () => (
      <div className="MoodySoup App">
        <Link to="/"><img className="bass-logo" src={logo} alt="home"/></Link>
      <div className="main-header flex-container">
        <img className="flex-item moody-soup-logo" src="https://i.imgur.com/EKgBa87.png" alt="moody"/>
      </div>
      <div className="flex-container description">
        <div className="flex-item">
          <img className="moody-soup-image" src="https://i.imgur.com/OH5PFOv.gif" alt="moody"/>
        </div>
        <div className="flex-item moody-soup-description">
          <p>A side scrolling adventure game with a magical girl theme. Explore dungeons, build relationships
          with your classmates, and level up to uncover the mysteries surrounding the school.
          Currently in progress.</p>
        </div>
      </div>
      <div className="flex-container description">
        <div className="flex-item moody-soup-description">
          <p>Design your character to look the way you want. And as you explore more, you’ll find more and more outfits with which to fill your wardrobe.</p>
        </div>
        <div className="flex-item">
          <img className="moody-soup-image" src="https://i.imgur.com/VgXgUO8.gif" alt="moody"/>
        </div>
      </div>
      <br />
      <Gallery images={images}/>
      </div>);

export default MoodySoup;
