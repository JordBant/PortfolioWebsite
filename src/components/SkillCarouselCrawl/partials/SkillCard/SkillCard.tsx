import { FC } from "react";
import { Icon } from "../../../Icons/Icon";
import { SkillCardProps } from "../../SkillCarouselCrawl.types";
import { TextOverLay } from "../../../../layout";
import "./SkillCard.scss";

export const SkillCard: FC<SkillCardProps> = ({ iconName, fontColor, iconElement }) => {
  return (
    <TextOverLay title={iconName} verticalLineColor={fontColor}>
      <div className={`skill-card`}>
        <Icon classNames="skill-icon" iconElement={iconElement} />
        {/* <hr className="y-line" style = {{ background: `${fontColor}` }}/> */}
        {/* <p className ="side-text"> {iconName} </p> */}
      </div>
    </TextOverLay>
  );
};

