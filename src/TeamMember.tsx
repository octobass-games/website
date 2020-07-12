import React, { FunctionComponent } from "react";

interface TeamMemberProps {
  description: string;
  links: JSX.Element;
  className: string;
  image: string;
}

const TeamMember: FunctionComponent<TeamMemberProps> = ({
  description,
  links,
  className,
  image,
}) => (
  <div className={`team-panel ${className}`}>
    <div className="team-member-wrapper">
      <img className="team-member-image" src={image} alt="moody" />
      <div className="flex-item team-member-description">
        <p>{description}</p>
      </div>
    </div>
    <div className="links flex-container pink">{links}</div>
  </div>
);

export default TeamMember;
