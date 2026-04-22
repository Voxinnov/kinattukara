import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { siteInfo, navLinks } from '../data/mock';

const Footer = () => {
  return (
    <footer className="bg-brand-900 text-brand-100 pt-16 pb-8 mt-16">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Link to="/" className="flex items-center gap-2.5 mb-4">
            <div className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center text-cream">
              <Leaf size={20} />
            </div>
            <div className="leading-tight">
              <div className="font-display text-xl font-semibold text-cream">Kinattukara</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-brand-300">Since 1985</div>
            </div>
          </Link>
          <p className="text-sm text-brand-200/80 leading-relaxed">
            India's first ISO 9001 certified nutmeg nursery. Cultivating premium saplings with
            tradition, science, and heart for four decades.
          </p>
          <div className="flex gap-3 mt-5">
            {[
              { icon: Facebook, url: siteInfo.socials.facebook },
              { icon: Instagram, url: siteInfo.socials.instagram },
              { icon: Youtube, url: siteInfo.socials.youtube },
            ].map((s, i) => (
              <a
                key={i}
                href={s.url}
                className="w-9 h-9 rounded-full bg-brand-800 hover:bg-brand-600 flex items-center justify-center transition-colors"
                aria-label="social"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg text-cream mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-brand-200/80 hover:text-cream transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-cream mb-4">Our Products</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/products" className="text-brand-200/80 hover:text-cream">Nutmeg Plants</Link></li>
            <li><Link to="/products" className="text-brand-200/80 hover:text-cream">Fruit Saplings</Link></li>
            <li><Link to="/products" className="text-brand-200/80 hover:text-cream">Spice Plants</Link></li>
            <li><Link to="/products" className="text-brand-200/80 hover:text-cream">Ornamental Plants</Link></li>
            <li><Link to="/blog" className="text-brand-200/80 hover:text-cream">Farming Guide</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-cream mb-4">Get In Touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3 items-start">
              <MapPin size={16} className="text-brand-400 mt-0.5 flex-shrink-0" />
              <span className="text-brand-200/80">{siteInfo.address}</span>
            </li>
            <li className="flex gap-3 items-start">
              <Phone size={16} className="text-brand-400 mt-0.5 flex-shrink-0" />
              <a href={`tel:${siteInfo.phone}`} className="text-brand-200/80 hover:text-cream">{siteInfo.phone}</a>
            </li>
            <li className="flex gap-3 items-start">
              <Mail size={16} className="text-brand-400 mt-0.5 flex-shrink-0" />
              <a href={`mailto:${siteInfo.email}`} className="text-brand-200/80 hover:text-cream break-all">{siteInfo.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 mt-12 pt-6 border-t border-brand-800 flex flex-col md:flex-row justify-between gap-3 text-xs text-brand-300">
        <p>© {new Date().getFullYear()} Kinattukara Nursery. All rights reserved.</p>
        <p>Crafted with care for Indian farmers 🌱</p>
      </div>
    </footer>
  );
};

export default Footer;
