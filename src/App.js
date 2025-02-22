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
    title: "Cloud DevOps Lab – AWS Infrastructure Automation",
    description:
      "A comprehensive cloud project automating infrastructure on AWS using Terraform, Docker, Kubernetes (EKS), GitHub Actions, and monitoring with Prometheus & Grafana. Includes secure IAM roles, VPC setup, CI/CD pipelines, and cost optimization for a scalable, high-performance environment.",
    category: "Cloud & DevOps",
    date: "2023 – Feb 2025",
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
        <p>&copy; Erik Tokar Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
