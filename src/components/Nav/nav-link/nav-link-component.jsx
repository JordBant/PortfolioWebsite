import React from 'react'
import './nav-link.scss'

const NavLink = ({linkName}) => {
  return (
    <li className="nav-link"> {linkName} </li>
  )
}

export default NavLink