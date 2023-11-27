import { FC } from 'react'
import { SIDEBAR_ICONS } from '../../../store/constants'
import { Icon } from '../../../components'
import { SidebarOptionsProps } from '../SidebarNavCard.types'

export const SidebarOptions: FC<SidebarOptionsProps> = ({isClicked}) => {
  const activeOptionListClassName: '' | 'sidebar-card__active-options-list' = isClicked ? 'sidebar-card__active-options-list' : ''

  return (
    <div className={`sidebar-card__options-list ${activeOptionListClassName}`}>
        {
          SIDEBAR_ICONS.map((option) => (
            <Icon iconElement={option} classNames='sidebar-card__options-btn'/>
          ))
        }
    </div>
  )
}
