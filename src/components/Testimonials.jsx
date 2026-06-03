import SectionLabel from './SectionLabel';
import RollingText from './RollingText';
import Marquee from './Marquee';
import { useStaggerReveal } from '../hooks/useScrollReveal';
import './Testimonials.css';

const testimonials = [
  { quote: '"Akihiko elevated every layer of our brand\'s online presence. From motion details to structural layout, every piece felt crafted and intentional. The site not only looked beautiful but performed well too."', name: 'Lisa Kuroda', title: 'Founder, Studio Analog' },
  { quote: '"Akihiko approaches every project with a deep sense of purpose. His work is never just about the surface — it\'s about how each element functions, connects, and flows."', name: 'Daniel Reyes', title: 'Director, Framehaus' },
  { quote: '"His ability to merge storytelling with clean interaction design is unmatched. Akihiko understands not just how things should look, but why they should look that way."', name: 'Mei Tanaka', title: 'UX Designer, Nuro' },
  { quote: '"Working with Akihiko was more than just hiring a designer — it felt like bringing on a creative partner who truly understood our goals."', name: 'Julian Pierce', title: 'Director, Vektor Inc.' },
  { quote: '"Akihiko brings a rare balance of creativity and discipline. He\'s incredibly fast without ever sacrificing attention to detail."', name: 'Hana Samoto', title: 'CEO, Willow Studio' },
];

export default function Testimonials() {
  const listRef = useStaggerReveal(0.1, 100);

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__inner">
        <SectionLabel
          left="© Testimonials レビュー"
          center="(WDX® — 06)"
          right="Real Feedback"
        />
        <div className="testimonials__header">
          <Marquee items={['Testimonial© - Reviews']} variant="giant" speed={22} />
          <RollingText text="GET IN TOUCH" href="#footer" className="rolling-text--cta" />
        </div>
        <div className="testimonials__list" ref={listRef}>
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card stagger-item">
              <p className="testimonial-card__quote">{t.quote}</p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">
                  <span>{t.name[0]}</span>
                </div>
                <div>
                  <span className="testimonial-card__name">{t.name}</span>
                  <span className="testimonial-card__title">{t.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
