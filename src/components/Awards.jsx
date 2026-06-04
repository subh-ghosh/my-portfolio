import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel';
import { achievements } from '../content/portfolioContent';
import './Awards.css';

export default function Awards() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
  };

  return (
    <section className="awards" id="awards">
      <div className="awards__inner">
        <SectionLabel
          left="Achievements"
          right="Certifications & Rankings"
        />
        <motion.div 
          className="awards__list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {achievements.map((a, i) => (
            <motion.div key={i} className="award-item" variants={itemVariants}>
              <span className="award-item__count">{a.count}</span>
              <div className="award-item__info">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                  <div style={{ flex: '1 1 min-content' }}>
                    <h3 className="award-item__org">
                      {a.url ? <a href={a.url} target="_blank" rel="noreferrer">{a.org}</a> : a.org}
                    </h3>
                    <p className="award-item__desc">{a.desc}</p>
                  </div>
                  {a.url && (
                    <a href={a.url} target="_blank" rel="noreferrer" className="award-item__btn">
                      View Certificate
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
