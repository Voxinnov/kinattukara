import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';

const ProductCard = ({ product, index = 0 }) => {
  const ref = useRef(null);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-cream rounded-3xl overflow-hidden border border-earth-200/70 hover:border-brand-400 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-900/10 hover:-translate-y-1.5"
    >
      <div className="relative h-72 overflow-hidden bg-beige shine">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {product.featured && (
          <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-cream/95 backdrop-blur text-brand-800 text-[10px] uppercase tracking-wider font-bold">
            ★ Featured
          </div>
        )}
        <div className="absolute top-4 right-4 px-4 py-1.5 rounded-full bg-brand-800 text-cream text-sm font-semibold">
          {product.price}
        </div>
        {/* Quick action icon on hover */}
        <Link
          to="/inquiry"
          className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-cream text-brand-800 flex items-center justify-center translate-y-16 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hover:bg-brand-600 hover:text-cream"
          aria-label="inquire"
        >
          <ArrowUpRight size={18} />
        </Link>
      </div>
      <div className="p-7">
        <div className="text-[10px] uppercase tracking-[0.2em] text-brand-600 font-bold mb-2">{product.category}</div>
        <h3 className="font-display text-2xl text-brand-900 mb-3 leading-tight">{product.name}</h3>
        <p className="text-earth-700 text-sm leading-relaxed mb-5 line-clamp-2">
          {product.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {product.benefits.map((b, i) => (
            <span key={i} className="inline-flex items-center gap-1 px-2.5 py-1 bg-brand-50 text-brand-700 rounded-full text-[11px] font-medium">
              <Check size={10} />{b}
            </span>
          ))}
        </div>
        <Link
          to="/inquiry"
          className="inline-flex items-center justify-between w-full py-3 px-5 rounded-full border border-earth-200 text-brand-800 font-semibold text-sm hover:bg-brand-800 hover:text-cream hover:border-brand-800 transition-colors group/btn"
        >
          <span>Request Quote</span>
          <ArrowUpRight size={16} className="transition-transform group-hover/btn:rotate-45" />
        </Link>
      </div>
    </motion.article>
  );
};

export default ProductCard;
