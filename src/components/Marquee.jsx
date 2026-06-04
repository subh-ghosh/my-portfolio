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
  
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 2], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);

  const directionFactor = useRef(direction === 'left' ? -1 : 1);

  useAnimationFrame((t, delta) => {
    // 50 / speed matches the original CSS speed where 50% track shift took `speed` seconds.
    // We wrap at 25%, so moving 25% takes speed/2 seconds.
    let moveBy = directionFactor.current * (50 / speed) * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = 1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = -1;
    }

    // Apply a much milder scroll velocity modifier
    moveBy += directionFactor.current * Math.abs(moveBy) * Math.abs(velocityFactor.get());
    baseX.set(baseX.get() + moveBy);
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
