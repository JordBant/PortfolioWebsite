import React, { FC } from 'react'
import { ICONS as SKILL_ICONS} from '../../utils/constants'
import { SkillCardView } from '../../components/SkillCardView/SkillCardView'

export const SkillCardCrawler: FC = () => {
  return (
    <>
    {
        SKILL_ICONS.map(icon => {
            return(
                <ul>{
                    <SkillCardView
                    iconName={icon.name} 
                    fontColor={icon.fontColor} 
                    iconElement={icon.iconElement}  
                    />}
                </ul>
            )
        })
    }
    </>
  )
}
