import './RollingText.css';

export default function RollingText({ text, href = '#', tag = 'a', className = '' }) {
  const Tag = tag;
  const props = tag === 'a' ? { href } : {};
  const isCta = className.includes('rolling-text--cta');

  return (
    <Tag className={`rolling-text ${className}`} {...props}>
      <span className="rolling-text__inner">
        <span className="rolling-text__default">{text}</span>
        <span className="rolling-text__hover" aria-hidden="true">{text}</span>
      </span>
    </Tag>
  );
}
