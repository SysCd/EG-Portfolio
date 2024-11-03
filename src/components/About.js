import { FaGithub } from 'react-icons/fa';

function MyAbout() {
    return (
        <div>
            <section id="about">
                <h2>About Me</h2>
                <p>
                    👋 Hi, I’m Erik! Based in London, I’m a dedicated software engineer and tech enthusiast with a knack for turning complex challenges into seamless, high-performance solutions. I’m passionate about staying on the cutting edge with modern tech stacks and bringing a high level of precision and creativity to each project. Driven by curiosity and a commitment to impactful work, I’m constantly refining my expertise to deliver innovative, efficient, and scalable solutions.
                </p>
                                <a href="https://github.com/Syscd" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '10px' }}>
                    <FaGithub size={50} color="black" />
                </a>
            </section>
        </div>
    );
}

export default MyAbout;
