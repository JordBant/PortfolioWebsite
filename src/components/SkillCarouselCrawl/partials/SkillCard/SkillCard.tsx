import { FC } from "react";
import { FlippableCard } from "../../../../layouts";
import { Icon } from "../../../Icons/Icon";
import { SkillCardProps } from "../../SkillCarouselCrawl.types";
import "./SkillCard.scss";

export const SkillCard: FC<SkillCardProps> = ({ iconName, fontColor, iconElement }) => {
  return (
    <FlippableCard title={iconName} colorTheme={fontColor}>
      <div className={`skill-card`}>
        <Icon classNames="skill-icon" iconElement={iconElement} />
        {/* <hr className="y-line" style = {{ background: `${fontColor}` }}/> */}
        {/* <p className ="side-text"> {iconName} </p> */}
      </div>
    </FlippableCard>
  );
};

