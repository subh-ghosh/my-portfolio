import SectionLabel from './SectionLabel';
import Marquee from './Marquee';
import { useStaggerReveal } from '../hooks/useScrollReveal';
import './Blog.css';

const articles = [
  { author: 'Gregory Lalle', date: 'May 21, 2024', excerpt: 'Good design is not just about structure—it\'s about the emotional weight of space, rhythm, and silence.', tag: 'Web Design' },
  { author: 'Clive Willow', date: 'February 5, 2024', excerpt: 'Typography today is no longer static. It breathes, scales, and adapts—blurring the lines between function and expression.', tag: 'Design' },
  { author: 'Raven Claw', date: 'June 2, 2024', excerpt: 'Minimal design isn\'t emptiness—it\'s clarity, intention, and the reduction of noise to amplify what truly matters.', tag: 'Visual Identity' },
  { author: 'Clay Nicolas', date: 'June 10, 2025', excerpt: 'Portfolios today must be more than archives—they need to feel alive, intentional, and editorial by design.', tag: 'Portfolio' },
];

const colors = [
  'linear-gradient(145deg, #1a1510, #2a2015)',
  'linear-gradient(145deg, #15101a, #201520)',
  'linear-gradient(145deg, #1a0a0a, #2a1515)',
  'linear-gradient(145deg, #0a1a1a, #152a25)',
];

export default function Blog() {
  const gridRef = useStaggerReveal(0.1, 100);

  return (
    <section className="blog" id="blog">
      <div className="blog__inner">
        <SectionLabel
          left="© Visual Journal ジャーナル"
          center="(WDX® — 10)"
          right="Creative Notes"
        />
        <Marquee items={['Featured Article©']} variant="giant" speed={18} />
        <div className="blog__grid" ref={gridRef}>
          {articles.map((a, i) => (
            <article key={i} className={`blog-card ${i === 0 ? 'blog-card--large' : ''} stagger-item`}>
              <div className="blog-card__image" style={{ background: colors[i] }}>
                <div className="blog-card__tag">{a.tag}</div>
                <div className="blog-card__overlay">
                  <span className="blog-card__author-name">{a.author}</span>
                </div>
              </div>
              <div className="blog-card__content">
                <span className="blog-card__date">{a.date}</span>
                <p className="blog-card__excerpt">{a.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
