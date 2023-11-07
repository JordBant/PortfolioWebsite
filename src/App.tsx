// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Navbar } from './components/Navbar/Navbar'
import { SkillCarouselCrawl } from './components/SkillCarouselCrawl/SkillCarouselCrawl'
import { SideTitlePage } from './layout/SideTitlePage/SideTitlePage'
import { About } from './pages'
import { Projects } from './pages/Projects/Projects'
import './styles/App.scss'

function App() {

  return (
    <>
      <Navbar/>
      <About/>
      <SkillCarouselCrawl/>
      <Projects/>
      <SideTitlePage pageTitle='Contacts'/>
    </>
      // <div className="about-body-container">
      //   <div className="about-body"
      //   >
      //       <h1 className="about-salutations"> I'm Jordon </h1>
      //           <p className="about-body-text">
      //               I am a Frontend Web Developer with a Bachelors of Science in Computer Science. 
      //               I have a strong drive for creating robust, beautiful and 
      //               performant web applications and websites. 
      //           </p>
      //   </div>
      //   {/* <a href="https://vitejs.dev" target="_blank">
      //     <img src={viteLogo} className="logo" alt="Vite logo" />
      //   </a>
      //   <a href="https://react.dev" target="_blank">
      //     <img src={reactLogo} className="logo react" alt="React logo" />
      //   </a> */}
      // </div>
  )
}

export default App
