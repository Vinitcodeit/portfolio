import Intro from "./components/Intro/intro";
import Navbar  from "./components/Navbar/navbar";
import Experience from "./components/Experience/experience";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import Conact from "./components/Contact/conact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
     <Navbar />
     <Intro />
     <Experience />
     <Skills />
     <Projects />
     <Conact />
     <Footer />
    </div>
  );
}

export default App;
