import React, { FC, useState } from "react";
import { Icon } from "../../components";

import { classNamesChecker } from "../../utils";
import { TextOverLayProps } from "./TextOverlay.types";
import "./TextOverlay.scss";

export const TextOverLay: FC<TextOverLayProps> = ({
  children,
  classNames,
  verticalLineColor = "#fa9595",
  title = "Technology",
}) => {
  if (classNames !== undefined) classNamesChecker(classNames);

  const [isHovered, setIsHovered] = useState(false);

  const isHoveredHandler = (toggleTo: boolean) => {
    setIsHovered(toggleTo);
  };

  const textContainerClass: "wrapper-hovered" | "" = isHovered ? "wrapper-hovered" : "";

  return (
    <div
      className="overlay-wrapper"
      onMouseEnter={() => isHoveredHandler(true)}
      onMouseLeave={() => isHoveredHandler(false)}
    >
      <div className="overlay-container">
        <div
          className={`overlay ${textContainerClass} ${classNames}`}
          style={{ borderLeft: `7px solid ${verticalLineColor}` }}
        >
          <h2 className="overlay-text">{title}</h2>
        </div>
      </div>
      <Icon iconElement={"VIDEO"} />
      {children}
    </div>
  );
};
