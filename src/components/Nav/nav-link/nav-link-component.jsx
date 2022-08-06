import React from 'react'
import './nav-link.scss'

const NavLink = ({linkName}) => {
  return (
    <li className="nav-item"> {linkName} </li>
  )
}

export default NavLink