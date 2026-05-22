import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowUpRight } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import CTASection from '../components/CTASection';
import { blogPosts } from '../data/mock';

const Blog = () => {
  const [category, setCategory] = useState('All');
  const categories = ['All', ...new Set(blogPosts.map((p) => p.category))];
  const posts = category === 'All' ? blogPosts : blogPosts.filter((p) => p.category === category);
  const [featured, ...rest] = posts;

  return (
    <div>
      <section className="pt-14 pb-10 md:pt-20 md:pb-14 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="Farming Guide"
            title="Knowledge that grows with you"
            subtitle="Practical guides, cultivation tips, and stories from our farmers — written to help you succeed."
          />
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === c
                    ? 'bg-brand-600 text-cream'
                    : 'bg-cream text-earth-800 border border-earth-200 hover:border-brand-400'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Featured post */}
          {featured && (
            <motion.a
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group grid lg:grid-cols-2 gap-8 bg-beige rounded-3xl overflow-hidden mb-14"
            >
              <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-xs uppercase tracking-wider text-brand-600 font-semibold mb-3">
                  {featured.category} • Featured
                </span>
                <h3 className="font-display text-3xl md:text-4xl text-brand-900 leading-tight mb-4 group-hover:text-brand-700 transition-colors">
                  {featured.title}
                </h3>
                <p className="text-earth-700 leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-earth-600 mb-6">
                  <span className="flex items-center gap-1.5"><User size={13} />{featured.author}</span>
                  <span className="flex items-center gap-1.5"><Calendar size={13} />{featured.date}</span>
                  <span className="flex items-center gap-1.5"><Clock size={13} />{featured.readTime}</span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                  Read article <ArrowUpRight size={16} />
                </span>
              </div>
            </motion.a>
          )}

          {/* Other posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {rest.map((p, i) => (
              <motion.a
                href="#"
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.08 }}
                className="group bg-cream rounded-2xl overflow-hidden border border-earth-200/70 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden bg-beige">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <span className="text-[10px] uppercase tracking-wider text-brand-600 font-bold">{p.category}</span>
                  <h3 className="font-display text-xl text-brand-900 mt-1.5 mb-3 leading-snug group-hover:text-brand-700 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-earth-700 text-sm leading-relaxed mb-4 line-clamp-2">{p.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-earth-600">
                    <span className="flex items-center gap-1.5"><Calendar size={12} />{p.date}</span>
                    <span className="flex items-center gap-1.5"><Clock size={12} />{p.readTime}</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
      <CTASection
        title="Have a farming question?"
        subtitle="Our agronomists are always happy to help. Reach out for personalized advice on your plantation."
        primaryLabel="Ask an Expert"
        primaryTo="/contact"
      />
    </div>
  );
};

export default Blog;
