import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Marquee from './Marquee';
import MagneticButton from './MagneticButton';
import { heroHighlights, openTo, personalInfo, quickStats, summary } from '../content/portfolioContent';
import './Hero.css';

export default function Hero() {
  const textRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start end", "end start"]
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 2.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
  };

  const headingText = "Building scalable products with backend depth, full stack execution, and measurable engineering impact.";

  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__grid">
          <motion.div 
            className="hero__text"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p className="hero__eyebrow" variants={itemVariants}>
              {personalInfo.subtitle} · {personalInfo.location}
            </motion.p>
            <motion.h1 className="hero__heading" variants={itemVariants} style={{ position: "relative" }}>
              {/* Invisible placeholder to reserve exact height and prevent layout shift */}
              <span style={{ visibility: "hidden" }}>
                {headingText}
                <span style={{ display: "inline-block", width: "0.4em", marginLeft: "4px" }} />
              </span>
              
              {/* Absolute layer where the actual typing happens */}
              <span style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", textAlign: "inherit" }}>
                {headingText.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, display: "none", textShadow: "0px 0px 20px rgba(255,255,255,1)" }}
                    animate={{ opacity: 1, display: "inline", textShadow: "0px 0px 0px rgba(255,255,255,0)" }}
                    transition={{ duration: 0.3, delay: 2.4 + (i * 0.02) }}
                  >
                    {char}
                  </motion.span>
                ))}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 1, 0, 0] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    times: [0, 0.1, 0.5, 0.6, 1],
                    delay: 2.4
                  }}
                  style={{
                    display: "inline-block",
                    width: "0.4em",
                    height: "0.9em",
                    backgroundColor: "var(--text-primary)",
                    verticalAlign: "bottom",
                    marginLeft: "4px",
                    marginBottom: "4px"
                  }}
                />
              </span>
            </motion.h1>
            <motion.p className="hero__summary" variants={itemVariants}>{summary}</motion.p>
            <motion.p className="hero__availability" variants={itemVariants}>
              Open to {openTo[0].toLowerCase()}, {openTo[1].toLowerCase()}, and {openTo[2].toLowerCase()}.
            </motion.p>
            <motion.div className="hero__actions" variants={itemVariants}>
              <MagneticButton>
                <a className="hero__cta" href="#projects">View Projects</a>
              </MagneticButton>
              <MagneticButton>
                <a className="hero__cta hero__cta--ghost" href="/Resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
              </MagneticButton>
              <MagneticButton>
                <a className="hero__cta hero__cta--ghost" href="#contact">Contact</a>
              </MagneticButton>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero__typography-art"
            style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]) }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          >
            <span className="hero__giant-text">{'< / >'}</span>
          </motion.div>

        </div>
      </div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <Marquee
          items={["SUBARTA GHOSH", "FULL STACK DEVELOPER"]}
          variant="massive"
          speed={60}
        />
      </motion.div>
      <Marquee
        items={heroHighlights}
        variant="strip"
        speed={20}
      />
    </section>
  );
}
