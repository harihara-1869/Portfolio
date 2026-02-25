import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './Home.css';

function Home() {
    const typedRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: [
                'Full Stack Developer',
                'Student',
                'Low Level Design Enthusiast'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 1500,
            loop: true,
        });

        return () => typed.destroy();
    }, []);

    return (
        <section id="home" className="home-section">
            <div className="container">
                <div className="home-content">
                    <div className="home-text">
                        <h3 className="greeting">Hi There! 👋</h3>
                        <h1 className="name">
                            I&apos;M <span className="highlight">P R Hari Hara Sai Pratham</span>
                        </h1>

                        <div className="typed-container">
                            <span className="typed-prefix">I am a </span>
                            <span className="typed-text" ref={typedRef}></span>
                        </div>

                        <div className="social-links">
                            <a href="https://github.com/harihara-1869" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/hari-hara-1869nice" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaLinkedinIn />
                            </a>
                            {/* <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaTwitter />
                            </a> */}
                        </div>
                    </div>

                    <div className="home-image">
                        <img src="/home_pic.png" alt="Avatar" />
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <span>Scroll Down</span>
            </div>
        </section>
    );
}

export default Home;
