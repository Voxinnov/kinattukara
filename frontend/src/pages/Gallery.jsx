import React from 'react';
import SectionTitle from '../components/SectionTitle';
import GalleryGrid from '../components/GalleryGrid';
import CTASection from '../components/CTASection';
import { galleryImages } from '../data/mock';

const Gallery = () => {
  return (
    <div>
      <section className="pt-14 pb-10 md:pt-20 md:pb-14 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="Photo Gallery"
            title="Life at our plantation"
            subtitle="Moments from our nursery, our farmers, and our fields — where every plant begins its journey."
          />
        </div>
      </section>
      <section className="pb-20 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <GalleryGrid images={galleryImages} cols={3} />
        </div>
      </section>
      <CTASection
        title="Visit our estate"
        subtitle="Want to see our plantation in person? We welcome farmers and enthusiasts to tour our 120-acre estate in Thrissur."
        primaryLabel="Schedule a Visit"
        secondaryLabel="Contact Us"
        secondaryTo="/contact"
      />
    </div>
  );
};

export default Gallery;
