import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShoppingBag } from 'lucide-react';
import { Button } from './ui/button';

const CTASection = ({
  title = 'Ready to grow something extraordinary?',
  subtitle = 'Share your requirements and our farm experts will reach out with personalized recommendations, pricing, and a delivery plan.',
  primaryLabel = 'Request a Quote',
  primaryTo = '/inquiry',
  secondaryLabel = 'Browse Products',
  secondaryTo = '/products',
}) => {
  return (
    <section className="relative py-20 md:py-28 px-5 md:px-8">
      <div className="max-w-6xl mx-auto rounded-[2.5rem] bg-brand-900 overflow-hidden relative noise">
        <div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?auto=format&fit=crop&w=1600&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="blob bg-brand-500 w-[380px] h-[380px] -top-24 -left-24 float-slow opacity-30" />
        <div className="blob bg-earth-400 w-[320px] h-[320px] -bottom-24 -right-24 float-slow opacity-30" style={{ animationDelay: '3s' }} />

        <div className="relative px-8 md:px-20 py-20 md:py-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-brand-300 font-semibold mb-6"
          >
            — Let's Grow Together
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl text-cream leading-[1.03] mb-6 max-w-3xl mx-auto"
          >
            {title.split(' ').slice(0, -2).join(' ')}{' '}
            <span className="italic font-light text-brand-200">{title.split(' ').slice(-2).join(' ')}</span>
          </motion.h2>
          <p className="text-brand-100/85 text-base md:text-lg max-w-2xl mx-auto mb-10">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to={primaryTo}>
              <Button className="group bg-cream hover:bg-beige text-brand-900 rounded-full pl-7 pr-2 py-2 h-14 text-base">
                <span className="mr-3">{primaryLabel}</span>
                <span className="w-10 h-10 rounded-full bg-brand-800 text-cream flex items-center justify-center transition-transform group-hover:rotate-45">
                  <ArrowUpRight size={18} />
                </span>
              </Button>
            </Link>
            <Link to={secondaryTo}>
              <Button
                variant="outline"
                className="bg-transparent border-cream/30 text-cream hover:bg-cream/10 hover:text-cream rounded-full px-7 py-6 h-14 text-base"
              >
                <ShoppingBag size={18} className="mr-2" />
                {secondaryLabel}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
