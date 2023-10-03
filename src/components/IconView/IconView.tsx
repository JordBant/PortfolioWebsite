import React, { FC } from 'react'
import './IconView.scss'

type IconViewProps = {
  classNames?: string
  iconElement: React.ReactElement
}

export const IconView: FC<IconViewProps> = ({classNames ,iconElement}) => {
  return (
    <div className={`icon-container ${classNames}`}>
        {iconElement}
    </div>
  )
}