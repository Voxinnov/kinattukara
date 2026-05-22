import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Sprout, Sun, Thermometer, Wind, Shovel, ShieldCheck } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import CTASection from '../components/CTASection';

const PlantingTips = () => {
  const categories = [
    {
      title: "Site Selection",
      icon: Sun,
      tips: [
        "Select a well-drained loamy soil with high organic matter.",
        "Ensure the site has partial shade for young saplings.",
        "Avoid water-logged areas to prevent root rot.",
        "Identify northern or eastern slopes for optimal light."
      ]
    },
    {
      title: "Pit Preparation",
      icon: Shovel,
      tips: [
        "Dig pits of size 60cm x 60cm x 60cm for Nutmeg.",
        "Fill the pits with 1:1:1 mixture of topsoil, sand, and compost.",
        "Add 500g of rock phosphate per pit for root development.",
        "Pits should be prepared at least 15 days before planting."
      ]
    },
    {
      title: "Water Management",
      icon: Droplets,
      tips: [
        "Irrigate young plants once in 2 days during summer.",
        "Drip irrigation is highly recommended for stable yields.",
        "Mulching (using dry leaves) helps retain soil moisture.",
        "Avoid over-watering to keep soil aerated."
      ]
    },
    {
      title: "Disease Control",
      icon: ShieldCheck,
      tips: [
        "Inspect for leaf blight and root rot during monsoon.",
        "Use Bordeaux mixture (1%) as a preventive spray.",
        "Maintain proper spacing between plants for ventilation.",
        "Remove and burn any infected branches immediately."
      ]
    }
  ];

  const seasonalTips = [
    { season: "Monsoon (June-Aug)", task: "Planting season. Ensure proper drainage to avoid water-logging.", icon: Wind },
    { season: "Summer (Feb-May)", task: "Critical watering period. Mulch heavily to protect roots.", icon: Thermometer },
    { season: "Post-Monsoon (Sept-Dec)", task: "Fertilizer application (Organic manure & Bio-fertilizers).", icon: Sprout }
  ];

  return (
    <div>
      {/* Page header */}
      <section className="relative py-24 md:py-32 px-5 md:px-8 bg-brand-900 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/2.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900/60 to-brand-900" />
        <div className="relative max-w-4xl mx-auto text-center text-cream">
          <div className="text-xs uppercase tracking-[0.3em] text-brand-300 font-semibold mb-4">Expert Farming Guide</div>
          <h1 className="font-display text-4xl md:text-6xl leading-tight mb-5">
            Success Begins with the Right Start
          </h1>
          <p className="text-brand-100/85 text-base md:text-lg max-w-2xl mx-auto">
            Practical advice from four decades of field experience to ensure your nutmeg plantation thrives from the very first day.
          </p>
        </div>
      </section>

      {/* Main Guide Grid */}
      <section className="py-20 md:py-28 px-5 md:px-8 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            eyebrow="Fundamental Tips"
            title="The Kinattukara Planting Protocol"
            subtitle="Follow these essential guidelines to maximize the survival and yield of your premium nutmeg saplings."
          />
          
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            {categories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-cream rounded-[2.5rem] p-8 md:p-12 border border-earth-200/70"
              >
                <div className="flex items-center gap-5 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-brand-700 text-cream flex items-center justify-center">
                        <cat.icon size={26} />
                    </div>
                    <h3 className="font-display text-3xl text-brand-900">{cat.title}</h3>
                </div>
                <ul className="space-y-4">
                    {cat.tips.map((tip, idx) => (
                        <li key={idx} className="flex gap-4 items-start text-earth-700 text-base leading-relaxed">
                            <div className="w-2 h-2 rounded-full bg-brand-400 mt-2.5 flex-shrink-0" />
                            {tip}
                        </li>
                    ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Calendar */}
      <section className="py-20 md:py-28 px-5 md:px-8 bg-brand-50/50">
        <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="font-display text-4xl text-brand-900 mb-4 font-bold">The Farmer's Calendar</h2>
            <p className="text-earth-600 max-w-2xl mx-auto">Timing is everything. Plan your nursery and plantation activities according to Kerala's natural rhythm.</p>
        </div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
            {seasonalTips.map((tip, i) => (
                <div key={i} className="bg-cream p-8 rounded-3xl border border-brand-200 text-center shadow-lg shadow-brand-900/5">
                    <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center mx-auto mb-6">
                        <tip.icon size={20} />
                    </div>
                    <div className="text-brand-900 font-bold text-lg mb-2">{tip.season}</div>
                    <p className="text-earth-700 text-sm">{tip.task}</p>
                </div>
            ))}
        </div>
      </section>

      {/* Consultant CTA */}
      <section className="py-20 px-5 md:px-8">
        <div className="max-w-4xl mx-auto rounded-[3rem] bg-brand-900 p-10 md:p-16 flex flex-col items-center text-center text-cream">
            <h3 className="font-display text-4xl mb-6">Need a Site Visit?</h3>
            <p className="text-brand-200 text-lg mb-10 max-w-2xl">
                Our experts can visit your farm to help with site selection, pit mapping, and overall plantation layout planning.
            </p>
            <div className="flex gap-4">
                <button className="bg-cream text-brand-900 px-8 py-4 rounded-full font-bold hover:bg-brand-100 transition-colors">Book Consultation</button>
                <button className="border border-brand-500 text-brand-200 px-8 py-4 rounded-full font-bold hover:bg-brand-800 transition-colors">Download Full Guide</button>
            </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default PlantingTips;
