import SectionLabel from './SectionLabel';
import Marquee from './Marquee';
import { useStaggerReveal } from '../hooks/useScrollReveal';
import './Experience.css';

const jobs = [
  { company: 'Clavmen Studio', years: '2022 – present', role: 'Art Director & Designer', city: 'Tokyo' },
  { company: 'Modular Eight', years: '2020 – 2022', role: 'Senior Developer', city: 'Osaka' },
  { company: 'Haus of Signal', years: '2018 – 2020', role: 'Creative Technologist', city: 'Berlin' },
  { company: 'Studio Orbit', years: '2016 – 2018', role: 'UI/UX Designer', city: 'Dallas' },
  { company: 'Novaform Labs', years: '2014 – 2016', role: 'Junior Designer', city: 'Kyoto' },
];

export default function Experience() {
  const listRef = useStaggerReveal(0.1, 60);

  return (
    <section className="experience" id="experience">
      <div className="experience__inner">
        <SectionLabel
          left="© Experience エクスペリエンス"
          center="(WDX® — 05)"
          right="Digital Craft"
        />
        <Marquee
          items={['Global', 'Creative Collabs', 'Studio', 'Creative Partnerships']}
          variant="dark"
          speed={25}
        />
        <div className="experience__list" ref={listRef}>
          {jobs.map((j, i) => (
            <div key={i} className="experience-item stagger-item">
              <span className="experience-item__company">{j.company}</span>
              <span className="experience-item__years">{j.years}</span>
              <span className="experience-item__role">{j.role}</span>
              <span className="experience-item__city">{j.city}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
