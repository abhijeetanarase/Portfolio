import About from "./Components/About";
import Contact from "./Components/Contact";
import CustomCursor from "./Components/CustomCursor";
import Experiences from "./Components/Experiences";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import "./Global.css";

function App() {
  return (
    <div id="home" className="relative ">
      <Navbar />
      <Home />
      <About />
      <Experiences/>
      <Projects />
      <Contact />
      <Footer />
      <CustomCursor />
    </div>
  );
}

export default App;
