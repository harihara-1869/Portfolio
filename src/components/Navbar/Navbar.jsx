import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { AiOutlineUser, AiOutlineFundProjectionScreen, AiOutlineFile } from 'react-icons/ai';
import { CgGitFork } from 'react-icons/cg';
import { FaStar } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const navHref = (section) => isHome ? `#${section}` : `/#${section}`;

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                {/* =============================================
            EDIT YOUR NAME/LOGO HERE
            ============================================= */}
                <Link to="/" className="navbar-logo">
                    harihara-1869.dev
                </Link>

                <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <a href={navHref('about')} className="nav-link" onClick={closeMenu}>
                            <AiOutlineUser /> About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href={navHref('projects')} className="nav-link" onClick={closeMenu}>
                            <AiOutlineFundProjectionScreen /> Projects
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href={navHref('resume')} className="nav-link" onClick={closeMenu}>
                            <AiOutlineFile /> Resume
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="https://github.com/harihara-1869"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="nav-link github-btn"
                        >
                            <CgGitFork /> <FaStar />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
