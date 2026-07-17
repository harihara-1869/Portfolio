import { useParams, Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import projects from '../../data/projects';
import './ProjectDetail.css';

function BuildBlock({ block }) {
    if (block.type === 'image') {
        return (
            <figure className="build-image">
                <img src={block.src} alt={block.caption || 'Project screenshot'} />
                {block.caption && <figcaption>{block.caption}</figcaption>}
            </figure>
        );
    }
    if (block.type === 'code') {
        return (
            <pre className="build-code">
                <code>{block.code}</code>
            </pre>
        );
    }
    return <p>{block.content}</p>;
}

function ProjectDetail() {
    const { slug } = useParams();
    const projectIndex = projects.findIndex((p) => p.slug === slug);
    const project = projects[projectIndex];

    if (!project) {
        return (
            <div className="project-detail-page">
                <Navbar />
                <div className="project-not-found">
                    <h2>Project Not Found</h2>
                    <p>The project you&apos;re looking for doesn&apos;t exist.</p>
                    <Link to="/" className="btn btn-primary">
                        <FaArrowLeft /> Back to Home
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
    const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

    return (
        <div className="project-detail-page">
            <Navbar />

            {/* ===== HERO ===== */}
            <section className="pd-hero">
                <div className="container">
                    <Link to="/#projects" className="pd-back">
                        <FaArrowLeft /> All Projects
                    </Link>

                    <div className="pd-hero-layout">
                        <div className="pd-hero-text">
                            <h1>{project.title}</h1>
                            <p className="pd-oneliner">{project.oneliner}</p>
                            <div className="pd-tags">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="tag">{tag}</span>
                                ))}
                            </div>
                            <div className="pd-hero-links">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                    <FaGithub /> GitHub
                                </a>
                                {project.demo && (
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link demo">
                                        <FaExternalLinkAlt /> Live
                                    </a>
                                )}
                            </div>
                        </div>
                        <div className="pd-hero-image">
                            <img src={project.image} alt={project.title} />
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== BACKSTORY ===== */}
            <section className="pd-section">
                <div className="pd-narrow">
                    <h2 className="pd-heading">The Backstory</h2>
                    {project.backstory.map((para, i) => (
                        <p key={i}>{para}</p>
                    ))}
                </div>
            </section>

            {/* ===== BUILDING IT ===== */}
            <section className="pd-section">
                <div className="pd-narrow">
                    <h2 className="pd-heading">Building It</h2>
                    <div className="pd-build">
                        {project.buildStory.map((block, i) => (
                            <BuildBlock key={i} block={block} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== HIGHLIGHTS ===== */}
            <section className="pd-section pd-highlights-section">
                <div className="pd-narrow">
                    <h2 className="pd-heading">The Interesting Bits</h2>
                    <div className="pd-highlights-grid">
                        {project.highlights.map((h, i) => (
                            <div key={i} className="pd-callout card">
                                <h3>{h.title}</h3>
                                <p>{h.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== WHAT I'D DO DIFFERENTLY ===== */}
            <section className="pd-section">
                <div className="pd-narrow">
                    <h2 className="pd-heading">What I&apos;d Do Differently</h2>
                    <ul className="pd-differently">
                        {project.differently.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ===== OUTCOME ===== */}
            <section className="pd-section">
                <div className="pd-narrow">
                    <h2 className="pd-heading">Outcome</h2>
                    <p>{project.outcome}</p>
                </div>
            </section>

            {/* ===== PREV / NEXT ===== */}
            <nav className="pd-nav">
                <div className="container pd-nav-grid">
                    {prevProject ? (
                        <Link to={`/projects/${prevProject.slug}`} className="pd-nav-link pd-nav-prev">
                            <span className="pd-nav-label"><FaArrowLeft /> Previous</span>
                            <span className="pd-nav-title">{prevProject.title}</span>
                        </Link>
                    ) : <div />}
                    {nextProject ? (
                        <Link to={`/projects/${nextProject.slug}`} className="pd-nav-link pd-nav-next">
                            <span className="pd-nav-label">Next <FaArrowRight /></span>
                            <span className="pd-nav-title">{nextProject.title}</span>
                        </Link>
                    ) : <div />}
                </div>
            </nav>

            <Footer />
        </div>
    );
}

export default ProjectDetail;
