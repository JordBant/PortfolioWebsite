import React, { FC } from 'react'
import './SkillIcon.scss'

type SkillIconProps = {
  classNames?: string
  iconElement: JSX.Element
}

export const SkillIcon: FC<SkillIconProps> = ({classNames ,iconElement}) => {
  return (
    <div className={`${classNames}`}>
        {iconElement}
    </div>
  )
}