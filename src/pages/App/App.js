import Navbar from "../../components/Navbar/Navbar";
import About from "../../components/About/About";
import Home from "../Home/Home"
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";
import Contact from "../../components/Contact/Contact";


function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      <About/>
      <Skills/>
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
