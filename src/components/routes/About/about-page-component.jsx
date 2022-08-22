import React from 'react'
import CTAButton from '../../Buttons/CTA-Button/cta-button-component'
import OffSiteLinkBtn from '../../Buttons/Off-Site-Links/off-site-link-component'
import { motion } from 'framer-motion'

import './about-page.scss'
import PageTitle from '../../Page-Title/page-title-component'

const AboutCTA = () => {
    const container = {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition:{
                staggerChildren: 0.7,
                delayChildren: 0.7,
                ease: [0.6,0.01,-0.05,0.95],
                duration: 2.25
            }
        }
    }
    
    return(
        <motion.div variants={container} animate = "show" initial = "hidden" className="about-cta">
            <CTAButton />
            <OffSiteLinkBtn linkIcon = "Github" />
            <OffSiteLinkBtn linkIcon = "LinkedIn" />
        </motion.div>
    )
}

const AboutBody = ({backgroundActive}) => {
    const container = {
        hidden: { 
            opacity: 0,
         },
        show: {
            opacity: 1,
            transition:{
                staggerChildren: 0.5,
                delayChildren: 4
            },
        }
      }

    const item = {
    hidden: {
        opacity: 0,
        y: -100
        },
    show: {
        opacity: 1,
        y: 0,
        transition: {
                ease:[0.6,0.01,-0.05,0.95],
                duration: 1.6,
            }
        }
    }

    return(
    <div className={`about-body-container ${backgroundActive}`}>
        <motion.div className="about-body"
        variants={container}
        initial="hidden"
        animate="show"
        >
            <motion.h1 animate = "show" initial = "hidden" variants = {item}  className="about-salutations"> I'm Jordon </motion.h1>
                <motion.p  animate = "show" initial = "hidden" variants = {item} className="about-body-text">
                    I am a Frontend Web Developer with a Bachelors of Science in Computer Science. 
                    I have a strong drive for creating robust, beautiful and 
                    performant web applications and websites. 
                </motion.p>
                <AboutCTA/>
        </motion.div>
    </div>
    )
}

const About = ({backgroundActive}) => {
  return (
    <>
        <AboutBody backgroundActive = {backgroundActive} />
        <PageTitle pageTitleName = "About" />
    </>
  )
}
export default About