import React, { FC } from 'react'
import { ICONS } from '../../utils/constants'
import { SkillCard } from '../../components/SkillCardView/SkillCardView'

export const SkillCardCrawler: FC = () => {
  return (
    <>
    {
        ICONS.map(icon => {
            return(
                <ul>{
                    <SkillCard 
                    iconName={icon.name} 
                    fontColor={icon.fontColor} 
                    iconElement={icon.iconName}  
                    />}
                </ul>
            )
        })
    }
    </>
  )
}
