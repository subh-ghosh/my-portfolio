import SectionLabel from './SectionLabel';
import Marquee from './Marquee';
import { useSplitTextReveal, useStaggerReveal } from '../hooks/useScrollReveal';
import './Pricing.css';

const plans = [
  {
    price: '$99', period: '/Month', name: 'Starter Plan',
    desc: 'Perfect for small launches and personal sites that need a fast online presence.',
    features: ['One-page Framer site', 'Custom layout & visuals', 'Mobile-first responsive build', 'Fast delivery (within 7 days)', 'Design system setup', 'SEO-ready structure', 'Basic CMS integration', 'Contact form setup'],
  },
  {
    price: '$299', period: '/Month', name: 'Growth Plan',
    desc: 'Designed for growing brands that need flexibility and CMS support.',
    features: ['Up to 5 pages', 'Framer CMS-powered sections', 'Component-based structure', 'Motion design & transitions', 'Clean UX-focused layout', 'Device-optimized responsiveness', 'Style guide system', 'Email capture / integrations'],
  },
  {
    price: '$899', period: '/Month', name: 'Full Scope Plan',
    desc: 'Best for studios or teams needing structure and enterprise-level execution.',
    features: ['10+ pages with CMS', 'Advanced layout strategy', 'Full brand system support', 'Animation direction', 'Custom-built components', 'Framer CMS training', 'Launch support + QA', 'Performance optimization'],
  },
];

export default function Pricing() {
  const titleRef = useSplitTextReveal(0.2);
  const gridRef = useStaggerReveal(0.1, 100);

  return (
    <section className="pricing" id="pricing">
      <div className="pricing__inner">
        <SectionLabel
          left="© Project Pricing プラン"
          center="(WDX® — 09)"
          right="Custom Quotes"
        />
        <div className="pricing__heading">
          <h2 className="pricing__title" ref={titleRef}>Pick Plans.</h2>
        </div>
        <Marquee
          items={['Custom Options', 'Transparent', 'Design Packages', 'Pricing Tiers']}
          variant="strip"
          speed={22}
        />
        <div className="pricing__grid" ref={gridRef}>
          {plans.map((p, i) => (
            <div key={i} className="pricing-card stagger-item">
              <div className="pricing-card__header">
                <div className="pricing-card__price">
                  <span className="pricing-card__amount">{p.price}</span>
                  <span className="pricing-card__period">{p.period}</span>
                </div>
                <h3 className="pricing-card__name">{p.name}</h3>
                <p className="pricing-card__desc">{p.desc}</p>
              </div>
              <ul className="pricing-card__features">
                {p.features.map((f, fi) => (
                  <li key={fi}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8.5L6.5 12L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
