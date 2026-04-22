import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Leaf, Phone, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { navLinks, siteInfo } from '../data/mock';
import { Button } from './ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <>
      <div className="hidden md:flex bg-brand-900 text-brand-100 text-xs py-2 px-8 justify-between items-center">
        <span className="tracking-wider">ISO 9001 Certified • India's First Nutmeg Nursery</span>
        <div className="flex items-center gap-5">
          <a href={`tel:${siteInfo.phone}`} className="flex items-center gap-1.5 hover:text-cream transition-colors link-underline">
            <Phone size={13} /> {siteInfo.phone}
          </a>
          <span className="opacity-70">Thrissur, Kerala</span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-cream/85 backdrop-blur-xl shadow-sm' : 'bg-cream'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-5 md:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 15, scale: 1.08 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-11 h-11 rounded-full bg-brand-800 flex items-center justify-center text-cream"
            >
              <Leaf size={20} />
            </motion.div>
            <div className="leading-tight">
              <div className="font-display text-2xl font-medium text-brand-900">Kinattukara</div>
              <div className="text-[9px] uppercase tracking-[0.28em] text-earth-600">Nursery · Est. 1985</div>
            </div>
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive ? 'text-brand-800' : 'text-earth-800 hover:text-brand-800'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {isActive && (
                        <motion.span
                          layoutId="nav-indicator"
                          className="absolute left-2 right-2 bottom-0 h-0.5 bg-brand-700 rounded-full"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Link to="/inquiry">
              <Button className="group bg-brand-800 hover:bg-brand-900 text-cream rounded-full pl-5 pr-1.5 py-1.5 h-11">
                <span className="mr-2 text-sm">Get Quote</span>
                <span className="w-8 h-8 rounded-full bg-cream text-brand-800 flex items-center justify-center transition-transform group-hover:rotate-45">
                  <ArrowUpRight size={14} />
                </span>
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-brand-900"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        <div
          className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ${
            isOpen ? 'max-h-[500px]' : 'max-h-0'
          }`}
        >
          <ul className="px-5 pb-6 pt-2 flex flex-col gap-1 bg-cream border-t border-earth-200/60">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `block px-4 py-3 text-base rounded-lg transition-colors ${
                      isActive ? 'bg-brand-50 text-brand-800 font-semibold' : 'text-earth-800'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <Link to="/inquiry">
                <Button className="w-full bg-brand-800 hover:bg-brand-900 text-cream rounded-full">
                  Request Quote
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
