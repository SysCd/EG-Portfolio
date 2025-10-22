import { FaGithub } from "react-icons/fa";

function MyAbout() {
  return (
    <div>
      <section id="about">
        <h2>About Me</h2>
        <p>
          👋 Hi, I’m Erik! I’m a <strong>Backend Software Engineer</strong>{" "}
          based in London, focused on building reliable and scalable
          applications with
          <strong> Java</strong> and <strong>Spring Boot</strong>. I enjoy
          designing APIs, writing clean and maintainable code, and working with
          tools like
          <strong> Docker</strong> and <strong>GitHub Actions</strong> to
          streamline development and deployment. I also have hands-on experience
          with
          <strong> cloud technologies</strong> such as <strong>AWS</strong> and{" "}
          <strong>Terraform </strong>from personal projects.
        </p>
        <a
          href="https://github.com/Syscd"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-block", marginTop: "10px" }}
        >
          <FaGithub size={50} color="black" />
        </a>
      </section>
    </div>
  );
}

export default MyAbout;
