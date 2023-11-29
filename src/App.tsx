// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { About, Contact, Projects } from "./pages";
import { Navbar } from "./components/Navbar/Navbar";
import { SkillCarouselCrawl } from "./components/SkillCarouselCrawl/SkillCarouselCrawl";
import "./styles/App.scss";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <SkillCarouselCrawl />
      <Projects />
      <Contact />
    </>
  );
}

export default App;

