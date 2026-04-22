import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Leaf, Award, Sprout, Truck, Users, ShieldCheck } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';
import GalleryGrid from '../components/GalleryGrid';
import MarqueeBand from '../components/MarqueeBand';
import AnimatedCounter from '../components/AnimatedCounter';
import ParallaxImage from '../components/ParallaxImage';
import { Button } from '../components/ui/button';
import { products, testimonials, whyChooseUs, stats, galleryImages } from '../data/mock';

const iconMap = { Award, Sprout, Leaf, Truck, Users, ShieldCheck };

// Text reveal helper
const wordVariants = {
  hidden: { y: '110%', opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};
const RevealText = ({ text, className = '' }) => {
  const words = text.split(' ');
  return (
    <span className={`inline-block ${className}`}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-top pr-[0.25em]">
          <motion.span
            className="inline-block"
            variants={wordVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

const Home = () => {
  const featured = products.filter((p) => p.featured).slice(0, 6);

  return (
    <div>
      <HeroSection />
      <MarqueeBand />

      {/* Stats with animated counters */}
      <section className="py-16 md:py-24 px-5 md:px-8 bg-cream noise">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center border-l-2 border-brand-600 pl-5 md:pl-7"
            >
              <div className="font-display text-4xl md:text-6xl font-medium text-brand-900 leading-none">
                <AnimatedCounter value={s.value} />
              </div>
              <div className="text-earth-600 text-xs md:text-sm uppercase tracking-[0.2em] mt-3">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About preview with parallax image */}
      <section className="py-20 md:py-32 px-5 md:px-8 leaf-pattern">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ParallaxImage
            src="https://images.unsplash.com/photo-1537721664796-76f77222a5d0"
            alt="Our nursery"
            caption="Four generations of Kerala's finest cultivation."
            height="h-[500px] md:h-[640px]"
          />

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-brand-600 font-semibold mb-5">— About Our Nursery</div>
            <h2 className="font-display text-4xl md:text-6xl text-brand-900 leading-[1.05] mb-7">
              <RevealText text="Rooted in Kerala's soil," />
              <br />
              <span className="italic font-light text-gradient"><RevealText text="growing worldwide." /></span>
            </h2>
            <p className="text-earth-700 text-base md:text-lg leading-relaxed mb-5">
              Kinattukara Nursery began in 1985 with a single vision: give Indian farmers access to premium,
              disease-free nutmeg saplings backed by honest guidance.
            </p>
            <p className="text-earth-700 text-base md:text-lg leading-relaxed mb-8">
              Today, we are India's first ISO 9001 certified nutmeg nursery and proudly serve over 12,000 farmers
              across the country — from skin bud and crown bud varieties to approach grafting.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 group">
              <span className="w-12 h-12 rounded-full border border-brand-700 text-brand-700 flex items-center justify-center transition-all group-hover:bg-brand-800 group-hover:text-cream group-hover:border-brand-800 group-hover:rotate-45">
                <ArrowUpRight size={18} />
              </span>
              <span className="text-brand-800 font-medium">Read our story</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="py-20 md:py-32 px-5 md:px-8 bg-beige">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-brand-600 font-semibold mb-4">— Our Plants</div>
              <h2 className="font-display text-4xl md:text-6xl text-brand-900 leading-[1.05] max-w-2xl">
                Hand-picked saplings, <span className="italic font-light text-gradient">thoughtfully grown.</span>
              </h2>
            </div>
            <Link to="/products" className="link-underline text-brand-800 font-medium text-base flex items-center gap-2">
              View all plants <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featured.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        </div>
      </section>

      {/* Why choose us — bento layout */}
      <section className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <div className="text-xs uppercase tracking-[0.25em] text-brand-600 font-semibold mb-4">— Why Kinattukara</div>
            <h2 className="font-display text-4xl md:text-6xl text-brand-900 leading-[1.05]">
              Six reasons farmers <span className="italic font-light text-gradient">stay with us.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChooseUs.map((f, i) => {
              const Icon = iconMap[f.icon] || Leaf;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                  className={`group relative p-8 rounded-3xl border border-earth-200/70 overflow-hidden transition-all duration-500 hover:border-brand-600 hover:-translate-y-1 ${
                    i === 0 || i === 4 ? 'bg-brand-800 text-cream' : 'bg-cream'
                  }`}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:rotate-6 group-hover:scale-110 ${
                    i === 0 || i === 4 ? 'bg-cream/15 text-cream' : 'bg-brand-50 text-brand-700'
                  }`}>
                    <Icon size={24} />
                  </div>
                  <h3 className={`font-display text-2xl mb-3 ${i === 0 || i === 4 ? 'text-cream' : 'text-brand-900'}`}>{f.title}</h3>
                  <p className={`text-sm leading-relaxed ${i === 0 || i === 4 ? 'text-brand-100/80' : 'text-earth-700'}`}>{f.desc}</p>
                  <div className="absolute -right-6 -bottom-6 text-[140px] font-display font-bold leading-none opacity-5 pointer-events-none">
                    0{i + 1}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="py-20 md:py-32 px-5 md:px-8 bg-beige">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-brand-600 font-semibold mb-4">— From the Farm</div>
              <h2 className="font-display text-4xl md:text-6xl text-brand-900 leading-[1.05]">
                Life at the <span className="italic font-light text-gradient">plantation.</span>
              </h2>
            </div>
            <Link to="/gallery" className="link-underline text-brand-800 font-medium text-base flex items-center gap-2">
              Full gallery <ArrowUpRight size={16} />
            </Link>
          </div>
          <GalleryGrid images={galleryImages.slice(0, 6)} cols={3} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14 text-center mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-brand-600 font-semibold mb-4">— Farmer Stories</div>
            <h2 className="font-display text-4xl md:text-6xl text-brand-900 leading-[1.05]">
              Trusted across <span className="italic font-light text-gradient">India.</span>
            </h2>
          </div>
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
