import React, { FC } from 'react'
import { SKILL_ICONS} from '../../utils/constants'
import { IconView, SkillCardView } from '..'

export const SkillCardCrawler: FC = () => {
  return (
    <>
    {
        SKILL_ICONS.map(icon => {
            return(
              <ul>
                  <SkillCardView 
                    iconName={icon.name} 
                    fontColor={icon.fontColor} 
                    iconElement={icon.iconElement()}
                  />
              </ul>
          )
        })
    }
    </>
  )
}
