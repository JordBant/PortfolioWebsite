import React from 'react'
import { motion } from 'framer-motion'
import './cta-button.scss'

const CTAButton = ({variants, animate, initial}) => {
  return (
    <motion.button 
    className='cta-button'
    variants={variants}
    animate = {animate}
    initial = {initial}
    >  
      Let's Connect
    </motion.button>
  )
}

export default CTAButton