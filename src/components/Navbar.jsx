import RollingText from './RollingText';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar" id="top">
      <div className="navbar__inner">
        <a href="#top" className="navbar__logo">Palmer®</a>
        <div className="navbar__center">
          <span className="navbar__label">Quick Links</span>
          <div className="navbar__links">
            <RollingText text="Home" href="#top" className="rolling-text--nav" />
            <span className="navbar__sep">,</span>
            <RollingText text="Gallery" href="#projects" className="rolling-text--nav" />
            <span className="navbar__sep">,</span>
            <RollingText text="Work" href="#capabilities" className="rolling-text--nav" />
            <span className="navbar__sep">,</span>
            <RollingText text="Contact" href="#footer" className="rolling-text--nav" />
          </div>
        </div>
        <div className="navbar__right">
          <span className="navbar__location">Based in Tokyo 東京</span>
          <span className="navbar__role">Art Director + Framer Developer</span>
        </div>
      </div>
    </nav>
  );
}
