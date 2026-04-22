import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { heroSlides } from '../data/mock';

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), 6500);
    return () => clearInterval(t);
  }, []);

  const slide = heroSlides[index];

  return (
    <section className="relative h-[92vh] min-h-[620px] w-full overflow-hidden bg-brand-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <img src={slide.image} alt="" className="w-full h-full object-cover kenburns" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-900/50 via-brand-900/40 to-brand-900/85" />
        </motion.div>
      </AnimatePresence>

      <div className="relative h-full max-w-7xl mx-auto px-5 md:px-8 flex flex-col justify-end pb-24 md:pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream/15 backdrop-blur border border-cream/20 text-cream text-xs uppercase tracking-[0.25em] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-300 animate-pulse" />
              Since 1985  •  ISO 9001 Certified
            </div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-cream font-medium leading-[1.05] mb-5">
              {slide.title}
            </h1>
            <p className="text-cream/85 text-base md:text-xl max-w-2xl mb-9 leading-relaxed">
              {slide.subtitle}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/products">
                <Button className="bg-brand-600 hover:bg-brand-700 text-cream rounded-full px-7 py-6 text-base">
                  Explore Plants <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <Link to="/inquiry">
                <Button
                  variant="outline"
                  className="bg-cream/10 backdrop-blur border-cream/30 text-cream hover:bg-cream/20 hover:text-cream rounded-full px-7 py-6 text-base"
                >
                  Request Quote
                </Button>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide dots */}
        <div className="absolute bottom-10 right-8 hidden md:flex gap-2 items-center">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === index ? 'w-10 bg-cream' : 'w-5 bg-cream/40'
              }`}
              aria-label={`slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 text-cream/70 text-xs uppercase tracking-[0.3em] flex flex-col items-center gap-1">
          Scroll
          <ChevronDown size={14} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
