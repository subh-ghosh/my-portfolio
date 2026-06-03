import SectionLabel from './SectionLabel';
import RollingText from './RollingText';
import Marquee from './Marquee';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';
import './Projects.css';

const projects = [
  { name: 'Sonder Goods', num: '01', category: 'Branding', size: 'large' },
  { name: 'Halo Wear', num: '02', category: 'Web Design', size: 'small' },
  { name: 'Lucent Lab', num: '03', category: 'Creative Direction', size: 'medium' },
  { name: 'Arc & Bloom', num: '04', category: 'Identity Design', size: 'large' },
  { name: 'Atelier Nara', num: '05', category: 'Portfolio Site', size: 'large' },
];

const gradients = [
  'linear-gradient(135deg, #0a1628 0%, #1a2a4a 50%, #0a1628 100%)',
  'linear-gradient(135deg, #1a0a0a 0%, #3a1a1a 50%, #1a0a0a 100%)',
  'linear-gradient(135deg, #0a0a0a 0%, #2a2a2a 50%, #0a0a0a 100%)',
  'linear-gradient(135deg, #1a0a10 0%, #3a1a2a 50%, #1a0a10 100%)',
  'linear-gradient(135deg, #0a1a15 0%, #1a3a2a 50%, #0a1a15 100%)',
];

export default function Projects() {
  const headerRef = useScrollReveal();
  const gridRef = useStaggerReveal(0.1, 100);

  return (
    <section className="projects" id="projects">
      <div className="projects__inner">
        <SectionLabel
          left="© Featured Projects プロジェクト"
          center="(WDX® — 03)"
          right="Creative Development"
        />
        <div className="projects__header reveal" ref={headerRef}>
          <Marquee items={['Featured Works©']} variant="giant" speed={20} />
          <p className="projects__desc">
            Every project is a chance to blend design and development, shaping bold interactive ideas into sleek digital realities — built with intent, speed, and visual clarity that attracts lot of peoples.
          </p>
          <RollingText text="SEE WORKS" href="#projects" className="rolling-text--cta" />
        </div>
        <div className="projects__grid" ref={gridRef}>
          {projects.map((p, i) => (
            <article key={p.num} className={`project-card project-card--${i % 2 === 0 ? 'large' : 'small'} stagger-item`}>
              <div className="project-card__image" style={{ background: gradients[i] }}>
                <div className="project-card__overlay">
                  <span className="project-card__category">{p.category}</span>
                </div>
                <div className="project-card__placeholder">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                  </svg>
                </div>
              </div>
              <div className="project-card__info">
                <span className="project-card__name">{p.name}</span>
                <span className="project-card__num">({p.num})</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
