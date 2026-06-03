import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel';
import RollingText from './RollingText';
import { focusAreas } from '../content/portfolioContent';
import './Profile.css';

export default function Profile() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 20 } },
  };

  return (
    <section className="profile" id="profile">
      <div className="profile__inner">
        <SectionLabel
          left="Professional Summary"
          right="Core Strengths"
        />
        <motion.div 
          className="profile__layout"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="profile__cards">
            <motion.div className="profile__image" variants={itemVariants}>
              <div className="profile__placeholder" style={{ background: 'linear-gradient(145deg, #1a2a1a, #0a150a)' }}>
                <div className="profile__card-copy">
                  <span className="profile__card-title">{focusAreas[0].title}</span>
                  <p>{focusAreas[0].body}</p>
                </div>
              </div>
            </motion.div>
            <motion.div className="profile__image" variants={itemVariants}>
              <div className="profile__placeholder" style={{ background: 'linear-gradient(145deg, #2a1a0a, #1a1005)' }}>
                <div className="profile__card-copy">
                  <span className="profile__card-title">{focusAreas[1].title}</span>
                  <p>{focusAreas[1].body}</p>
                </div>
              </div>
            </motion.div>
            <motion.div className="profile__image" variants={itemVariants}>
              <div className="profile__placeholder" style={{ background: 'linear-gradient(145deg, #1a1a1a, #0a0a0a)' }}>
                <div className="profile__card-copy">
                  <span className="profile__card-title">{focusAreas[2].title}</span>
                  <p>{focusAreas[2].body}</p>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div className="profile__content-block" variants={itemVariants}>
            <h2 className="profile__text">
              Engineering products that connect system performance, product thinking, and AI-assisted user value.
            </h2>
          </motion.div>
        </motion.div>
        <motion.div 
          className="profile__bottom"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
        >
          <p className="profile__bio">
            Recent work spans production-oriented SaaS, review intelligence pipelines, and embedded automation—always with a bias toward measurable improvements and maintainable architecture.
          </p>
          <RollingText text="SEE EDUCATION" href="#education" className="rolling-text--cta" />
        </motion.div>
      </div>
    </section>
  );
}
