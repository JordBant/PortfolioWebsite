import React from 'react'
import { motion } from 'framer-motion'
import './cta-button.scss'

const CTAButton = ({variants, animate, initial}) => {
  return (
    <div className='cta-button-wrapper' >
      <motion.button 
      className='cta-button'
      variants={variants}
      animate = {animate}
      initial = {initial}
      >  
      <h1 className="inner-btn">Let's Connect</h1>
      </motion.button>
    </div>
  )
}

export default CTAButton