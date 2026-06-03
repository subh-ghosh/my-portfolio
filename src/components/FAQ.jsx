import { useState } from 'react';
import SectionLabel from './SectionLabel';
import { useStaggerReveal } from '../hooks/useScrollReveal';
import './FAQ.css';

const faqs = [
  { q: 'What services do you offer?', a: 'We offer art direction, brand identity, motion design, web development, and Framer-powered site creation — all tailored to your creative needs.' },
  { q: 'What is your typical turnaround time?', a: 'Most projects are delivered within 2–4 weeks depending on scope. Smaller builds like one-page sites can be completed in under 7 days.' },
  { q: 'Do you only work in Framer?', a: 'While Framer is our primary tool for website builds, we also work with Figma, After Effects, and custom code when needed.' },
  { q: 'Can you handle both design and build?', a: 'Absolutely. We handle everything from initial concept and design to final development and launch — all under one roof.' },
  { q: 'Do you offer brand strategy too?', a: 'Yes. We offer strategic guidance on positioning, messaging, and visual direction to ensure your brand communicates with clarity and intent.' },
  { q: 'What\'s your process like?', a: 'We start with discovery and strategy, move into design concepts, iterate based on feedback, then build and launch. Communication is clear at every step.' },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const listRef = useStaggerReveal(0.1, 60);

  return (
    <section className="faq" id="faq">
      <div className="faq__inner">
        <SectionLabel
          left="© Help Center ヘルプ"
          center="(WDX® — 11)"
          right="Clarifications"
        />
        <div className="faq__list" ref={listRef}>
          {faqs.map((f, i) => (
            <div
              key={i}
              className={`faq-item stagger-item ${open === i ? 'faq-item--open' : ''}`}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="faq-item__header">
                <span className="faq-item__num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="faq-item__question">{f.q}</h3>
                <span className="faq-item__toggle">{open === i ? '−' : '+'}</span>
              </div>
              <div className="faq-item__body">
                <p className="faq-item__answer">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
