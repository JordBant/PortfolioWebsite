import React, { FC } from 'react'
import './IconView.scss'

type IconViewProps = {
  classNames?: string
  iconElement: JSX.Element
}

export const IconView: FC<IconViewProps> = ({classNames ,iconElement}) => {
  return (
    <div className={`icon-container ${classNames}`}>
        {iconElement}
    </div>
  )
}