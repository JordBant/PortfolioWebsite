import { SKILL_ICONS } from '../../../../utils/constants'
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
              iconElement={icon.iconElement()}
            />
        )})
      }
    </div>
  )
}
