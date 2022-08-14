import React from 'react'
import Github from '../../Icon-Component/github-component'
import LinkedIn from '../../Icon-Component/linkdIn-component'
import { motion } from 'framer-motion'
import './off-site-links-component.scss'

const OffSiteLinkBtn = ({linkIcon, animate, variant, initial}) => {
  const linkTo = 'nowhere yet'
  const switchIcon = (icon) => {
    // eslint-disable-next-line default-case
    switch (icon.toLowerCase()) {
      case 'github':
        return <Github/>
      case 'linkedin':
        return <LinkedIn/>
    }
  }
  return (
    <motion.a href = {linkTo} 
    className = "offsite-link"
    variant = {variant} 
    animate = {animate}
    initial = {initial}
    >
      {
        switchIcon(linkIcon)
      }
    </motion.a>
  )
}
export default OffSiteLinkBtn