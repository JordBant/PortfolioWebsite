import { FC } from 'react'
import './IconView.scss'
import { Icons } from '../../store/constants.type'
import { IconMap } from '../../store/constants'

type IconViewProps = {
  classNames?: string
  iconElement: Icons
}

export const IconView: FC<IconViewProps> = ({classNames ,iconElement}) => {
  return (
    <div className={`icon-container ${classNames}`}>
        {IconMap[iconElement]}
    </div>
  )
}