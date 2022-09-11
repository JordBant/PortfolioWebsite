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
  <>
    <KobabDropdown activeDropdown = {isActiveKobab} clickEvent = {handleDropdown} />
    <ul className={`options-list ${isActiveDropdown}`}>
      {
        iconNameArr.map((iconName) => {
        return (
        <li key = {iconName} className = 'option'> 
          <Icon compClass = 'option-icon' iconName = {iconName} />
        </li>
        )})
      }
    </ul>
  </>
)}

export default OptionsList