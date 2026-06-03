import SectionLabel from './SectionLabel';
import Marquee from './Marquee';
import { useStaggerReveal } from '../hooks/useScrollReveal';
import './Awards.css';

const awards = [
  { count: '27x', org: 'Awwwards', desc: 'Recognized for bold interaction, structured visual rhythm, and design consistency across creative categories.' },
  { count: '14x', org: 'FWA', desc: 'Awarded for outstanding execution, seamless animation, and originality in modern digital experiences.' },
  { count: '09x', org: 'CSSDA', desc: 'Celebrated for front-end excellence, design innovation, and development precision across multiple showcases.' },
  { count: '08x', org: 'Dribbble', desc: 'Highlighted for strong typographic systems, visual hierarchy, and thoughtful layout built with intent.' },
];

export default function Awards() {
  const listRef = useStaggerReveal(0.1, 100);

  return (
    <section className="awards" id="awards">
      <div className="awards__inner">
        <SectionLabel
          left="© Awards アワード"
          center="(WDX® — 07)"
          right="Selected Honors"
        />
        <Marquee
          items={['Awwwards', 'CSSDA', 'Framer', 'Dribbble']}
          variant="dark"
          speed={18}
        />
        <div className="awards__list" ref={listRef}>
          {awards.map((a, i) => (
            <div key={i} className="award-item stagger-item">
              <span className="award-item__count">{a.count}</span>
              <div className="award-item__info">
                <h3 className="award-item__org">{a.org}</h3>
                <p className="award-item__desc">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
