import SectionLabel from './SectionLabel';
import RollingText from './RollingText';
import Marquee from './Marquee';
import { useStaggerReveal } from '../hooks/useScrollReveal';
import './Footer.css';

export default function Footer() {
  const ref = useStaggerReveal(0.1, 100);

  return (
    <footer className="footer" id="footer">
      <div className="footer__inner">
        <SectionLabel
          left="© Final Section クロージング"
          center="(WDX® — 12)"
          right="Studio Wrap"
        />
        <Marquee
          items={['Independent', 'Overview', 'Multidisciplinary', 'Focused']}
          variant="dark"
          speed={25}
        />
        <div className="footer__content">
          <p className="footer__bio">
            I build expressive, performance-driven websites by blending clean design and native development inside Framer to help creative teams and modern brands stand out with intention.
          </p>
          <RollingText text="BACK TO TOP" href="#top" className="rolling-text--cta" />
        </div>
        <div className="footer__bottom" ref={ref}>
          <div className="footer__col stagger-item">
            <span className="footer__col-title">Quick Links</span>
            <div className="footer__links">
              <RollingText text="Home" href="#top" className="rolling-text--footer" />
              <RollingText text="Gallery" href="#projects" className="rolling-text--footer" />
              <RollingText text="Work" href="#capabilities" className="rolling-text--footer" />
              <RollingText text="Contact" href="#footer" className="rolling-text--footer" />
            </div>
          </div>
          <div className="footer__col stagger-item">
            <span className="footer__col-title">Networks</span>
            <div className="footer__links">
              <RollingText text="Instagram" href="https://instagram.com" className="rolling-text--footer" />
              <RollingText text="Dribbble" href="https://dribbble.com" className="rolling-text--footer" />
              <RollingText text="GitHub" href="https://github.com" className="rolling-text--footer" />
              <RollingText text="Twitter" href="https://twitter.com" className="rolling-text--footer" />
            </div>
          </div>
          <div className="footer__col footer__col--right stagger-item">
            <span className="footer__copyright">©2025</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
