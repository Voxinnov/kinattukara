import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxImage = ({ src, alt, caption, height = 'h-[500px] md:h-[600px]' }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '15%']);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.05]);

  return (
    <div ref={ref} className={`relative w-full ${height} rounded-3xl overflow-hidden`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale }}
        className="absolute inset-0 w-full h-[130%] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-900/50 via-transparent to-transparent" />
      {caption && (
        <div className="absolute bottom-8 left-8 right-8 text-cream">
          <p className="font-display text-2xl md:text-4xl leading-tight max-w-xl">{caption}</p>
        </div>
      )}
    </div>
  );
};

export default ParallaxImage;
