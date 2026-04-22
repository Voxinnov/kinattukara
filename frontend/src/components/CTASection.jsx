import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag } from 'lucide-react';
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
      <div className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-br from-brand-700 to-brand-900 overflow-hidden relative">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?auto=format&fit=crop&w=1600&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative px-8 md:px-16 py-14 md:py-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl text-cream leading-tight mb-5"
          >
            {title}
          </motion.h2>
          <p className="text-brand-100/85 text-base md:text-lg max-w-2xl mx-auto mb-9">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to={primaryTo}>
              <Button className="bg-cream hover:bg-beige text-brand-800 rounded-full px-7 py-6 text-base">
                {primaryLabel}
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
            <Link to={secondaryTo}>
              <Button
                variant="outline"
                className="bg-transparent border-cream/40 text-cream hover:bg-cream/10 hover:text-cream rounded-full px-7 py-6 text-base"
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
