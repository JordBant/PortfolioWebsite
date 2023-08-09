import React, { FC } from 'react' 
import './SkillCardView.scss'
import { IconView } from '../IconView/IconView'

type SkillCardProps = {
    iconName: string,
    fontColor: string,
    iconElement: JSX.Element
}

export const SkillCardView: FC<SkillCardProps> = ({iconName, fontColor, iconElement}) => {
    return (
        <div className="skill-card-container">
            <IconView iconElement={iconElement}/>
            <hr className="y-line" style = {{ background: `${fontColor}` }}/>
            <p className ="side-text"> {iconName} </p>
        </div>
    )
}