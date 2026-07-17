import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiGit, DiCss3, DiHtml5, } from 'react-icons/di';
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiFirebase, SiExpress, SiFlutter,  SiDart,  SiEspressif,  SiQemu, SiCplusplus, SiC, } from 'react-icons/si';
import './About.css';

function About() {
    const techStack = [
        { icon: <DiJavascript1 />, name: 'JavaScript' },
        { icon: <DiReact />, name: 'React' },
        { icon: <DiNodejs />, name: 'Node.js' },
        { icon: <DiMongodb />, name: 'MongoDB' },
        { icon: <DiPython />, name: 'Python' },
        { icon: <SiTailwindcss />, name: 'Tailwind' },
        { icon: <DiGit />, name: 'Git' },
        { icon: <SiExpress />, name: 'Express' },
        { icon: <DiCss3 />, name: 'CSS' },
        { icon: <DiHtml5 />, name: 'HTML' },
        { icon: <SiC />, name: "C" },
        { icon: <SiCplusplus />, name: "C++" },
        { icon: <SiFlutter />, name: "Flutter" },
        { icon: <SiDart />, name: "Dart" },
        { icon: <SiEspressif />, name: "ESP-IDF" },
        { icon: <SiQemu />, name: "QEMU" },
    ];

    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="section-title">
                    <h2>Know Who <span className="highlight">I AM</span></h2>
                </div>

                <div className="about-content">
                    <div className="about-text">
                        <p>
                            Hi Everyone, I am <span className="highlight">P R Hari Hara Sai Pratham</span> from <span className="highlight">Bengaluru, India</span>.
                        </p>
                        <p>
                            I'm a <span className="highlight">2nd year Computer Science and Engineering</span> student at <span className="highlight">R.V. College of Engineering</span> who enjoys building software across the stack—from full-stack web applications to embedded systems.
                        </p>
                        <p>
                            Right now, I'm building an NFC-based mutual authentication system using <span className="highlight">ESP-IDF</span>, <span className="highlight">PN532</span>, and <span className="highlight">Flutter</span>. I'm particularly interested in systems programming, embedded development, cryptography, and writing efficient, reliable software.
                        </p>
                        <p>
                            Apart from coding, some other activities that I love to do are:
                        </p>

                        <ul className="about-list">
                            <li>🎮 Playing Games</li>
                            <li>📺 Binge Watching</li>
                            <li>✈️ Travelling</li>
                        </ul>

                        <p className="quote">
                            &quot;Strive to build things that make a difference!&quot; 🚀
                        </p>
                    </div>

                    <div className="about-image">
                        <img src="/about_me_pic.jpg" alt="Profile" />
                    </div>
                </div>

                <div className="tech-stack">
                    <h3>Professional <span className="highlight">Skillset</span></h3>
                    <div className="tech-icons">
                        {techStack.map((tech, index) => (
                            <div key={index} className="tech-icon" title={tech.name}>
                                {tech.icon}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
