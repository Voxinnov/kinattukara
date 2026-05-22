import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteInfo } from '../data/mock';

const WhatsAppButton = () => {
  const url = `https://wa.me/${siteInfo.whatsapp}?text=${encodeURIComponent(
    "Hi Kinattukara Nursery, I'd like to know more about your plants."
  )}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#1ebe5b] text-white rounded-full shadow-xl shadow-black/15 h-14 w-14 md:h-16 md:w-16 flex items-center justify-center transition-transform duration-200 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} />
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
    </a>
  );
};

export default WhatsAppButton;
