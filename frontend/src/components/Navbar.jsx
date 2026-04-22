import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Leaf, Phone } from 'lucide-react';
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
      {/* Top info bar */}
      <div className="hidden md:flex bg-brand-800 text-brand-50 text-xs py-2 px-8 justify-between items-center">
        <span>ISO 9001 Certified  •  India's First Nutmeg Nursery</span>
        <div className="flex items-center gap-5">
          <a href={`tel:${siteInfo.phone}`} className="flex items-center gap-1.5 hover:text-brand-200 transition-colors">
            <Phone size={13} /> {siteInfo.phone}
          </a>
          <span className="opacity-70">Thrissur, Kerala</span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-cream/95 backdrop-blur shadow-sm' : 'bg-cream'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-5 md:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center text-cream sway">
              <Leaf size={20} />
            </div>
            <div className="leading-tight">
              <div className="font-display text-xl font-semibold text-brand-800">Kinattukara</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-earth-600">Nursery Est. 1985</div>
            </div>
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                      isActive
                        ? 'text-brand-700 bg-brand-50'
                        : 'text-earth-800 hover:text-brand-700 hover:bg-brand-50/60'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Link to="/inquiry">
              <Button className="bg-brand-600 hover:bg-brand-700 text-cream rounded-full px-6">
                Request Quote
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-brand-800"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile menu */}
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
                      isActive ? 'bg-brand-50 text-brand-700 font-semibold' : 'text-earth-800'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <Link to="/inquiry">
                <Button className="w-full bg-brand-600 hover:bg-brand-700 text-cream rounded-full">
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
