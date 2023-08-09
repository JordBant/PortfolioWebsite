import React from 'react'
import { IconView } from '../../components'

// type Props = {};

export const About = () => {
  return (
    <div className="about-body-container">
      <div className="about-body">
        <h1 className="about-salutations"> I'm Jordon </h1>
        <p className="about-body-text">
          I'm a Web Developer with a Bachelors of Science in Computer Science. 
          I build robust & performant web applications for businesses, corporations and other organizations.
        </p>
        <div className="calls-to-action">
          <button className="contact-now">Contact Now</button>
          {/* <IconView iconElement/> */}
        </div>
      </div>
      {/* <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a> */}
    </div>
  )
}