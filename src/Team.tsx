import React, { useState } from "react";
import NavBar from "./NavBar";
import TeamMember from "./TeamMember";

const meganDescription =
  "Megan: I'm a UK based dev, and also enjoy making pixel and digital art! I like point and click games, and collect toy flamingos.";

const haldenDescription =
  "Halden: I'm a student who has previously studied music and is now studying computer science. I enjoy music composition, performance and sound design. Some of my favourite instruments are tuba, trombone and guitar.";
const adamDescription = `Adam: I'm a software developer currently residing in the U.K. I
tend to predominantly play RPGs, with my favourite series being
Persona. My other main interests include watching anime, listening to
music, and playing drums and piano (although not at the same time). I
like penguins and cats.`;
const odetteDescription =
  "Odette: I currently work in Project Finance residing in the UK. In my spare time I enjoy playing games and drawing!";

export type PickedPerson = "odette" | "hal" | "megan" | "adam";

interface SocialMediaLink {
  href: string;
  icon: string;
}

interface Bubble {
  description: string;
  links: SocialMediaLink[];
}

const bubbles: Record<PickedPerson, Bubble> = {
  megan: {
    description: meganDescription,
    links: [
      { href: "https://github.com/majicmoo", icon: "fab fa-github" },
      { href: "http://majicmoo.tumblr.com/", icon: "fab fa-tumblr" },
    ],
  },
  adam: {
    description: adamDescription,
    links: [
      { href: "https://github.com/AdamskiPadamski", icon: "fab fa-github" },
    ],
  },
  hal: {
    description: haldenDescription,
    links: [
      { href: "https://octobass.games/halden", icon: "fas fa-music" },
      { href: "https://github.com/Madmouseman", icon: "fab fa-github" },
      {
        href: "https://haldenparkeswork.wordpress.com/",
        icon: "fab fa-wordpress-simple",
      },
    ],
  },
  odette: {
    description: odetteDescription,
    links: [
      { href: " https://github.com/OdetteParkes", icon: "fab fa-github" },
    ],
  },
};

const Team = () => {
  const [pickedPerson, setPickedPerson] = useState<PickedPerson | null>(null);
  const toggle = (person: PickedPerson) => {
    if (pickedPerson === person) {
      setPickedPerson(null);
    } else {
      setPickedPerson(person);
    }
  };
  return (
    <>
      <NavBar />
      <div className="Team App Page">
        <div className="team-info-wrapper">
          {pickedPerson && (
            <div className="team-info">
              <p>{bubbles[pickedPerson].description}</p>
              {bubbles[pickedPerson].links.map(({ href, icon }) => (
                <a href={href} key={href}>
                  <i className={`${icon} link-inverse flex-item team-link`}></i>
                </a>
              ))}
            </div>
          )}
          {!pickedPerson && (
            <div className="team-info">
              <h1>Meet the team! Click a person to find out more.</h1>
            </div>
          )}
        </div>

        <div className="team-wrapper">
          <TeamMember
            image="https://i.imgur.com/ocGcJTJ.gif"
            person="adam"
            onClick={toggle}
            isSelected={pickedPerson === "adam"}
          />

          <TeamMember
            image="https://i.imgur.com/PGvf9v1.gif"
            person="megan"
            onClick={toggle}
            isSelected={pickedPerson === "megan"}
          />

          <TeamMember
            image="https://i.imgur.com/hmOoxWl.gif"
            person="hal"
            onClick={toggle}
            isSelected={pickedPerson === "hal"}
          />

          <TeamMember
            image="https://i.imgur.com/Tik2gsp.gif"
            person="odette"
            onClick={toggle}
            isSelected={pickedPerson === "odette"}
          />
        </div>
      </div>
    </>
  );
};

export default Team;
