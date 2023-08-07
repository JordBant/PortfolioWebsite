import React, { FC } from 'react' 
import './SkillCard.scss'
import { SkillIcon } from './partials/SkillIcon/SkillIcon'

type SkillCardProps = {
    iconName: string,
    fontColor: string,
    iconElement: JSX.Element
}

export const SkillCard: FC<SkillCardProps> = ({iconName, fontColor, iconElement}) => {
    return (
        <div className="skill-card-container">
            <SkillIcon classNames='icon-container' iconElement={iconElement}/>
            <hr className="y-line" style = {{ background: `${fontColor}` }}/>
            <p className ="side-text"> {iconName} </p>
        </div>
    )
}