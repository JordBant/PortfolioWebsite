import { FC } from 'react'
import { SIDEBAR_ICONS } from '../../../store/constants'
import { Icon } from '../../../components'
import { SidebarOptionsProps } from '../SidebarNavCard.types'

export const SidebarOptions: FC<SidebarOptionsProps> = ({classNames}) => {
  return (
    <ul className=''>
        {
            SIDEBAR_ICONS.map((icon) => (
            <li>
                <Icon iconElement={`${icon}`} />
            </li>
            ))
        }
    </ul>
  )
}
