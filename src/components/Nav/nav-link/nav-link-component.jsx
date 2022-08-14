import React from 'react'
import { motion } from 'framer-motion'
import './nav-link.scss'

const NavLink = ({linkName}) => {
  const item = {
    hidden: { 
      opacity: 0,
      x: 300
    },
    show: { 
      opacity: 1,
      x: 0,
      transition: {
        ease:[0.6,0.01,-0.05,0.95],
        duration: 1.3
      }
    }
  }

  return (
    <motion.li 
    className= "nav-link"
    variants = {item}
    > 
      {linkName} 
    </motion.li>
  )
}

export default NavLink