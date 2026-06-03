import SectionLabel from './SectionLabel';
import RollingText from './RollingText';
import Marquee from './Marquee';
import { useScrollReveal, useStaggerReveal, useSplitTextReveal, useParallax } from '../hooks/useScrollReveal';
import './About.css';

export default function About() {
  const contentRef = useScrollReveal();
  const headingRef = useSplitTextReveal();
  const logosRef = useStaggerReveal();
  const imageRef = useParallax(0.15);
  
  return (
    <section className="about" id="about">
      <div className="about__inner">
        <SectionLabel
          left="© Curated Interfaces ビジュアル"
          center="(WDX® — 02)"
          right="Digital Designer"
        />
        <div className="about__grid">
          <div className="about__image" ref={imageRef}>
            <div className="about__image-placeholder">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="about__icon">
                <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
          </div>
          <div className="about__content reveal" ref={contentRef}>
            <h2 className="about__heading" ref={headingRef}>
              13+ years™ of digital form, sharp interactions, and relentless creative discipline and effort.
            </h2>
            <RollingText text="CONTACT" href="#footer" className="rolling-text--cta" />
          </div>
        </div>
        <Marquee
          items={['Visual', 'Freelancer', 'Digital Nomad', 'Creative Developer']}
          variant="strip"
          speed={25}
        />
        <div className="about__logos" ref={logosRef}>
          {['Cairo', 'oslo.', 'Chain', 'Manila.', 'Theo'].map((name) => (
            <div key={name} className="about__logo-card stagger-item">
              <span className="about__logo-text">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
