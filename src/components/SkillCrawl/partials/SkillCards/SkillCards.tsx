import { SKILL_ICONS } from '../../../../utils/constants'
import { SkillCard } from '../SkillCard/SkillCard'

export const SkillCards = () => {
  return (
    <div className="ticker__item skill-card-wrapper">
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
