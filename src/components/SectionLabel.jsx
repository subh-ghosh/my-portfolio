import './SectionLabel.css';

export default function SectionLabel({ left, center, right }) {
  return (
    <div className="section-label">
      <span className="section-label__left">{left}</span>
      {center ? <span className="section-label__center">{center}</span> : null}
      <span className="section-label__right">{right}</span>
    </div>
  );
}
