import React, { useState } from 'react'
import KobabDropdown from './kobab-dropdown-component'
import OptionListIcon from './options-list-icon-component'
import './options-list.scss'

const OptionsList = ({iconArr}) => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const isActiveDropdown = dropdownActive ? 'list-active' : '' ;
  const isActiveKobab = dropdownActive ? 'kobab-active' : '' ;
  const handleDropdown = () => setDropdownActive(!dropdownActive)

  return (
    <>
      <KobabDropdown activeDropdown = {isActiveKobab} clickEvent = {handleDropdown} />
      <ul className={`options-list ${isActiveDropdown}`}>
        {
          iconArr.map((icon, key) => {
          return <OptionListIcon key = {key} icon = {icon} />
          })
        }
      </ul>
    </>
  )
}

export default OptionsList