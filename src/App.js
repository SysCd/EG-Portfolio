import "./index.css";
import MyAbout from "./components/About";
import MyContact from "./components/Contact";
import MyNavbar from "./components/Navbar";
import MyProjects from "./components/Projects";
import MySkills from "./components/Skills";
import TypewriterEffect from "./components/ScrollAnimations";
import ParticlesBackground from "./components/ParticlesBackground";

import ReactLogo from "./Images/react.svg";
import JavaScriptLogo from "./Images/javascript.svg";
import CSSLogo from "./Images/css3.svg";
import HTMLLogo from "./Images/html5.svg";
import AntLogo from "./Images/antdesign.svg";

const projects = [
  {
    id: 1,
    title: "Backend Development Project",
    description:
      "Currently developing a backend application using Java and Spring Boot, focusing on learning key backend concepts such as REST API design, data persistence, and service architecture.",
    category: "Software Engineering",
    date: "Oct 2025 – Present",
  },
];

function App() {
  return (
    <div>
      <ParticlesBackground /> {/* Particle background component */}
      <header>
        <TypewriterEffect />
        <MyNavbar />
      </header>
      <main>
        <MyAbout />
        <MySkills />
        <MyProjects projects={projects} />
        <MyContact />
      </main>
      <footer>
        <div className="tech-logos">
          <img src={ReactLogo} alt="React" title="React" />
          <img src={JavaScriptLogo} alt="JavaScript" title="JavaScript" />
          <img src={CSSLogo} alt="CSS" title="CSS" />
          <img src={HTMLLogo} alt="HTML" title="HTML" />
          <img src={AntLogo} alt="ANT" title="ANT Design" />
        </div>
        <p>&copy; Erik Gombar Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
