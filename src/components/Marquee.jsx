import './Marquee.css';

export default function Marquee({ items, direction = 'left', speed = 30, variant = 'default' }) {
  const content = items.join(' · ');
  const repeated = `${content} · ${content} · ${content} · `;

  return (
    <div className={`marquee marquee--${variant}`}>
      <div
        className={`marquee__track marquee__track--${direction}`}
        style={{ animationDuration: `${speed}s` }}
      >
        <span>{repeated}</span>
        <span>{repeated}</span>
      </div>
    </div>
  );
}
