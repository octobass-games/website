import React from "react";
import { Link } from "react-router-dom";
import logo from "./simple-octobass.svg";
import TeamMember from "./TeamMember";

const meganDescription =
  "I'm also a UK based dev. I like point and click games, and collect toy flamingos. I sometimes attempt to do art things too.";

const haldenDescription = "I'm Halden, I play games. I wrote some music.";

const Team = () => (
  <div className="Team App">
    <Link to="/">
      <img className="bass-logo" src={logo} alt="home" />
    </Link>
    <TeamMember
      className="adam"
      description={`Adam: I'm a software developer currently residing in the U.K. I've
          been a fairly large fan of video games for most of my life, and
          thought it would be fun to try and help create one from scratch! I
          tend to predominantly play RPGs, with my favourite series being
          Persona. My other main interests include watching anime, listening to
          music, and playing drums and piano (although not at the same time). I
          like penguins and cats.`}
      links={
        <a href="https://github.com/AdamskiPadamski">
          <i className="fab fa-github link-inverse flex-item"></i>
        </a>
      }
      image="https://i.imgur.com/QqsCnK2.png"
    />

    <TeamMember
      className="megan"
      description={`Megan: ${meganDescription}`}
      links={
        <>
          <a href="https://github.com/majicmoo">
            <i className="fab fa-github link-inverse flex-item"></i>
          </a>
          <a href="http://majicmoo.tumblr.com/">
            <i className="fab fa-tumblr link-inverse flex-item"></i>
          </a>
        </>
      }
      image="https://i.imgur.com/jQCtDtX.png"
    />

    <TeamMember
      className="halden"
      description={`Halden: ${haldenDescription}`}
      image="https://i.imgur.com/ygHER9y.png"
      links={
        <a href="https://github.com/Madmouseman">
          <i className="fab fa-github link-inverse flex-item"></i>
        </a>
      }
    />
  </div>
);

export default Team;
