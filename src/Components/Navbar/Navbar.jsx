import './Navbar.scss';
import logo from '../../assets/logo.svg'
import closeIcon from '../../assets/icons/close-icon.svg'
import menuIcon from '../../assets/icons/menu-icon.svg'
import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion';
import React, { useState } from 'react';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const location = useLocation();

    const toggleMobileMenu = () => {
        setIsMobile(!isMobile);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
            className="navbar">
            <div className="navbar__container">
                {/* Logo */}
                <div className="navbar__logo">
                    <NavLink to="/">
                        <img src={logo} alt="" />
                    </NavLink>
                </div>
                {/* Navigation links */}
                <div className={`navbar__menu ${isMobile ? 'active' : ''}`}>
                    <NavLink
                        to="/"
                        onClick={() => setIsMobile(false)}
                        className={
                            location.pathname === '/' || location.pathname === '/case-study'
                                ? 'navbar__link navbar__link--active'
                                : 'navbar__link'
                        }
                    >
                        Case Study
                    </NavLink>
                    <NavLink
                        to="/about-me"
                        onClick={() => setIsMobile(false)}
                        className={({ isActive }) => (isActive ? 'navbar__link navbar__link--active' : 'navbar__link')}
                    >
                        About Me
                    </NavLink>
                </div>
                <div className="navbar__icon" onClick={toggleMobileMenu}>
                    <img src={isMobile ? closeIcon : menuIcon} alt="" />
                    {/* Hamburger icon */}
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar