import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages } from '../data/mock';

const GalleryGrid = ({ images = galleryImages, cols = 3 }) => {
  const [active, setActive] = useState(null);

  const close = () => setActive(null);
  const next = () => setActive((a) => (a + 1) % images.length);
  const prev = () => setActive((a) => (a - 1 + images.length) % images.length);

  return (
    <>
      <div className={`grid grid-cols-2 ${cols === 4 ? 'md:grid-cols-4' : 'md:grid-cols-3'} gap-3 md:gap-4`}>
        {images.map((img, i) => (
          <motion.button
            key={img.id}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: (i % 6) * 0.05 }}
            onClick={() => setActive(i)}
            className={`group relative overflow-hidden rounded-2xl bg-beige ${
              i % 5 === 0 ? 'md:row-span-2 aspect-[3/4] md:aspect-auto' : 'aspect-[4/3]'
            }`}
          >
            <img
              src={img.src}
              alt={img.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-cream text-sm font-medium">{img.caption}</span>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-brand-900/95 backdrop-blur flex items-center justify-center p-4"
            onClick={close}
          >
            <button onClick={close} className="absolute top-5 right-5 text-cream p-2" aria-label="close">
              <X size={28} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-5 md:left-10 text-cream p-2 hover:bg-cream/10 rounded-full"
              aria-label="previous"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-5 md:right-10 text-cream p-2 hover:bg-cream/10 rounded-full"
              aria-label="next"
            >
              <ChevronRight size={32} />
            </button>
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[active].src}
                alt={images[active].caption}
                className="w-full max-h-[80vh] object-contain rounded-xl"
              />
              <p className="text-cream text-center mt-4 text-sm">{images[active].caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryGrid;
