import './App.scss'
import {useEffect, useState} from 'react'
import Credentials from "./components/routes/Credentials/credentials-page-component";
import About from "./components/routes/About/about-page-component";
import NavBar from "./components/Nav/nav-bar/nav-bar-component";
import Projects from "./components/routes/Projects/projects";
import Contact from "./components/routes/Contact/contact";
import Loader from "./components/Loader/loader-component";

const App = () => {
  const [loading, setLoading] = useState(true)
  const [backGroundAnime, setBackGrndAnime] = useState(false)
  useEffect(() => {
    setTimeout(() => { 
      setLoading(false) 
      setBackGrndAnime(true)
    }, 5500)
  }, [])
  
  const backgroundActive = backGroundAnime ? 'background-active' : ''

  return (
    <>
      <div className="App">

        {
          loading 
          ? <Loader/>
          :
          <>
            <NavBar/>
            <About backgroundActive= { backgroundActive }/>
            <Credentials/>
            <Projects/>
            <Contact/>
          </>
        }
      </div>
    </>
  );
}

export default App;
