import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

function Projects() {
    const projects = [
        {
            title: 'Leision Lens - AI Retinopathy Screening',
            description: 'An AI-powered diabetic retinopathy screening platform built with EfficientNet-B4, featuring Grad-CAM explainability and lesion segmentation with an FPN. I contributed the Flask application integration and cross-dataset verification.',
            image: '/leision_lens.svg',
            tags: ['PyTorch', 'EfficientNet-B4', 'Flask', 'React', 'Grad-CAM', 'FPN'],
            github: 'https://github.com/harihara-1869/leision_lens/',
            demo: '',
        },
        {
            title: 'Dark Web Leak Detection System',
            description: 'An AI-powered dark web monitoring pipeline with asynchronous Tor-based crawling, LLM-driven threat classification, regex-based IOC extraction, and automated file analysis, surfaced through a Flask dashboard. Containerized with Docker, with rate-limit handling and concurrent task management.',
            image: '/thws_aiDark.png',
            tags: ['Python', 'Flask', 'asyncio', 'aiohttp', 'Tor', 'Docker', 'LLMs'],
            github: 'https://github.com/harihara-1869/AIDarkLeak',
            demo: '',
        },
        {
            title: 'Secure NFC Smart Lock',
            description: 'An end-to-end encrypted authentication system for an NFC smart lock, implementing mutual authentication and secure session establishment with Ed25519, X25519, AES-256, and HKDF, backed by an ESP-IDF firmware and Flutter client over ISO 14443-A / ISO-DEP.',
            image: '/smartlock_firmware.png',
            tags: ['ESP-IDF', 'Flutter', 'Cryptography', 'ISO 14443-A', 'ISO-DEP', 'Ed25519', 'X25519', 'AES-256'],
            github: 'https://github.com/harihara-1869/smart_lock_firmware',
            demo: '',
        },
        {
            title: 'EV Battery Management System Firmware',
            description: 'Firmware for an APARD32690 (MAX32690 + ADBMS6830) based battery management system for a Formula EV, covering battery-monitoring communication, real-time embedded software, and vehicle CAN interfacing using FreeRTOS, isoSPI, ADC, and CAN 2.0A.',
            image: '/bms_pic.png',
            tags: ['C', 'FreeRTOS', 'isoSPI', 'ADC', 'CAN 2.0A', 'MAX32690', 'ADBMS6830'],
            github: 'https://github.com/harihara-1869/Team_Chimera_Firmware',
            demo: '',
        },
        {
            title: 'Kinetic Industrial - Motor Control Dashboard',
            description: 'A real-time industrial IoT dashboard for intelligent motor monitoring and control, featuring live telemetry visualization, device management, predictive health diagnostics, remote terminal access, and seamless device provisioning through Azure IoT Hub.',
            image: '/iot_dashboard.png',
            tags: ['Next.js', 'React', 'Supabase', 'Azure IoT Hub', 'Tailwind CSS'],
            github: 'https://github.com/harihara-1869/iot-dashboard',
            demo: 'https://iot-dashboard-alpha-smoky.vercel.app',
        },
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <div className="section-title">
                    <h2>My Recent <span className="highlight">Works</span></h2>
                    <p className="section-subtitle">Here are a few projects I&apos;ve worked on recently.</p>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card card">
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

                                <div className="project-links">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                            <FaGithub /> GitHub
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link demo">
                                            <FaExternalLinkAlt /> Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
