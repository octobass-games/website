import React, { FunctionComponent } from "react";

const musics: SoundCloudProps[] = [
  { url: "778162075", title: "Invasion", token: "s-mDcPh" },
  { url: "778163446", title: "Moon", token: "s-Huvgq" },
  { url: "1171204165", title: "Don't Bug Me", token: "s-YVsG7Igrn73" },
  { url: "1143224374", title: "Chiptune Scout Theme", token: "s-2mPMuETFVYJ" },
  {
    url: "1143224722",
    title: "Moonshot 2 Chiptune Pie",
    token: "s-ogX3ttZCEmg",
  },
  { url: "778163989", title: "Haunting", token: "s-bSsgR" },
  { url: "1143225370", title: "Lunar Heist Menu", token: "s-4JJ7xGOOHUx" },
  { url: "1143291115", token: "s-Ol2tQ2J3Qmo", title: "Cat Dream" },
  { url: "1143291820", token: "s-ie3Iqou07Gr", title: "Broomstick" },
  { url: "1143225097", token: "s-rFH3T8g5u2s", title: "Moonshot 2 Pie" },
  { url: "1143292546", token: "s-sEuVkkhFn4g", title: "Hats and Cats" },
  { url: "1143289387", token: "s-sOl9WvLAFQZ", title: "Sinister" },
  { url: "590448240", token: "s-sXqPB", title: "Bullet Hell" },
  { url: "1143293011", token: "s-0NGfis1iBNw", title: "Loss" },
  { url: "1143290107", token: "s-ldeCNxVm0Hd", title: "Spiders" },
  { url: "1143386056", token: "s-eSE91Cm8fFn", title: "Day" },
  { url: "1143285265", token: "s-pZ1G14HDpL1", title: "Lion fish" },
];

const HaldenMusic = () => (
  <>
    {musics.map((props) => (
      <SoundCloud {...props} />
    ))}
  </>
);

interface SoundCloudProps {
  url: string;
  title: string;
  token: string;
}

const SoundCloud: FunctionComponent<SoundCloudProps> = ({
  url,
  title,
  token,
}) => (
  <iframe
    width="100%"
    height="100"
    scrolling="no"
    frameBorder="no"
    className="fade-in fade-in--no-delay"
    allow="autoplay"
    title={title}
    src={`https://w.soundcloud.com/player/?url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F${url}&secret_token=${token}&show_artwork=true`}
  ></iframe>
);

export default HaldenMusic;
