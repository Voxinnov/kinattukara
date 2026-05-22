import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const TestimonialCard = ({ t, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-cream rounded-2xl p-7 border border-earth-200/70 hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300 relative"
    >
      <Quote size={32} className="text-brand-200 absolute top-5 right-5" />
      <div className="flex gap-1 mb-4">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} size={15} className="fill-earth-400 text-earth-400" />
        ))}
      </div>
      <p className="text-earth-800 text-base leading-relaxed mb-6">“{t.text}”</p>
      <div className="flex items-center gap-3 pt-4 border-t border-earth-200/60">
        <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover" />
        <div>
          <div className="font-semibold text-brand-900 text-sm">{t.name}</div>
          <div className="text-xs text-earth-600">{t.location}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
