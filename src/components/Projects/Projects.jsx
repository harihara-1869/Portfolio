import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import projects from '../../data/projects';
import './Projects.css';

function Projects() {
    const handleLinkClick = (e) => {
        e.stopPropagation();
    };

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <div className="section-title">
                    <h2>My Recent <span className="highlight">Works</span></h2>
                    <p className="section-subtitle">Here are a few projects I&apos;ve worked on recently.</p>
                </div>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <Link
                            key={project.id}
                            to={`/projects/${project.slug}`}
                            className="project-card card"
                        >
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                            </div>

                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                <div className="project-tags">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="tag">{tag}</span>
                                    ))}
                                </div>

                                <div className="project-links" onClick={handleLinkClick}>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                        <FaGithub /> GitHub
                                    </a>
                                    {project.demo && (
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link demo">
                                            <FaExternalLinkAlt /> Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
