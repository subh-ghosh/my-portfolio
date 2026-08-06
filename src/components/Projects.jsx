import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel';
import RollingText from './RollingText';
import Marquee from './Marquee';
import MagneticButton from './MagneticButton';
import { projects } from '../content/portfolioContent';
import './Projects.css';

const gradients = [
  'linear-gradient(135deg, #0a1628 0%, #1a2a4a 50%, #0a1628 100%)',
  'linear-gradient(135deg, #1a0a0a 0%, #3a1a1a 50%, #1a0a0a 100%)',
  'linear-gradient(135deg, #0a0a0a 0%, #2a2a2a 50%, #0a0a0a 100%)',
  'linear-gradient(135deg, #1a0a10 0%, #3a1a2a 50%, #1a0a10 100%)',
  'linear-gradient(135deg, #0a1a15 0%, #1a3a2a 50%, #0a1a15 100%)',
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 80, damping: 20 } 
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
  };

  return (
    <section className="projects" id="projects">
      <div className="projects__inner">
        <SectionLabel
          left="Featured Projects"
          right="Engineering Work"
        />
        <motion.div 
          className="projects__header"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="projects__title">Selected Projects</h2>
          <p className="projects__desc">
            A focused selection of backend, full stack, AI, and embedded systems work with quantified outcomes, production-minded architecture, and public proof.
          </p>
          <RollingText text="SEE SKILLS" href="#skills" className="rolling-text--cta" />
        </motion.div>
        
        <motion.div 
          style={{ margin: '40px 0', opacity: 0.8 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Marquee
            items={["FEATURED WORKS", "ENGINEERING & ARCHITECTURE"]}
            variant="massive"
            speed={75}
          />
        </motion.div>

        <motion.div 
          className="projects__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((p, i) => (
            <motion.article 
              key={p.num} 
              className="project-card"
              variants={itemVariants}
              onClick={() => window.open(p.liveUrl || p.repoUrl, '_blank', 'noopener,noreferrer')}
            >
              <div 
                className="project-card__visual" 
                style={
                  p.image 
                    ? { 
                        backgroundImage: `url(${p.image})`, 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'top left',
                        backgroundRepeat: 'no-repeat'
                      } 
                    : { background: gradients[i % gradients.length] }
                }
              >
                <div className="project-card__visual-overlay"></div>
              </div>
              <div className="project-card__content">
                <div className="project-card__stack">
                  {p.stack.split(' · ').map(tech => (
                    <span key={tech} className="project-card__tech-badge">{tech}</span>
                  ))}
                </div>

                <p className="project-card__summary" style={{ fontSize: '18px', color: '#fff', marginBottom: '24px' }}>{p.summary}</p>
                
                <div className="project-card__metrics-grid">
                  {p.metrics.map((metric) => {
                    const words = metric.split(' ');
                    const highlight = words[0];
                    const rest = words.slice(1).join(' ');
                    return (
                      <div key={metric} className="project-card__metric-block">
                        <span className="project-card__metric-highlight">{highlight}</span>
                        <span className="project-card__metric-text">{rest}</span>
                      </div>
                    )
                  })}
                </div>

                <div className="project-card__story">
                  <div className="project-card__story-block">
                    <span className="project-card__story-label">Challenge</span>
                    <p>{p.challenge}</p>
                  </div>
                  <div className="project-card__story-block">
                    <span className="project-card__story-label">Impact</span>
                    <p>{p.impact}</p>
                  </div>
                </div>
              </div>
              <div className="project-card__info">
                <div className="project-card__meta">
                  <span className="project-card__name">{p.name}</span>
                  <span className="project-card__category">{p.category}</span>
                  <span className="project-card__num">({p.num})</span>
                </div>
                <div className="project-card__links">
                  {p.liveUrl ? (
                    <MagneticButton>
                      <a href={p.liveUrl} target="_blank" rel="noreferrer" className="project-card__action-btn">Live Demo</a>
                    </MagneticButton>
                  ) : null}
                  {p.repoUrl ? (
                    <MagneticButton>
                      <a href={p.repoUrl} target="_blank" rel="noreferrer" className="project-card__action-btn project-card__action-btn--secondary">Source Code</a>
                    </MagneticButton>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
