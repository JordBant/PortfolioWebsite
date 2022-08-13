import React from 'react'
import CTAButton from '../../Buttons/CTA-Button/cta-button-component'
import OffSiteLinkBtn from '../../Buttons/Off-Site-Links/off-site-link-component'
import { motion } from 'framer-motion'

import './about-page.scss'
import PageTitle from '../../Page-Title/page-title-component'

const AboutCTA = () => {
    return(
        <div className="about-cta">
            <CTAButton/>
            <OffSiteLinkBtn linkIcon = "Github" />
            <OffSiteLinkBtn linkIcon = "LinkedIn" />
        </div>
    )
}

const AboutBody = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
            staggerDirection: -1,
            delayChildren: 0.5,
          }
        }
      }

    return(
    <div className='about-body-container'>
        <motion.div className="about-body">
            <h1 className="about-salutations"> I'm <span className="name">Jordon</span> </h1>
            <p className="about-body-text">
                I am a Frontend Web Developer with a Bachelors of Science in Computer Science. 
                I have a strong drive and passion for creating robust and beautiful, 
                but performant web applications and websites. 
            </p>
            <AboutCTA/>
        </motion.div>
    </div>
    )
}

const About = () => {
  return (
    <>
        <AboutBody/>
        <PageTitle pageTitleName = "About" />
    </>
  )
}
export default About