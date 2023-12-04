import React, { FC, useState } from "react";
import { Icon } from "../../components";

import { classNamesChecker } from "../../utils";
import { FlippableCardProps } from "./FlippableCard.types";
import "./FlippableCard.scss";

export const TextOverLay: FC<FlippableCardProps> = ({
  children,
  classNames,
  colorTheme = "#fa9595",
  title = "Technology",
}) => {
  if (classNames !== undefined) classNamesChecker(classNames);
  return (
    <div className="scene">
      <div className="card">
        <div className="card-face front">
          <Icon iconElement={"REACT"} />
          {/* {children} */}
        </div>
        <div className="card-face back">
          <h1 className="card-text" style={{ color: `${colorTheme}` }}>
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};
