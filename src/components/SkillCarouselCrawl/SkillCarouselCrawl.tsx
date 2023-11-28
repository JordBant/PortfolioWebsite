import React, { FC, useState } from "react";
import { SkillCards } from "./partials/SkillCards/SkillCards";
import "./SkillCarouselCrawl.scss";

export const SkillCarouselCrawl: FC = (): React.ReactElement => {
  const mapComponentsByClassName = ["ticker__initial", "ticker__next", "ticker__next"];
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="ticker__wrapper">
      <div className="ticker">
        {mapComponentsByClassName.map((className) => (
          <div className={`${className}`}>
            <SkillCards />
          </div>
        ))}
      </div>
    </div>
  );
};

