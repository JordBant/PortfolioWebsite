import React, { FC, useCallback, useState } from 'react'
import './SidebarNavCard.scss';
import { Icon } from '../../components';
import { SidebarNavCardProps } from './SidebarNavCard.types';
import { SIDEBAR_ICONS } from '../../store/constants';

export const SidebarNavCard: FC<SidebarNavCardProps> = ({projectName}) => {
  const [isClicked, setisClicked] = useState(false);
  const isClickedHandler = useCallback((toggleTo: boolean): undefined => {
    setisClicked(toggleTo)
  }, []);
  const activeMenuClassName: '' | 'sidebar-card__active-menu' = isClicked ? 'sidebar-card__active-menu' : ''
  const activeMask: '' | 'sidebar-card__active-mask' = isClicked ? 'sidebar-card__active-mask' : ''
  const activeOptionListClassName: '' | 'sidebar-card__active-options-list' = isClicked ? 'sidebar-card__active-options-list' : ''

  return (
    <div className='sidebar-card'>
      <div className={`sidebar-card__sidebar ${activeMenuClassName} ${activeMask}`}>
        <Icon classNames={`sidebar-card__options-trigger ${activeMenuClassName}`} iconElement='KOBAB' onClick={() => isClickedHandler(!isClicked)} />
        <h2 className="sidebar-card__project-name">
          Project Name
        </h2>
      </div>
      <div className={`sidebar-card__options-list ${activeOptionListClassName}`}>
        <div className="sidebar-card__options-btn-wrapper">
          {
            SIDEBAR_ICONS.map((option) => (
              <Icon iconElement={option} classNames='sidebar-card__options-btn'/>
            ))
          }
        </div>
      </div>
    </div>
  )
}
