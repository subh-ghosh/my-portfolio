import SectionLabel from './SectionLabel';
import RollingText from './RollingText';
import MagneticButton from './MagneticButton';
import { personalInfo } from '../content/portfolioContent';
import { useStaggerReveal } from '../hooks/useScrollReveal';
import './Footer.css';

export default function Footer() {
  const ref = useStaggerReveal(0.1, 100);

  return (
    <footer className="footer" id="contact">
      <div className="footer__inner">
        <SectionLabel
          left="Contact"
          right="Let’s Connect"
        />
        <div className="footer__content">
          <p className="footer__bio">
            Interested in backend engineering, full stack roles, or AI-enabled product work. Reach out for opportunities, collaborations, or technical conversations.
          </p>
          
          <div className="footer__massive-cta">
            <MagneticButton>
              <a href={`mailto:${personalInfo.email}`} className="footer__massive-email">
                {personalInfo.email}
              </a>
            </MagneticButton>
            <div className="footer__status-badge">
              <span className="footer__status-dot"></span>
              Available for Work
            </div>
          </div>
          
          <RollingText text="BACK TO TOP" href="#top" className="rolling-text--cta" />
        </div>
        <div className="footer__bottom" ref={ref}>
          <div className="footer__col stagger-item">
            <span className="footer__col-title">Quick Links</span>
            <div className="footer__links">
              <RollingText text="Home" href="#top" className="rolling-text--footer" />
              <RollingText text="Projects" href="#projects" className="rolling-text--footer" />
              <RollingText text="Skills" href="#skills" className="rolling-text--footer" />
              <RollingText text="Education" href="#education" className="rolling-text--footer" />
            </div>
          </div>
          <div className="footer__col stagger-item">
            <span className="footer__col-title">Profiles</span>
            <div className="footer__links">
              <RollingText text="LinkedIn" href={personalInfo.linkedin} className="rolling-text--footer" />
              <RollingText text="GitHub" href={personalInfo.github} className="rolling-text--footer" />
              <RollingText text="Email" href={`mailto:${personalInfo.email}`} className="rolling-text--footer" />
              <RollingText text="Phone" href={`tel:${personalInfo.phone}`} className="rolling-text--footer" />
            </div>
          </div>
          <div className="footer__col footer__col--right stagger-item">
            <span className="footer__copyright">©{new Date().getFullYear()} {personalInfo.name}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
