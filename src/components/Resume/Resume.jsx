import { FaDownload, FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import './Resume.css';

function Resume() {
    /* =============================================
       EDIT YOUR EXPERIENCE HERE
       ============================================= */
    const experience = [
        {
            title: 'Member',
            company: 'Team Chimera',
            period: '2024 - Present',
            description: 'I am a member of Team Chimera, a student EV racing club at R.V. College of Engineering.',
        },
        {
            title: 'Member',
            company: 'Project Jatayu',
            period: '2024 - Present',
            description: 'I am a member of Project Jatayu, a student drone club at R.V. College of Engineering.',
        },
    ];

    const education = [
        {
            degree: 'B.E in Computer Science and Engineering',
            institution: 'R.V. College of Engineering',
            period: '2024 - 2028',
            description: 'CGPA: 9.25',
        },
        {
            degree: 'PUC',
            institution: 'PES PU College',
            period: '2021 - 2023',
            description: 'Percentage(Core Subjects): 85%',
        },
    ];

    const skills = [
        { name: 'JavaScript / TypeScript', level: 90 },
        { name: 'Node.js / Express', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'Git / DevOps', level: 75 },
        { name: 'React', level: 70 },
        { name: 'MongoDB / PostgreSQL', level: 70 },
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
