import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import './Icon.scss'
import { IconMap } from '../../store/constants'
import { IconProps } from './Icon.types'

export const Icon: FC<IconProps & Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'className'>> = ({classNames ,iconElement, ...props}) => {
  return (
    <div className={`icon-container ${classNames}`} {...props}>
        {IconMap[iconElement]}
    </div>
  )
}