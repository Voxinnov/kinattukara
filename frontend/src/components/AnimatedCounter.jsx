import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

const AnimatedCounter = ({ value, suffix = '', prefix = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [display, setDisplay] = useState(0);

  // Extract numeric part from strings like "12,000+", "40+"
  const match = String(value).match(/[\d.]+/);
  const numeric = match ? parseFloat(match[0].replace(/,/g, '')) : 0;
  const hasPlus = String(value).includes('+');
  const hasComma = numeric >= 1000;

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, numeric, {
      duration: 1.8,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(v),
    });
    return controls.stop;
  }, [inView, numeric]);

  const formatted = hasComma
    ? Math.floor(display).toLocaleString()
    : (numeric % 1 === 0 ? Math.floor(display) : display.toFixed(0));

  return (
    <span ref={ref}>
      {prefix}{formatted}{hasPlus ? '+' : ''}{suffix}
    </span>
  );
};

export default AnimatedCounter;
