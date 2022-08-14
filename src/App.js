import Credentials from "./components/routes/Credentials/credentials-page-component";
import './App.scss'
import About from "./components/routes/About/about-page-component";
import NavBar from "./components/Nav/nav-bar/nav-bar-component";
import Projects from "./components/routes/Projects/projects";
import Contact from "./components/routes/Contact/contact";
import Loader from "./components/Loader/loader-component";

const App = () => {
  return (
    <>
      <div className="App">
        <Loader/>
        {/* <NavBar/>
        <About/>
        <Credentials/>
        <Projects/>
        <Contact/> */}
      </div>
    </>
  );
}

export default App;
