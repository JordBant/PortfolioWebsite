import React, { FC, useCallback, useState } from 'react'
import './SidebarNavCard.scss';
import { Icon } from '../../components';
import { SidebarNavCardProps } from './SidebarNavCard.types';
import { SidebarOptions } from './partials/SidebarOptions';

export const SidebarNavCard: FC<SidebarNavCardProps> = ({projectName}) => {
  const [isClicked, setisClicked] = useState(false);
  const isClickedHandler = useCallback((toggleTo: boolean): undefined => {
    setisClicked(toggleTo)
  }, []);
  const activeMenuClassName: '' | 'sidebar-card__active-menu' = isClicked ? 'sidebar-card__active-menu' : ''
  const activeMask: '' | 'sidebar-card__active-mask' = isClicked ? 'sidebar-card__active-mask' : ''

  return (
    <div className='sidebar-card'>
      <div className={`sidebar-card__sidebar ${activeMenuClassName} ${activeMask}`}>
        <div className='sidebar-card__options-wrapper'>
          <Icon classNames={`sidebar-card__options-trigger ${activeMenuClassName}`} iconElement='KOBAB' onClick={() => isClickedHandler(!isClicked)} />
          <SidebarOptions isClicked={isClicked} />
        </div>
        {
          isClicked && <h2 className="sidebar-card__project-name">
            Project Name
          </h2>
        }
      </div>
    </div>
  )
}
