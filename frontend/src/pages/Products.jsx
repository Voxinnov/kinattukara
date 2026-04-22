import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import CTASection from '../components/CTASection';
import { Input } from '../components/ui/input';
import { products, productCategories } from '../data/mock';

const Products = () => {
  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCat = category === 'all' || p.category === category;
      const matchQ = p.name.toLowerCase().includes(query.toLowerCase()) ||
                     p.description.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchQ;
    });
  }, [category, query]);

  return (
    <div>
      <section className="pt-14 pb-10 md:pt-20 md:pb-14 px-5 md:px-8 bg-beige">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="Our Catalog"
            title="Plants for every farm & garden"
            subtitle="Browse our collection of nutmeg, fruit, spice, and ornamental plants — all grown in our certified nursery."
          />

          {/* Filters */}
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between max-w-5xl mx-auto">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setCategory('all')}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === 'all'
                    ? 'bg-brand-600 text-cream'
                    : 'bg-cream text-earth-800 border border-earth-200 hover:border-brand-400'
                }`}
              >
                All Plants
              </button>
              {productCategories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setCategory(c.id)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === c.id
                      ? 'bg-brand-600 text-cream'
                      : 'bg-cream text-earth-800 border border-earth-200 hover:border-brand-400'
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>
            <div className="relative lg:w-72">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-earth-500" />
              <Input
                placeholder="Search plants..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-10 bg-cream border-earth-200 rounded-full h-11"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          {filtered.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filtered.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
            </div>
          ) : (
            <div className="text-center py-20 text-earth-600">
              No plants match your search. Try a different keyword or category.
            </div>
          )}
        </div>
      </section>

      <CTASection
        title="Can't find what you're looking for?"
        subtitle="We cultivate many more varieties by request. Tell us what you need and we'll help you find the perfect plants for your land."
      />
    </div>
  );
};

export default Products;
