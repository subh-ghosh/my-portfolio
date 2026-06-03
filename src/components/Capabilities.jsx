import SectionLabel from './SectionLabel';
import Marquee from './Marquee';
import { useScrollReveal, useStaggerReveal, useSplitTextReveal } from '../hooks/useScrollReveal';
import './Capabilities.css';

const services = [
  { num: '01', title: 'Art Direction', desc: 'We guide every visual decision from start to finish, ensuring clarity, emotion, and impact across every touchpoint.' },
  { num: '02', title: 'Brand Identity', desc: 'From strategy to execution, we shape consistent brand systems that speak clearly and feel uniquely ownable.' },
  { num: '03', title: 'Motion Direction', desc: 'We use motion as a design tool — adding clarity, rhythm, and energy to digital experiences with intention.' },
  { num: '04', title: 'Framer Sites', desc: 'Design meets execution with real-time, scalable websites — all crafted natively inside Framer for speed and precision.' },
];

export default function Capabilities() {
  const headerRef = useScrollReveal();
  const titleRef = useSplitTextReveal(0.2);
  const listRef = useStaggerReveal(0.1, 80);

  return (
    <section className="capabilities" id="capabilities">
      <div className="capabilities__inner">
        <SectionLabel
          left="© Capabilities サービス内容"
          center="(WDX® — 04)"
          right="Digital Execution"
        />
        <div className="capabilities__heading reveal" ref={headerRef}>
          <h2 className="capabilities__title" ref={titleRef}>Services</h2>
        </div>
        <Marquee
          items={['Precise', 'Structured', 'Focused', 'Visual Language']}
          variant="strip"
          speed={22}
        />
        <div className="capabilities__list" ref={listRef}>
          {services.map((s) => (
            <div key={s.num} className="capability-item stagger-item">
              <div className="capability-item__left">
                <span className="capability-item__num">{s.num}</span>
                <h3 className="capability-item__title">{s.title}</h3>
              </div>
              <p className="capability-item__desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
