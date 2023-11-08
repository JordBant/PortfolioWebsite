import React, { FC, useCallback, useState } from 'react'
import './SidebarNavCard.scss';
import { Icon } from '../../components';
import { SidebarNavCardProps } from './SidebarNavCard.types';

export const SidebarNavCard: FC<SidebarNavCardProps> = ({projectName}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isHoveredHandler = useCallback((toggleTo: boolean): undefined => {
    setIsHovered(toggleTo)
  }, []);
  const activeMenuClassName: '' | 'sidebar-card__active-menu' = isHovered ? 'sidebar-card__active-menu' : ''
  const activeOptionListClassName: '' | 'sidebar-card__active-options-list' = isHovered ? 'sidebar-card__active-options-list' : ''

  return (
    <div className='sidebar-card'>
      <div className='sidebar-card__sidebar'>
        <Icon classNames='sidebar-card__options-btn' iconElement='KOBAB' onMouseLeave={() => isHoveredHandler(false)} onMouseEnter={() => isHoveredHandler(true)}/>
        <div className={`sidebar-card__idk ${activeOptionListClassName}`}></div>
        <div className={`sidebar-card__options-list ${activeMenuClassName}`}></div>
      </div>
    </div>
  )
}
