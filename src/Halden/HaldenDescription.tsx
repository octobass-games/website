import React, { FunctionComponent } from "react";
import { SelectedThing } from "./Halden";
import HaldenIcon from "./HaldenIcon";

interface HaldenDescriptionProps {
  setSelectedThing: (s: SelectedThing) => void;

  currentlySelectedThing: SelectedThing;
}

const HaldenDescription: FunctionComponent<HaldenDescriptionProps> = ({
  setSelectedThing,
  currentlySelectedThing,
}) => {
  const iconProps = { setSelectedThing, currentlySelectedThing };

  return (
    <div>
      <h1 className="halden__heading">Halden Parkes</h1>
      <h2 className="halden__subheading">Composer, Sound Design</h2>

      <div className="halden__icons">
        <HaldenIcon
          {...iconProps}
          icon="fa-gamepad"
          selectedThing="game"
          title="Games"
        />
        <HaldenIcon
          {...iconProps}
          icon="fa-music"
          selectedThing="music"
          title="Music"
        />
        <HaldenIcon
          {...iconProps}
          icon="fa-video"
          selectedThing="video"
          title="Videos"
        />
      </div>
    </div>
  );
};

export default HaldenDescription;
