import React, { useState } from "react";
import "./SocialIcon.css";

const SocialIcon = ({ iconDefault, iconHover, link, size, margin }) => {
  const [isHovered, setIsHovered] = useState(false);

	const defaultIcon = iconDefault
	const hoverIcon = iconHover

  return (
    <div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          className="icon"
          style={{ height: size, marginLeft: margin }}
          src={isHovered ? hoverIcon : defaultIcon}
          alt="Icon"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </a>
    </div>
  );
};

export default SocialIcon;
