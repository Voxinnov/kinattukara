import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import { siteInfo } from '../data/mock';

const Contact = () => {
  const info = [
    { icon: MapPin, title: 'Our Farm', desc: siteInfo.address },
    { icon: Phone, title: 'Call Us', desc: siteInfo.phone, href: `tel:${siteInfo.phone}` },
    { icon: Mail, title: 'Email', desc: siteInfo.email, href: `mailto:${siteInfo.email}` },
    { icon: Clock, title: 'Farm Hours', desc: 'Mon – Sat, 8:00 AM – 6:00 PM' },
  ];

  return (
    <div>
      <section className="pt-14 pb-10 md:pt-20 md:pb-14 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="Contact Us"
            title="We'd love to hear from you"
            subtitle="Questions, visits, bulk orders, or farming advice — reach out any way you like. We reply within 24 hours."
          />
        </div>
      </section>

      <section className="pb-20 md:pb-28 px-5 md:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
          {/* Info cards */}
          <div>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {info.map((item, i) => {
                const content = (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-beige rounded-2xl p-6 border border-earth-200/70 h-full"
                  >
                    <div className="w-11 h-11 rounded-xl bg-brand-600 text-cream flex items-center justify-center mb-4">
                      <item.icon size={18} />
                    </div>
                    <h4 className="font-semibold text-brand-900 mb-1">{item.title}</h4>
                    <p className="text-earth-700 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                );
                return item.href ? (
                  <a key={i} href={item.href} className="hover:scale-[1.02] transition-transform">{content}</a>
                ) : (
                  <div key={i}>{content}</div>
                );
              })}
            </div>

            <a
              href={`https://wa.me/${siteInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#25D366] hover:bg-[#1ebe5b] text-white rounded-2xl p-6 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle size={22} />
                </div>
                <div>
                  <div className="font-semibold text-lg">Chat on WhatsApp</div>
                  <div className="text-sm opacity-90">Fastest way to reach us — usually replies in minutes.</div>
                </div>
              </div>
            </a>

            {/* Map */}
            <div className="mt-6 rounded-2xl overflow-hidden border border-earth-200/70 aspect-[16/10]">
              <iframe
                title="Kinattukara Nursery Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15707.00000000000!2d76.213!3d10.527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zS2VyYWxh!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-beige rounded-3xl p-8 md:p-10 border border-earth-200/70">
            <h3 className="font-display text-2xl md:text-3xl text-brand-900 mb-2">Send us a message</h3>
            <p className="text-earth-700 text-sm mb-7">Fill the form and we'll get back to you shortly.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
