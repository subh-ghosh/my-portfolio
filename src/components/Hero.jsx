import Marquee from './Marquee';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__grid">
          <div className="hero__text hero__animate-in">
            <h1 className="hero__heading">
              Pattern Dimensions and Moments that Connect and Leave a Bold <span className="hero__jp">イメージ</span>.
            </h1>
          </div>
          <div className="hero__visual hero__animate-in hero__animate-in--delay">
            <div className="hero__image-card">
              <div className="hero__image-placeholder">
                <div className="hero__image-inner">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="hero__icon">
                    <path d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Marquee
        items={['Art Direction', 'Branding', 'Strategy', 'Web Design']}
        variant="strip"
        speed={20}
      />
      <div className="hero__name-section">
        <Marquee
          items={['Akihiko™']}
          variant="hero"
          speed={25}
        />
      </div>
    </section>
  );
}
