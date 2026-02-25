import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiGit, DiCss3, DiHtml5 } from 'react-icons/di';
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiFirebase, SiExpress } from 'react-icons/si';
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
    ];

    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="section-title">
                    <h2>Know Who <span className="highlight">I&apos;M</span></h2>
                </div>

                <div className="about-content">
                    <div className="about-text">
                        <p>
                            Hi Everyone, I am <span className="highlight">P R Hari Hara Sai Pratham</span> from <span className="highlight">Bengaluru, India</span>.
                        </p>
                        <p>
                            I'm a student of <span className="highlight">R.V. College of Engineering</span> majoring in <span className="highlight">Computer Science and Engineering</span>.
                            I love to code and build things. I'm currently learning flutter so that I can build cross platform apps, thinking about extending my chat app
                            with flutter.
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
