import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionLabel from './SectionLabel';
import RollingText from './RollingText';
import WordReveal from './WordReveal';
import { currentFocus, personalPitch } from '../content/portfolioContent';
import './About.css';

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const yVisual = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 20 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 25 } },
  };

  return (
    <section className="about" id="about">
      <div className="about__inner">
        <SectionLabel
          left="Technical Summary"
          right="Developer Snapshot"
        />
        <div className="about__grid">
          <motion.div 
            className="about__image"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="about__image-placeholder">
              <div className="about__visual-container" ref={ref}>
                <motion.div 
                  className="about__visual"
                  style={{ y: yVisual }}
                >
                  <img src="/profile.jpg" alt="Subarta Ghosh Profile" />
                </motion.div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="about__content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="about__heading">
              <WordReveal text="Full stack developer skilled in Java, Spring Boot, FastAPI, React, SQL, and modern cloud delivery with a strong grounding in DSA, OOPs, DBMS, and systems thinking." delay={0.1} />
            </h2>
            <motion.p className="about__pitch" variants={textVariants}>{personalPitch}</motion.p>
            
            <motion.div variants={textVariants} className="about__focus-block">
              <span className="about__summary-label">Current focus</span>
              <ul className="about__summary-list">
                {currentFocus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={textVariants}>
              <RollingText text="READ FAQ" href="#faq" className="rolling-text--cta" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
