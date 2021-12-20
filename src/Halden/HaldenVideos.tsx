import React, { FunctionComponent } from "react";

const videos = [
  "https://www.youtube.com/embed/-tfsLhDTfOc",
  "https://www.youtube.com/embed/swfyTCgzd3I",
  "https://www.youtube.com/embed/BhIKuS_V3lk",
  "https://www.youtube.com/embed/Q2SCh_gSmxU",
  "https://www.youtube.com/embed/OGdQkTpgUSc",
  "https://www.youtube.com/embed/OPWefuZTObA",
];

const HaldenVideos = () => {
  return (
    <>
      {videos.map((src) => (
        <Video src={src} key={src} />
      ))}
    </>
  );
};

interface VideoProps {
  src: string;
}

const Video: FunctionComponent<VideoProps> = ({ src }) => (
  <div className="halden__video-container fade-in fade-in--no-delay">
    <iframe
      width="483"
      height="272"
      src={src}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="halden__video"
    />
  </div>
);
export default HaldenVideos;
