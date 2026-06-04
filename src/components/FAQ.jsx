import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionLabel from './SectionLabel';
import { faqs } from '../content/portfolioContent';
import './FAQ.css';

export default function FAQ() {
  const [open, setOpen] = useState(null);
  
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
    <section className="faq" id="faq">
      <div className="faq__inner">
        <SectionLabel
          left="© Recruiter FAQ"
          right="Quick Answers"
        />
        <motion.div 
          className="faq__list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              className={`faq-item ${open === i ? 'faq-item--open' : ''}`}
              variants={itemVariants}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="faq-item__header">
                <span className="faq-item__num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="faq-item__question">{f.q}</h3>
                <span className="faq-item__toggle">{open === i ? '−' : '+'}</span>
              </div>
              <AnimatePresence>
                {open === i && (
                  <motion.div 
                    className="faq-item__body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p className="faq-item__answer">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
