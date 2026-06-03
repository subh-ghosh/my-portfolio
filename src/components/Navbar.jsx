import RollingText from './RollingText';
import { motion } from 'framer-motion';
import { personalInfo } from '../content/portfolioContent';
import MagneticButton from './MagneticButton';
import './Navbar.css';

export default function Navbar() {
  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="navbar__inner">
        <a href="#top" className="navbar__logo">
          {personalInfo.name}
        </a>
        <div className="navbar__center">
          <span className="navbar__label">Quick Links</span>
          <div className="navbar__links">
            <RollingText text="Home" href="#top" className="rolling-text--nav" />
            <span className="navbar__sep">,</span>
            <RollingText text="Projects" href="#projects" className="rolling-text--nav" />
            <span className="navbar__sep">,</span>
            <RollingText text="Skills" href="#skills" className="rolling-text--nav" />
            <span className="navbar__sep">,</span>
            <RollingText text="Education" href="#education" className="rolling-text--nav" />
            <span className="navbar__sep">,</span>
            <RollingText text="Contact" href="#contact" className="rolling-text--nav" />
          </div>
        </div>
        <div className="navbar__right">
          <div className="navbar__info">
            <span className="navbar__location">{personalInfo.location}</span>
            <span className="navbar__role">{personalInfo.title}</span>
          </div>
          <MagneticButton>
            <a href="/Resume.pdf" download className="navbar__resume-btn">
              Resume
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '6px'}}>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
          </MagneticButton>
        </div>
      </div>
    </motion.nav>
  );
}
