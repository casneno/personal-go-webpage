import Navbar from "../../components/Navbar/Navbar";
import About from "../../components/About/About";
import Home from "../Home/Home"
import Contact from "../../components/Contact/Contact";


function App() {
  return (
    <div className='font-myriadpro'>
      <Navbar/>
      <Home />
      <About/>
{/*       <Skills/>
      <Projects /> */}
      <Contact />
    </div>
  );
}

export default App;
