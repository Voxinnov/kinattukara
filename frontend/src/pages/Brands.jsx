import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, Leaf, Wind, ShieldCheck } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import CTASection from '../components/CTASection';

const Brands = () => {
  const brands = [
    {
      name: "Kinattukara Special",
      tagline: "The Yield Champion",
      desc: "Our flagship budded variety. Known for its heavy seeds and thick mace. 400 mace yield 1 kg of dry mace.",
      icon: ShieldCheck,
      color: "bg-brand-700"
    },
    {
      name: "Green Gold",
      tagline: "Organic Excellence",
      desc: "Our range of 100% organic nutmeg plants, nurtured without chemical fertilizers or pesticides.",
      icon: Leaf,
      color: "bg-emerald-700"
    },
    {
      name: "Royal Mangosteen",
      tagline: "The Queen of Fruits",
      desc: "Premium grafted mangosteen saplings. Early fruiting and guaranteed sweet yield from mother plants.",
      icon: Leaf,
      color: "bg-earth-700"
    },
    {
      name: "Nursery Pro",
      tagline: "Farmer Consultation",
      desc: "Our professional services brand offering plantation consulting, grafting workshops, and soil health management.",
      icon: Sprout,
      color: "bg-brand-900"
    }
  ];

  return (
    <div>
      {/* Page header */}
      <section className="relative py-24 md:py-32 px-5 md:px-8 bg-brand-900 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: "url('/1.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900/60 to-brand-900" />
        <div className="relative max-w-4xl mx-auto text-center text-cream">
          <div className="text-xs uppercase tracking-[0.3em] text-brand-300 font-semibold mb-4">Our Heritage Brands</div>
          <h1 className="font-display text-4xl md:text-6xl leading-tight mb-5">
            A Legacy of Agricultural Innovation
          </h1>
          <p className="text-brand-100/85 text-base md:text-lg max-w-2xl mx-auto">
            From premium budded saplings to expert consultancy, our brands represent the pinnacle of Kerala's nursery standards.
          </p>
        </div>
      </section>

      {/* Brand Grid */}
      <section className="py-20 md:py-28 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            eyebrow="Diverse Portfolio"
            title="Brands Trusted by Farmers"
            subtitle="Each of our brands is dedicated to a specific aspect of modern farming success."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {brands.map((brand, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex flex-col h-full bg-cream rounded-[2rem] border border-earth-200/50 shadow-sm hover:shadow-2xl transition-all duration-300 group"
              >
                <div className={`h-40 ${brand.color} rounded-t-[2rem] p-8 flex items-end relative overflow-hidden`}>
                    <div className="absolute top-4 right-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                        <brand.icon size={120} className="text-cream" />
                    </div>
                   <div className="w-12 h-12 rounded-xl bg-cream/20 backdrop-blur-md text-cream flex items-center justify-center relative z-10">
                        <brand.icon size={24} />
                   </div>
                </div>
                <div className="p-8 flex-grow">
                   <h3 className="font-display text-2xl text-brand-900 mb-1">{brand.name}</h3>
                   <div className="text-brand-600 text-xs font-bold uppercase tracking-widest mb-4 italic opacity-70">{brand.tagline}</div>
                   <p className="text-earth-700 text-sm leading-relaxed">{brand.desc}</p>
                </div>
                <div className="p-8 pt-0 mt-auto">
                    <div className="w-full h-px bg-earth-200/60 mb-6" />
                    <button className="text-brand-800 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                        View Details <span className="text-xl">→</span>
                    </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-20 md:py-28 px-5 md:px-8 bg-beige">
         <div className="max-w-6xl mx-auto rounded-[3rem] bg-brand-800 p-10 md:p-20 relative overflow-hidden">
            <div className="absolute -left-20 -top-20 w-64 h-64 bg-brand-700/50 rounded-full" />
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-brand-700/50 rounded-full" />
            
            <div className="relative z-10 text-center max-w-3xl mx-auto">
                <h2 className="font-display text-3xl md:text-5xl text-cream mb-8">The Kinattukara Seal of Authenticity</h2>
                <p className="text-brand-100 text-lg mb-10 leading-relaxed">
                    Every product that leaves our nursery carries the Kinattukara Promise. We ensure that our grafting techniques are 100% authentic, our root-stocks are healthy, and our consultations are based on four decades of field experience.
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                    {["ISO Certified", "Eco-Friendly", "Farmer First", "Kerala Authenticity"].map((tag, i) => (
                        <span key={i} className="px-6 py-2 rounded-full border border-brand-500/50 text-brand-200 text-sm font-medium bg-brand-900/30">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
         </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Brands;
