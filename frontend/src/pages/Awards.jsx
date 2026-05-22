import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, ShieldCheck, Trophy } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import CTASection from '../components/CTASection';

const Awards = () => {
  const awards = [
    {
      year: "2008",
      title: "First ISO 9001 Certified Nutmeg Nursery",
      issuer: "International Standards Organization",
      desc: "Setting the gold standard for nutmeg cultivation in India.",
      icon: ShieldCheck
    },
    {
      year: "2015",
      title: "Best Commercial Nursery Award",
      issuer: "Kerala State Agriculture Department",
      desc: "Recognized for outstanding contribution to the state's spice production.",
      icon: Trophy
    },
    {
      year: "2020",
      title: "Innovative Farmer Award",
      issuer: "ICAR - Indian Institute of Spices Research",
      desc: "Honored for pioneering advanced crown-budding techniques.",
      icon: Star
    },
    {
      year: "2023",
      title: "Export Excellence Approval",
      issuer: "Spices Board of India",
      desc: "Certified quality standards for international plant distribution.",
      icon: Award
    }
  ];

  return (
    <div>
      {/* Page header */}
      <section className="relative py-24 md:py-32 px-5 md:px-8 bg-brand-900 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/images/awards-bg.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900/60 to-brand-900" />
        <div className="relative max-w-4xl mx-auto text-center text-cream">
          <div className="text-xs uppercase tracking-[0.3em] text-brand-300 font-semibold mb-4">Excellence Recognized</div>
          <h1 className="font-display text-4xl md:text-6xl leading-tight mb-5">
            Four Decades of Award-Winning Quality
          </h1>
          <p className="text-brand-100/85 text-base md:text-lg max-w-2xl mx-auto">
            Our commitment to quality has been recognized by national and international agricultural bodies.
          </p>
        </div>
      </section>

      {/* Awards Grid */}
      <section className="py-20 md:py-28 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            eyebrow="Our Credentials"
            title="Certifications & Accolades"
            subtitle="We don't just promise quality; we've been certified for it by the highest authorities."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {awards.map((award, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-cream rounded-3xl p-8 border border-earth-200/70 hover:shadow-xl hover:shadow-earth-200/50 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-700 flex items-center justify-center mb-6 group-hover:bg-brand-700 group-hover:text-cream transition-colors">
                  <award.icon size={28} />
                </div>
                <div className="text-brand-600 font-bold text-sm mb-2">{award.year}</div>
                <h3 className="font-display text-xl text-brand-900 mb-3 leading-tight">{award.title}</h3>
                <div className="text-earth-600 font-semibold text-xs uppercase tracking-wider mb-4">{award.issuer}</div>
                <p className="text-earth-700 text-sm leading-relaxed">{award.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation Details */}
      <section className="py-20 md:py-28 px-5 md:px-8 bg-beige">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle 
              eyebrow="Quality Standards"
              title="India's First ISO 9001:2008 Certified Nutmeg Nursery"
              align="left"
            />
            <p className="text-earth-700 text-base md:text-lg mb-6">
              When we earned our ISO certification in 2008, it wasn't just a certificate on the wall. It was a commitment to the farmers of India that every sapling from Kinattukara follows a rigorous, quality-controlled process.
            </p>
            <ul className="space-y-4">
              {[
                "Authentic mother plant selection",
                "Scientifically proven grafting methods",
                "Disease-free primary growth environment",
                "Standardized root-stock development"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-center text-brand-800 font-medium">
                  <div className="w-6 h-6 rounded-full bg-brand-200 flex items-center justify-center text-brand-800 text-xs">✓</div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-brand-900 rounded-[2rem] p-12 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10">
                <ShieldCheck size={200} className="text-cream" />
             </div>
             <h3 className="font-display text-3xl text-cream mb-6 relative z-10">Trusted by over 12,000 farmers across 8 Indian states.</h3>
             <p className="text-brand-200 mb-8 relative z-10">Our awards are a reflection of the trust our farming community places in us. We continue to innovate to ensure your plantation's success.</p>
             <div className="flex gap-4 relative z-10">
                <div className="bg-brand-800/80 rounded-2xl p-4 border border-brand-700">
                    <div className="text-brand-300 text-xs mb-1">State Approved</div>
                    <div className="text-cream font-bold">Kerala Agri Board</div>
                </div>
                <div className="bg-brand-800/80 rounded-2xl p-4 border border-brand-700">
                    <div className="text-brand-300 text-xs mb-1">Research Partner</div>
                    <div className="text-cream font-bold">IISR Kozhikode</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Certificate Highlight Section */}
      <section className="py-20 md:py-32 px-5 md:px-8 bg-brand-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="text-xs uppercase tracking-[0.3em] text-brand-600 font-bold mb-4">Official Certification</div>
            <h2 className="font-display text-3xl md:text-5xl text-brand-900 mb-6 leading-tight">
              A Testament to Our Commitment to Quality
            </h2>
            <p className="text-earth-700 text-lg mb-8 leading-relaxed">
              Our ISO 9001:2008 Quality Management System certification covers the <strong>"Production and Supply of Budded Polybag Nutmeg Plants."</strong> Issued by British Certifications Inc., this accreditation validates our adherence to international standards in horticultural excellence.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4 p-5 bg-cream rounded-2xl border border-brand-200">
                <div className="w-10 h-10 rounded-full bg-brand-100 text-brand-800 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <div className="font-bold text-brand-900">Certificate No: 12460</div>
                  <div className="text-sm text-earth-600">Issued by British Certifications Inc.</div>
                </div>
              </div>
              <div className="flex gap-4 p-5 bg-cream rounded-2xl border border-brand-200">
                <div className="w-10 h-10 rounded-full bg-brand-100 text-brand-800 flex items-center justify-center flex-shrink-0">
                  <Star size={20} />
                </div>
                <div>
                  <div className="font-bold text-brand-900">Valid Excellence</div>
                  <div className="text-sm text-earth-600">Standardized auditing for over 15 years.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group cursor-zoom-in"
            >
              <div className="absolute -inset-4 bg-brand-900/5 rounded-[3rem] blur-2xl group-hover:bg-brand-900/10 transition-colors" />
              <div className="relative bg-white p-6 rounded-[2.5rem] shadow-2xl shadow-brand-900/10 border-4 border-white overflow-hidden">
                <img 
                  src="/iso-certificate.jpg" 
                  alt="ISO 9001:2008 Certificate" 
                  className="w-full h-auto rounded-2xl"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/certificate-placeholder.png";
                  }}
                />
                <div className="absolute inset-0 bg-brand-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-cream text-brand-900 px-6 py-3 rounded-full font-bold shadow-xl">
                    View Full Certificate
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Awards;
