import { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from 'framer-motion';
import './Marquee.css';

const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export default function Marquee({ items, direction = 'left', speed = 30, variant = 'default', isStatic = false }) {
  const content = items.join(' · ');
  // 4 items to ensure seamless wrapping block
  const block = `${content} · ${content} · ${content} · ${content} · `;

  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);
  const baseDirection = direction === 'left' ? -1 : 1;

  useAnimationFrame((t, delta) => {
    // Base speed: constant drift (made slightly slower)
    const baseSpeed = baseDirection * (30 / speed) * (delta / 1000);

    // Scroll modifier: adds velocity in the scroll direction.
    // If scrolling down (positive), it accelerates the base direction.
    // If scrolling up (negative), it reverses the base direction.
    const scrollModifier = baseDirection * (smoothVelocity.get() / 300) * (delta / 1000);

    baseX.set(baseX.get() + baseSpeed + scrollModifier);
  });

  if (isStatic) {
    return (
      <div className={`marquee marquee--${variant}`}>
        <div className="marquee__static">
          <span>{content}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`marquee marquee--${variant}`}>
      <motion.div className="marquee__track" style={{ x }}>
        <span>{block}</span>
        <span>{block}</span>
        <span>{block}</span>
        <span>{block}</span>
      </motion.div>
    </div>
  );
}
