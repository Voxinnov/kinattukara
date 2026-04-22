import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';

const ProductCard = ({ product, index = 0 }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="group bg-cream rounded-2xl overflow-hidden border border-earth-200/70 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300"
    >
      <div className="relative h-64 overflow-hidden bg-beige">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {product.featured && (
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-brand-600 text-cream text-[10px] uppercase tracking-wider font-semibold">
            Featured
          </div>
        )}
        <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-cream/90 backdrop-blur text-brand-800 text-sm font-semibold">
          {product.price}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl text-brand-900 mb-2 leading-tight">{product.name}</h3>
        <p className="text-earth-700 text-sm leading-relaxed mb-4 line-clamp-2">
          {product.description}
        </p>
        <ul className="space-y-1.5 mb-5">
          {product.benefits.map((b, i) => (
            <li key={i} className="flex items-center gap-2 text-xs text-earth-700">
              <Check size={13} className="text-brand-600 flex-shrink-0" />
              {b}
            </li>
          ))}
        </ul>
        <Link
          to="/inquiry"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-900 group/btn"
        >
          Inquire now
          <ArrowUpRight size={16} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </Link>
      </div>
    </motion.article>
  );
};

export default ProductCard;
