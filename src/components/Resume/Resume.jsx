import { FaDownload, FaBriefcase, FaGraduationCap, FaCertificate, FaTrophy } from 'react-icons/fa';
import './Resume.css';

function Resume() {
    const experience = [
        {
            title: 'CS Lead',
            company: 'Team Chimera',
            period: 'Dec 2024 - Present',
            description: 'Developed and optimized the team website backend, integrated Sanity.io CMS, and managed production hosting, deployment, and DNS infrastructure. Leading firmware development for an APARD32690 (MAX32690 + ADBMS6830) based BMS using FreeRTOS, isoSPI, ADC, and CAN 2.0A.',
        },
    ];

    const education = [
        {
            degree: 'B.E in Computer Science and Engineering',
            institution: 'R.V. College of Engineering',
            period: '2024 - 2028',
            description: 'CGPA: 9.33',
        },
        {
            degree: 'PUC',
            institution: 'PES PU College',
            period: '2021 - 2023',
            description: 'Percentage(Core Subjects): 85%',
        },
    ];

    const skills = [
        { name: 'C / C++ / ESP-IDF', level: 90 },
        { name: 'Embedded Systems & Firmware', level: 85 },
        { name: 'Flutter / Dart', level: 85 },
        { name: 'Python', level: 85 },
        { name: 'JavaScript / TypeScript', level: 85 },
        { name: 'MERN Stack', level: 85 },
        { name: 'Git / DevOps', level: 75 },
    ];

    const certifications = [
        { title: 'Python Programming', issuer: 'Harvard University', period: 'Oct 2025' },
        { title: 'Full Stack Web Developer', issuer: 'App Brewery (Udemy)', period: 'Feb 2026' },
        { title: 'Data Science for Engineers', issuer: 'IIT Madras (NPTEL)', period: 'Mar 2026' },
    ];

    const awards = [
        {
            title: 'Road to Poneglyph ’25 — 3rd Place',
            issuer: 'THWS Germany, Coding Club RVCE & Accelerate Club RVCE',
            period: 'Nov 2025',
            description: 'Secured 3rd place in a Germany-collaborative international CTF, competing against global student teams.',
        },
    ];

    return (
        <section id="resume" className="resume-section">
            <div className="container">
                <div className="section-title">
                    <h2>My <span className="highlight">Resume</span></h2>
                </div>
                <div className="resume-download">
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        <FaDownload /> Download CV
                    </a>
                </div>

                <div className="resume-content">
                    {/* Experience */}
                    <div className="resume-column">
                        <h3 className="column-title">
                            <FaBriefcase /> Experience
                        </h3>
                        <div className="timeline">
                            {experience.map((item, index) => (
                                <div key={index} className="timeline-item">
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-content card">
                                        <h4>{item.title}</h4>
                                        <p className="company">{item.company}</p>
                                        <span className="period">{item.period}</span>
                                        <p className="description">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education */}
                    <div className="resume-column">
                        <h3 className="column-title">
                            <FaGraduationCap /> Education
                        </h3>
                        <div className="timeline">
                            {education.map((item, index) => (
                                <div key={index} className="timeline-item">
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-content card">
                                        <h4>{item.degree}</h4>
                                        <p className="company">{item.institution}</p>
                                        <span className="period">{item.period}</span>
                                        <p className="description">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="resume-content">
                    {/* Certifications */}
                    <div className="resume-column">
                        <h3 className="column-title">
                            <FaCertificate /> Certifications
                        </h3>
                        <div className="timeline">
                            {certifications.map((item, index) => (
                                <div key={index} className="timeline-item">
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-content card">
                                        <h4>{item.title}</h4>
                                        <p className="company">{item.issuer}</p>
                                        <span className="period">{item.period}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Awards */}
                    <div className="resume-column">
                        <h3 className="column-title">
                            <FaTrophy /> Awards
                        </h3>
                        <div className="timeline">
                            {awards.map((item, index) => (
                                <div key={index} className="timeline-item">
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-content card">
                                        <h4>{item.title}</h4>
                                        <p className="company">{item.issuer}</p>
                                        <span className="period">{item.period}</span>
                                        <p className="description">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <div className="skills-section">
                    <h3 className="skills-title">Professional <span className="highlight">Skills</span></h3>
                    <div className="skills-grid">
                        {skills.map((skill, index) => (
                            <div key={index} className="skill-item">
                                <div className="skill-info">
                                    <span className="skill-name">{skill.name}</span>
                                    <span className="skill-percent">{skill.level}%</span>
                                </div>
                                <div className="skill-bar">
                                    <div
                                        className="skill-progress"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resume;
