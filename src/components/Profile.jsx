import SectionLabel from './SectionLabel';
import RollingText from './RollingText';
import { useScrollReveal, useStaggerReveal, useParallax } from '../hooks/useScrollReveal';
import './Profile.css';

export default function Profile() {
  const contentRef = useScrollReveal();
  const imagesRef = useStaggerReveal(0.1, 150);
  const img1Ref = useParallax(0.1);
  const img2Ref = useParallax(0.15);
  const img3Ref = useParallax(0.05);

  return (
    <section className="profile" id="profile">
      <div className="profile__inner">
        <SectionLabel
          left="© Personal Profile プロフィール"
          center="(WDX® — 05)"
          right="Visual Thinker"
        />
        <div className="profile__layout" ref={imagesRef}>
          <div className="profile__image profile__image--tl stagger-item" ref={img1Ref}>
            <div className="profile__placeholder" style={{ background: 'linear-gradient(145deg, #1a2a1a, #0a150a)' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
            </div>
          </div>
          <div className="profile__image profile__image--tr stagger-item" ref={img2Ref}>
            <div className="profile__placeholder" style={{ background: 'linear-gradient(145deg, #2a1a0a, #1a1005)' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
            </div>
          </div>
          <div className="profile__image profile__image--bl stagger-item" ref={img3Ref}>
            <div className="profile__placeholder" style={{ background: 'linear-gradient(145deg, #1a1a1a, #0a0a0a)' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
            </div>
          </div>
          <h2 className="profile__text stagger-item">
            Blending design and code with functional clarity and creative precision. Delivering thoughtful digital systems with structure, flow, and expressive interaction.
          </h2>
        </div>
        <div className="profile__bottom reveal" ref={contentRef}>
          <p className="profile__bio">
            We bridge creative direction with real-world execution, combining design and development into one seamless workflow to deliver digital experiences that are thoughtful, fast, and built to perform.
          </p>
          <RollingText text="SEE WORKS" href="#projects" className="rolling-text--cta" />
        </div>
      </div>
    </section>
  );
}
