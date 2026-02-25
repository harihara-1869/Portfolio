import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, FaHeart } from 'react-icons/fa';
import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-left">
                        <h3 className="footer-logo">harihara-1869.dev</h3>
                        <p>Thank you for visiting my portfolio!</p>
                    </div>

                    <div className="footer-social">
                        <a href="https://github.com/harihara-1869" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/hari-hara-1869nice" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaLinkedinIn />
                        </a>
                        {/* <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaTwitter />
                        </a> */}
                        <a href="https://www.instagram.com/harihara_1869/" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaInstagram />
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>
                        Designed and Developed by{' '}
                        <span className="highlight">P R Hari Hara Sai Pratham</span>
                    </p>
                    <p>
                        Copyright © {currentYear} | Made with <FaHeart className="heart" />
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
