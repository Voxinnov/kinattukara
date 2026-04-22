import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Award, Sprout, Truck, Users, ShieldCheck } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';
import GalleryGrid from '../components/GalleryGrid';
import { Button } from '../components/ui/button';
import { products, testimonials, whyChooseUs, stats, galleryImages } from '../data/mock';

const iconMap = { Award, Sprout, Leaf, Truck, Users, ShieldCheck };

const Home = () => {
  const featured = products.filter((p) => p.featured).slice(0, 6);

  return (
    <div>
      <HeroSection />

      {/* Stats band */}
      <section className="bg-brand-900 text-cream py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center md:text-left border-l-2 border-brand-700 pl-4 md:pl-6"
            >
              <div className="font-display text-3xl md:text-5xl text-cream font-medium">{s.value}</div>
              <div className="text-brand-300 text-xs md:text-sm uppercase tracking-wider mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About preview */}
      <section className="py-20 md:py-28 px-5 md:px-8 leaf-pattern">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1537721664796-76f77222a5d0"
                alt="Our nursery"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 md:-right-10 bg-cream rounded-2xl p-6 shadow-2xl shadow-brand-900/10 border border-earth-200 max-w-[240px] hidden md:block">
              <div className="font-display text-4xl text-brand-700 font-semibold">40+</div>
              <div className="text-earth-700 text-sm mt-1">Years of nurturing India's finest nutmeg varieties</div>
            </div>
          </motion.div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-brand-600 font-semibold mb-4">About Our Nursery</div>
            <h2 className="font-display text-3xl md:text-5xl text-brand-900 mb-5 leading-tight">
              A four-decade journey, rooted in Kerala's fertile soil.
            </h2>
            <p className="text-earth-700 text-base md:text-lg leading-relaxed mb-5">
              Kinattukara Nursery began in 1985 with a single vision: give Indian farmers access to premium,
              disease-free nutmeg saplings backed by honest guidance. Today, we are India's first ISO 9001
              certified nutmeg nursery and proudly serve over 12,000 farmers across the country.
            </p>
            <p className="text-earth-700 text-base md:text-lg leading-relaxed mb-8">
              From skin bud and crown bud varieties to approach grafting — every plant leaves our nursery
              hand-inspected and ready to thrive for generations.
            </p>
            <Link to="/about">
              <Button variant="outline" className="border-brand-600 text-brand-700 hover:bg-brand-50 hover:text-brand-700 rounded-full px-6">
                Our Story <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="py-20 md:py-28 px-5 md:px-8 bg-beige">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="Our Plants"
            title="Hand-picked saplings for your plantation"
            subtitle="Each variety is cultivated under expert care, ensuring your farm starts with the strongest genetic stock."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featured.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
          <div className="text-center mt-12">
            <Link to="/products">
              <Button className="bg-brand-600 hover:bg-brand-700 text-cream rounded-full px-7 py-6">
                View All Plants <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 md:py-28 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="Why Choose Us"
            title="Six reasons farmers trust Kinattukara"
            subtitle="Quality is not a claim — it's a certification, a practice, and a legacy we honor every day."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((f, i) => {
              const Icon = iconMap[f.icon] || Leaf;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                  className="p-7 rounded-2xl bg-cream border border-earth-200/70 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-900/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center mb-5">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display text-xl text-brand-900 mb-2">{f.title}</h3>
                  <p className="text-earth-700 text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="py-20 md:py-28 px-5 md:px-8 bg-beige">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="From Our Farm"
            title="Life at the plantation"
            subtitle="A glimpse into our fields, farmers, and the passion that grows every plant."
          />
          <GalleryGrid images={galleryImages.slice(0, 6)} cols={3} />
          <div className="text-center mt-10">
            <Link to="/gallery">
              <Button variant="outline" className="border-brand-600 text-brand-700 hover:bg-brand-50 hover:text-brand-700 rounded-full px-6">
                View Full Gallery <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="Farmer Stories"
            title="Trusted across India"
            subtitle="Real words from real farmers whose plantations thrive with our saplings."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t, i) => <TestimonialCard key={t.id} t={t} index={i} />)}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Home;
