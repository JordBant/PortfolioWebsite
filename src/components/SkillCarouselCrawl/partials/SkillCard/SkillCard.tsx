import React, { FC } from 'react' 
import './SkillCard.scss'
import { IconView } from '../../../IconView/IconView'

type SkillCardProps = {
    iconName: string,
    fontColor: string,
    iconElement: React.ReactElement
}

export const SkillCard: FC<SkillCardProps> = ({iconName, fontColor, iconElement}) => {
    return (
        <div className={`skill-card`}>
            <IconView classNames='skill-icon'  iconElement={iconElement}/>
            {/* <hr className="y-line" style = {{ background: `${fontColor}` }}/> */}
            {/* <p className ="side-text"> {iconName} </p> */}
        </div>
    )
}