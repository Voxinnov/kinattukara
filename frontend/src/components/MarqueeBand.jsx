import React from 'react';
import { Leaf, Award, Sprout, ShieldCheck, Truck, Users, Sparkles } from 'lucide-react';

const items = [
  { icon: Award, text: 'ISO 9001:2008 Certified' },
  { icon: Sprout, text: 'Since 1985' },
  { icon: Leaf, text: '100% Organic Practices' },
  { icon: ShieldCheck, text: 'Quality Guaranteed' },
  { icon: Truck, text: 'Pan-India Delivery' },
  { icon: Users, text: '12,000+ Happy Farmers' },
  { icon: Sparkles, text: "India's First Nutmeg Nursery" },
];

const MarqueeBand = () => {
  const repeated = [...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden bg-brand-800 border-y border-brand-700 py-5">
      <div className="marquee-track flex gap-12 items-center">
        {repeated.map((it, i) => (
          <div key={i} className="flex items-center gap-3 flex-shrink-0 text-brand-100">
            <it.icon size={16} className="text-brand-300" />
            <span className="text-sm uppercase tracking-[0.2em] font-medium whitespace-nowrap">{it.text}</span>
            <span className="text-brand-500 ml-4">❖</span>
          </div>
        ))}
      </div>
      {/* Edge fade */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-brand-800 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-brand-800 to-transparent pointer-events-none" />
    </div>
  );
};

export default MarqueeBand;
