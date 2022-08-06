import React from 'react'
import CTAButton from '../../Buttons/CTA-Button/cta-button-component'
import OffSiteLinkBtn from '../../Buttons/Off-Site-Links/off-site-link-component'

import './about-page.scss'

const AboutCTA = () => {
    return(
        <div className="about-cta">
            <CTAButton/>
            <OffSiteLinkBtn/>
            <OffSiteLinkBtn/>
        </div>
    )
}

const AboutBody = () => {
    return(
    <div className='about-body-container'>
        <div className="about-body">
            <h1 className="about-salutations"> I'm <span className="name">Jordon</span> </h1>
            <p className="about-body-text">
                I am a Frontend Web Developer with a Bachelors of Science in Computer Science. 
                I have a strong drive and passion for creating robust and beautiful, 
                but performant web applications and websites. 
            </p>
            <AboutCTA/>
        </div>
    </div>
    )
}

const About = () => {
  return (
    <>
        <AboutBody/>
    </>
  )
}
export default About