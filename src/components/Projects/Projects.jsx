import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

function Projects() {
    const projects = [
        {
            title: 'Talkio - The Chat App',
            description: 'A simple chat application, secured with JWT tokens and real time functionallity using Socket.io. Completly hosted on my own server setup by me.',
            image: '/talkio_pic.png',
            tags: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'JWT', 'Express', 'Tailwind CSS'],
            github: 'https://github.com/harihara-1869/Chat-App',
            demo: '',
        },
        {
            title: 'Kinetic Industrial - Motor Control Dashboard',
            description: 'A real-time industrial IoT dashboard for intelligent motor monitoring and control, featuring live telemetry visualization, device management, predictive health diagnostics, remote terminal access, and seamless device provisioning through Azure IoT Hub.',
            image: '/iot_dashboard.png',
            tags: ['Next.js 16', 'React 19', 'Supabase DB', 'Supabase Auth', 'Azure IoT Hub', 'Vitest', 'Tailwind CSS'],
            github: 'https://github.com/harihara-1869/iot-dashboard',
            demo: 'https://iot-dashboard-alpha-smoky.vercel.app',
        },
        {
            title: 'NILM Motor Load Classifier',
            description: 'Implemented a pre-trained Random Forest classifier on an ESP32 for predictive maintenance of NEMA 17 stepper motors. The firmware performs real-time motor state classification and securely publishes predictions to Azure IoT Hub over MQTT/TLS.',
            image: '/nilm_model.png',
            tags: ['Python', 'C', 'Azure IoT Hub', 'ESP IDF'],
            github: 'https://github.com/Nithin-eashwar/IotEl-ML-pipeline',
            demo: '',
        },
        {
            title: 'AI-Based Early Detection of Data Leaks',
            description: 'Built in collaboration with THWS, this team project is an AI-powered dark web monitoring tool that uses Tor to scrape .onion sources, extract IOCs, classify threats, and generate intelligence summaries.',
            image: '/thws_aiDark.png',
            tags: ['Tor', 'AsyncIO', 'Python', 'Cyber Security', 'AI', 'Leak Intelligence'],
            github: 'https://github.com/pramath6095/dark_web_leak_ai',
            demo: '',
        },
        {
            title: 'Food Compliance Checker',
            description: 'A food compliance checker using openfoodfacts.org database for compliance check. Supports camera as well as name based search. Made for my biosafety project.',
            image: '/food_pic.png',
            tags: ['Node.js', 'Express.js', 'OpenFoodFacts API', 'React.js'],
            github: 'https://github.com/harihara-1869/Biosafety_EL',
            demo: '',
        },
        {
            title: 'BMS Algorithm Development',
            description: 'Developing firmware for Electric Vehicle systems including Battery Management System and Driver Assistance System for Team Chimera.',
            image: '/bms_pic.png',
            tags: ['C', 'Matlab', 'Simulink'],
            github: 'https://github.com/harihara-1869/Team_Chimera_Firmware',
            demo: '',
        },
        {
            title: 'Car Charge Monitor',
            description: 'A car charge monitor using Enphase API to conitneously monitor car charging and trigger a notification and email alert.',
            image: '/car_charge_pic.png',
            tags: ['Python', 'Enphase API', 'Gmail API'],
            github: 'https://github.com/harihara-1869/Car_Charger_Monitor',
            demo: '',
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
                                {/* Replace emoji with actual image */}
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
