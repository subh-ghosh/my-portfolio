import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel';
import { skillGroups } from '../content/portfolioContent';
import './Capabilities.css';

export default function Capabilities() {
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
    <section className="capabilities" id="skills">
      <div className="capabilities__inner">
        <SectionLabel
          left="Technical Skills"
          right="Engineering Toolkit"
        />
        <motion.div 
          className="capabilities__heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          <h2 className="capabilities__title">Skills</h2>
        </motion.div>
        <motion.div 
          className="capabilities__list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillGroups.map((s) => (
            <motion.div key={s.num} className="capability-item" variants={itemVariants}>
              <div className="capability-item__left">
                <span className="capability-item__num">{s.num}</span>
                <h3 className="capability-item__title">{s.title}</h3>
              </div>
              <p className="capability-item__desc">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
