import React, { FunctionComponent } from "react";
import { SelectedThing } from "./Halden";

interface HaldenIconProps {
  selectedThing: SelectedThing;
  setSelectedThing: (s: SelectedThing) => void;
  icon: string;

  currentlySelectedThing: SelectedThing;
  title: string;
}

const HaldenIcon: FunctionComponent<HaldenIconProps> = ({
  setSelectedThing,
  selectedThing,
  icon,
  currentlySelectedThing,
  title,
}) => (
  <button
    onClick={() => setSelectedThing(selectedThing)}
    className="fade-in fade-in--no-delay halden__button"
    title={title}
  >
    <i
      className={`fas ${icon} halden__icon ${
        currentlySelectedThing === selectedThing && "halden__icon--selected"
      }`}
    />
  </button>
);

export default HaldenIcon;
