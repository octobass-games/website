import React, { FunctionComponent } from "react";
import { PickedPerson } from "./Team";

interface TeamMemberProps {
  image: string;
  onClick: (person: PickedPerson) => void;
  person: PickedPerson;
  isSelected: boolean;
}

const TeamMember: FunctionComponent<TeamMemberProps> = ({
  image,
  onClick,
  person,
  isSelected,
}) => (
  <button
    className={`team-member-button ${
      isSelected ? "team-member-button--active" : ""
    }`}
    title={`About ${person}`}
    onClick={() => onClick(person)}
  >
    <img className="team-member-image" src={image} alt="" />
  </button>
);

export default TeamMember;
