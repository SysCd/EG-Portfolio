import { FaGithub } from "react-icons/fa";

function MyAbout() {
  return (
    <div>
      <section id="about">
        <h2>About Me</h2>
        <p>
          👋 Hi, I’m Erik! Based in London, I’m a passionate Cloud & DevOps
          Engineer with a strong foundation in systems engineering. I specialize
          in AWS, Azure, Docker, Kubernetes, Terraform, and tools like Windows
          Server, VMware, and Linux, delivering efficient, secure cloud and
          infrastructure solutions. I love tackling complex challenges with
          creativity and am always learning to drive innovative,
          high-performance results.{" "}
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
