import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Leaf, Star } from 'lucide-react';
import { Button } from './ui/button';
import { heroSlides } from '../data/mock';

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), 7000);
    return () => clearInterval(t);
  }, []);
  const slide = heroSlides[index];

  return (
    <section className="relative min-h-[92vh] w-full bg-cream overflow-hidden">
      {/* Decorative blobs */}
      <div className="blob bg-brand-300 w-[500px] h-[500px] -top-40 -right-40 float-slow" />
      <div className="blob bg-earth-200 w-[420px] h-[420px] bottom-0 -left-32 float-slow" style={{ animationDelay: '2s' }} />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 pt-10 md:pt-16 pb-20 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[82vh]">
        {/* Left: Text */}
        <div className="lg:col-span-7 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-xs uppercase tracking-[0.25em] mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-600 animate-pulse" />
            Since 1985 • Kerala, India
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.h1
              key={slide.id}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[40px] md:text-[68px] lg:text-[84px] leading-[0.98] tracking-tight text-brand-900 font-medium"
            >
              {slide.title.split(' ').slice(0, -2).join(' ')}
              <br />
              <span className="italic font-light text-gradient">{slide.title.split(' ').slice(-2).join(' ')}</span>
            </motion.h1>
          </AnimatePresence>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 text-earth-700 text-base md:text-xl max-w-xl leading-relaxed"
          >
            {slide.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-9 flex flex-wrap gap-3 items-center"
          >
            <Link to="/products">
              <Button className="group bg-brand-800 hover:bg-brand-900 text-cream rounded-full pl-7 pr-2 py-2 h-14 text-base">
                <span className="mr-3">Explore Our Plants</span>
                <span className="w-10 h-10 rounded-full bg-cream text-brand-800 flex items-center justify-center transition-transform group-hover:rotate-45">
                  <ArrowUpRight size={18} />
                </span>
              </Button>
            </Link>
            <Link to="/inquiry" className="link-underline text-brand-800 font-medium text-base ml-2">
              Request a Quote
            </Link>
          </motion.div>

          {/* Rating strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex items-center gap-4"
          >
            <div className="flex -space-x-2">
              {[12, 32, 52, 45].map((i) => (
                <img key={i} src={`https://i.pravatar.cc/100?img=${i}`} alt="" className="w-9 h-9 rounded-full border-2 border-cream object-cover" />
              ))}
            </div>
            <div>
              <div className="flex gap-0.5">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={13} className="fill-earth-500 text-earth-500" />)}</div>
              <div className="text-xs text-earth-700 mt-0.5">Trusted by 12,000+ farmers</div>
            </div>
          </motion.div>
        </div>

        {/* Right: Image stack */}
        <div className="lg:col-span-5 relative h-[460px] md:h-[560px] lg:h-[620px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9 }}
              className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl shadow-brand-900/20"
            >
              <img src={slide.image} alt="" className="w-full h-full object-cover kenburns" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/35 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Floating info card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="absolute -bottom-6 -left-4 md:-left-10 bg-cream rounded-2xl p-5 shadow-xl shadow-brand-900/10 border border-earth-200/70 max-w-[230px] float-slow"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-brand-600 text-cream flex items-center justify-center">
                <Leaf size={18} />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-earth-600">Premium Grade</div>
                <div className="font-display text-lg text-brand-900 leading-tight">Nutmeg Plants</div>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-earth-200/60 flex justify-between text-xs">
              <div><span className="text-earth-600">From</span> <span className="text-brand-800 font-bold">₹280</span></div>
              <span className="text-brand-600 font-medium">In Stock</span>
            </div>
          </motion.div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1 }}
            className="absolute -top-4 -right-4 w-28 h-28 rounded-full bg-brand-800 text-cream flex items-center justify-center shadow-xl"
          >
            <div className="text-center">
              <div className="font-display text-2xl font-medium">40+</div>
              <div className="text-[9px] uppercase tracking-wider opacity-80">Years<br/>Expertise</div>
            </div>
          </motion.div>

          {/* Slide dots */}
          <div className="absolute bottom-4 right-5 flex gap-1.5">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1 rounded-full transition-all ${i === index ? 'w-8 bg-cream' : 'w-3 bg-cream/50'}`}
                aria-label={`slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
