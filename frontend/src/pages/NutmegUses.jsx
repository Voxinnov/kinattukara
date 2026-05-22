import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, HeartPulse, Sparkles, Droplets } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import CTASection from '../components/CTASection';

const NutmegUses = () => {
  const uses = [
    {
      title: "Culinary Spices",
      icon: Utensils,
      desc: "Nutmeg and Mace are prized globally for their warm, nutty flavor. Used extensively in desserts, savory dishes, and traditional Kerala cuisine.",
      points: ["Bakery & Desserts", "Sausages & Meats", "Flavoring Sauces", "Beverages & Cocktails"]
    },
    {
      title: "Medicinal Values",
      icon: HeartPulse,
      desc: "In Ayurveda, Nutmeg (Jathikka) is valued for its calming and healing properties. Known for improving sleep and digestive health.",
      points: ["Digestive Aid", "Sleep Inducer", "Brain Health", "Joint Pain Relief"]
    },
    {
      title: "Essential Oils",
      icon: Droplets,
      desc: "Steam distillation of nutmeg kernels yields a fragrant essential oil used in pharmaceuticals and wellness products.",
      points: ["Aromatherapy", "Oral Care Products", "Cough Syrups", "Massage Oils"]
    },
    {
      title: "Cosmetic Industry",
      icon: Sparkles,
      desc: "Nutmeg extract is a natural skin-clearing agent, used and valued for its anti-inflammatory and anti-bacterial benefits.",
      points: ["Anti-acne Serums", "Soap Manufacturing", "Perfumes", "Skin Brightening"]
    }
  ];

  return (
    <div>
      {/* Page header */}
      <section className="relative py-24 md:py-32 px-5 md:px-8 bg-brand-900 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/images/nutmeg-uses-bg.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900/60 to-brand-900" />
        <div className="relative max-w-4xl mx-auto text-center text-cream">
          <div className="text-xs uppercase tracking-[0.3em] text-brand-300 font-semibold mb-4">The King of Spices</div>
          <h1 className="font-display text-4xl md:text-6xl leading-tight mb-5">
            Beyond the Spice Rack: The Uses of Nutmeg
          </h1>
          <p className="text-brand-100/85 text-base md:text-lg max-w-2xl mx-auto">
            From the world's finest kitchens to ancient healing wisdom, discover the diverse utility of Nutmeg and Mace.
          </p>
        </div>
      </section>

      {/* Uses Layout */}
      <section className="py-20 md:py-28 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            eyebrow="Versatile Utility"
            title="The Multi-faceted Benefits of Jathikka"
            subtitle="Every part of the nutmeg fruit—the nut, the mace (aril), and even the pericarp—has significant economic value."
          />
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {uses.map((use, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-cream rounded-[2.5rem] p-10 border border-earth-200/70 overflow-hidden relative group"
              >
                <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-brand-50 rounded-full group-hover:scale-125 transition-transform duration-500" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-3xl bg-brand-700 text-cream flex items-center justify-center mb-8 shadow-lg shadow-brand-200">
                    <use.icon size={32} />
                  </div>
                  <h3 className="font-display text-3xl text-brand-900 mb-4">{use.title}</h3>
                  <p className="text-earth-700 text-lg mb-8 leading-relaxed">
                    {use.desc}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {use.points.map((point, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-brand-800 font-medium text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Insights */}
      <section className="py-20 md:py-16 px-5 md:px-8 bg-brand-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3">
                <img src="/images/nutmeg-mace.jpg" alt="Nutmeg mace" className="rounded-3xl w-full aspect-square object-cover" />
            </div>
            <div className="md:w-2/3">
                 <h2 className="font-display text-3xl md:text-5xl text-cream mb-6">Mace: The Golden Veil</h2>
                 <p className="text-brand-200 text-lg mb-8 leading-relaxed">
                    While nutmeg is the seed, Mace (Jathi-pathri) is the crimson-red waxy covering. It is even more delicate and expensive than the nut, prized for its saffron-like color and slightly sweeter flavor profile.
                 </p>
                 <div className="flex flex-wrap gap-4">
                    <div className="bg-brand-800 px-6 py-4 rounded-2xl border border-brand-700">
                        <div className="text-brand-400 text-xs uppercase mb-1">Mace Value</div>
                        <div className="text-cream text-xl font-bold italic">High Market Value</div>
                    </div>
                    <div className="bg-brand-800 px-6 py-4 rounded-2xl border border-brand-700">
                        <div className="text-brand-400 text-xs uppercase mb-1">Commercial Use</div>
                        <div className="text-cream text-xl font-bold">Perfumes & Food</div>
                    </div>
                 </div>
            </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default NutmegUses;
