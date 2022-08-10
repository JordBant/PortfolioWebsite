import React from 'react'
import { motion } from 'framer-motion'
import './nav-link.scss'

const NavLink = ({linkName}) => {
  const itemAnime = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

  return (
    <motion.li 
    className= "nav-link"
    variants = {itemAnime}
    > 
      {linkName} 
    </motion.li>
  )
}

export default NavLink