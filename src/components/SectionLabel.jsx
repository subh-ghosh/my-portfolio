import { motion } from 'framer-motion';
import './SectionLabel.css';

export default function SectionLabel({ left, center, right }) {
  return (
    <motion.div 
      className="section-label"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <span className="section-label__left">{left}</span>
      {center ? <span className="section-label__center">{center}</span> : null}
      <span className="section-label__right">{right}</span>
    </motion.div>
  );
}
