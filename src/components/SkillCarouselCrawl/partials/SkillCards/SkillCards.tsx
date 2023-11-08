import { SKILL_ICONS } from '../../../../store/constants'
import { Icons } from '../../../../store/constants.type'
import { SkillCard } from '../SkillCard/SkillCard'
import './SkillCards.scss'

export const SkillCards = () => {
  return (
    <div className="skill-card-container">
      {
        SKILL_ICONS.map(icon => {
        return(
            <SkillCard
              iconName={icon.name} 
              fontColor={icon.fontColor}
              iconElement={icon.name as Icons}
            />
        )})
      }
    </div>
  )
}
