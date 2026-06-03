import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel';
import { education } from '../content/portfolioContent';
import './Experience.css';

export default function Experience() {
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
    <section className="experience" id="education">
      <div className="experience__inner">
        <SectionLabel
          left="Education"
          right="Academic Foundation"
        />
        <motion.div 
          className="experience__list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {education.map((j, i) => (
            <motion.div key={i} className="experience-item" variants={itemVariants}>
              <span className="experience-item__company">{j.institution}</span>
              <span className="experience-item__years">{j.years}</span>
              <span className="experience-item__role">{j.degree}</span>
              <span className="experience-item__city">{j.detail || j.city}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
