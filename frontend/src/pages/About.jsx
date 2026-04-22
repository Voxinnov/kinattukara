import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Target, Eye, Calendar } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import CTASection from '../components/CTASection';
import { aboutContent, stats } from '../data/mock';

const About = () => {
  return (
    <div>
      {/* Page header */}
      <section className="relative py-24 md:py-32 px-5 md:px-8 bg-brand-900 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1495107334309-fcf20504a5ab"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900/70 to-brand-900" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-brand-300 font-semibold mb-4">About Kinattukara</div>
          <h1 className="font-display text-4xl md:text-6xl text-cream leading-tight mb-5">
            Four decades of nurturing India's finest nutmeg
          </h1>
          <p className="text-brand-100/85 text-base md:text-lg max-w-2xl mx-auto">
            A family-run estate. A scientific approach. A simple commitment to every farmer who trusts us.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 px-5 md:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2">
            <img
              src="https://images.pexels.com/photos/29039798/pexels-photo-29039798.jpeg"
              alt="Our estate"
              className="rounded-3xl w-full aspect-[4/5] object-cover"
            />
          </div>
          <div className="lg:col-span-3">
            <SectionTitle
              eyebrow="Our Story"
              title="From a small family farm to India's most trusted nursery"
              align="left"
            />
            <p className="text-earth-700 text-base md:text-lg leading-relaxed mb-5">
              {aboutContent.story}
            </p>
            <p className="text-earth-700 text-base md:text-lg leading-relaxed">
              Founded by <span className="text-brand-800 font-semibold">{aboutContent.founder}</span>, our nursery has
              grown from a humble family operation into a 120-acre estate that combines traditional Kerala agriculture
              with modern scientific practices.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 px-5 md:px-8 bg-beige">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {[
            { icon: Target, title: 'Our Mission', text: aboutContent.mission },
            { icon: Eye, title: 'Our Vision', text: aboutContent.vision },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-cream rounded-3xl p-8 md:p-10 border border-earth-200/70"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-600 text-cream flex items-center justify-center mb-5">
                <item.icon size={24} />
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-brand-900 mb-4">{item.title}</h3>
              <p className="text-earth-700 text-base leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            eyebrow="Our Journey"
            title="Milestones that shaped us"
            subtitle="Every decade has brought new learnings, new partnerships, and stronger roots."
          />
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-earth-300/60 md:-translate-x-px" />
            {aboutContent.milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5 }}
                className={`relative flex md:items-center mb-10 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="hidden md:block md:w-1/2" />
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-brand-600 md:-translate-x-1/2 mt-2 ring-4 ring-cream" />
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                  <div className="bg-cream rounded-2xl p-6 border border-earth-200/70">
                    <div className="flex items-center gap-2 text-brand-600 text-sm font-semibold mb-1">
                      <Calendar size={14} />
                      {m.year}
                    </div>
                    <p className="text-earth-800 leading-relaxed">{m.event}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-900 py-16 px-5 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-4xl md:text-6xl text-cream font-medium">{s.value}</div>
              <div className="text-brand-300 text-xs md:text-sm uppercase tracking-wider mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default About;
