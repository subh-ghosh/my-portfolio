import { motion } from 'framer-motion';
import './RollingText.css';

export default function RollingText({ text, href = '#', tag = 'a', className = '' }) {
  const Tag = tag === 'a' ? motion.a : motion.div;
  const props = tag === 'a' ? { href } : {};

  return (
    <Tag 
      className={`rolling-text ${className}`} 
      {...props}
      initial="initial"
      whileHover="hover"
    >
      <motion.span 
        className="rolling-text__inner"
        variants={{
          initial: { y: '0%' },
          hover: { y: '-50%' }
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <span className="rolling-text__default">{text}</span>
        <span className="rolling-text__hover" aria-hidden="true">{text}</span>
      </motion.span>
    </Tag>
  );
}
