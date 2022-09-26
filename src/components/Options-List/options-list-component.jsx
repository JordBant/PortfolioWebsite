/* eslint-disable default-case */

import React, { useState } from 'react'
import KobabDropdown from './kobab-dropdown-component'
import Icon from '../Icons/Icon-Component/icon-component';
import './options-list.scss'

const OptionsList = ({iconNameArr}) => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const handleDropdown = () => setDropdownActive(!dropdownActive)

  const isActiveDropdown = dropdownActive ? 'list-active' : '' ;
  const isActiveKobab = dropdownActive ? 'kobab-active' : '' ;
  
return (
  <div className={`options-container ${isActiveDropdown}`}>
    <KobabDropdown activeDropdown = {isActiveKobab} clickEvent = {handleDropdown} />
    <ul className='options-list'>
      {
        iconNameArr.map((iconName) => {
        return (
        <li key = {iconName} className = 'option'> 
          <Icon compClass = 'option-icon' iconName = {iconName} />
        </li>
        )})
      }
    </ul>
  </div>
)}

export default OptionsList