import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiGit } from 'react-icons/di';
import { SiTailwindcss, SiExpress, SiFlutter, SiDart, SiEspressif, SiCplusplus, SiC } from 'react-icons/si';
import './About.css';

function About() {
    const techStack = [
        { icon: <SiC />, name: 'C' },
        { icon: <SiCplusplus />, name: 'C++' },
        { icon: <SiEspressif />, name: 'ESP-IDF' },
        { icon: <DiPython />, name: 'Python' },
        { icon: <SiFlutter />, name: 'Flutter' },
        { icon: <SiDart />, name: 'Dart' },
        { icon: <DiJavascript1 />, name: 'JavaScript' },
        { icon: <DiReact />, name: 'React' },
        { icon: <DiNodejs />, name: 'Node.js' },
        { icon: <SiExpress />, name: 'Express' },
        { icon: <DiMongodb />, name: 'MongoDB' },
        { icon: <SiTailwindcss />, name: 'Tailwind' },
        { icon: <DiGit />, name: 'Git' },
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
                            I'm a <span className="highlight">5th semester Computer Science and Engineering</span> student at <span className="highlight">R.V. College of Engineering</span> with a <span className="highlight">9.33 CGPA</span>, who enjoys building software across the stack—from full-stack web applications to embedded systems.
                        </p>
                        <p>
                            Right now, I'm building an end-to-end encrypted NFC smart lock, implementing mutual authentication and secure session establishment with <span className="highlight">Ed25519</span>, <span className="highlight">X25519</span>, and <span className="highlight">AES-256-GCM</span>, with an <span className="highlight">ESP-IDF</span> firmware and <span className="highlight">Flutter</span> client. I'm particularly interested in systems programming, embedded development, cryptography, and writing efficient, reliable software.
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
