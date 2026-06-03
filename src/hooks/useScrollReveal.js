import { useEffect, useRef, useCallback } from 'react';

/**
 * Basic scroll reveal — fires once when element enters viewport
 */
export function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

/**
 * Staggered reveal — reveals children one by one with delay
 * Apply to a parent container; children should have class 'stagger-item'
 */
export function useStaggerReveal(threshold = 0.1, baseDelay = 80) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = el.querySelectorAll('.stagger-item');
          items.forEach((item, i) => {
            item.style.transitionDelay = `${i * baseDelay}ms`;
            item.classList.add('stagger-visible');
          });
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, baseDelay]);

  return ref;
}

/**
 * Parallax effect — moves element based on scroll position
 * speed: 0.1 = subtle, 0.5 = dramatic
 */
export function useParallax(speed = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const rect = el.getBoundingClientRect();
          const scrolled = window.innerHeight - rect.top;
          const offset = scrolled * speed;
          el.style.transform = `translateY(${offset}px)`;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return ref;
}

/**
 * Text split reveal — splits text into words and reveals them with stagger
 */
export function useSplitTextReveal(threshold = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Split text content into words wrapped in spans
    const text = el.textContent;
    const words = text.split(' ');
    el.innerHTML = '';
    el.classList.add('split-text-container');

    words.forEach((word, i) => {
      const wordSpan = document.createElement('span');
      wordSpan.className = 'split-word';
      wordSpan.style.transitionDelay = `${i * 40}ms`;

      const inner = document.createElement('span');
      inner.className = 'split-word__inner';
      inner.textContent = word;

      wordSpan.appendChild(inner);
      el.appendChild(wordSpan);

      // Add space between words
      if (i < words.length - 1) {
        el.appendChild(document.createTextNode(' '));
      }
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('split-text-revealed');
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

/**
 * Counter animation — animates a number counting up
 */
export function useCountUp(targetValue, duration = 1500) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const start = 0;
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            const current = Math.round(start + (targetValue - start) * eased);
            el.textContent = current;

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              el.textContent = targetValue;
            }
          };

          requestAnimationFrame(animate);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [targetValue, duration]);

  return ref;
}

// Default export for backward compatibility
export default useScrollReveal;
