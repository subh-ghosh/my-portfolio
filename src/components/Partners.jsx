import SectionLabel from './SectionLabel';
import { useStaggerReveal } from '../hooks/useScrollReveal';
import './Partners.css';

const partners = ['Lumen', 'Apex', 'Drift', 'Forma', 'Nexus', 'Prism', 'Volta', 'Aura'];

export default function Partners() {
  const gridRef = useStaggerReveal(0.1, 50);

  return (
    <section className="partners" id="partners">
      <div className="partners__inner">
        <SectionLabel
          left="© Brand Partners パートナー"
          center="(WDX® — 08)"
          right="Creative Teams"
        />
        <div className="partners__grid" ref={gridRef}>
          {partners.map((p) => (
            <div key={p} className="partner-card stagger-item">
              <span className="partner-card__name">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
