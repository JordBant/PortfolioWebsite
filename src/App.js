import Credentials from "./components/routes/Credentials/credentials-page-component";
import './App.scss'
import About from "./components/routes/About/about-page-component";

const App = () => {
  return (
    <div className="App">
      <About/>
      <Credentials/>
    </div>
  );
}

export default App;
