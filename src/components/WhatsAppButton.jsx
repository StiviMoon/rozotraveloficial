import React, { useState } from 'react';
import { MessageCircle, Plus, X, Share2 } from 'lucide-react';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Redes Sociales desplegables */}
      <div className={`flex flex-col gap-3 transition-all duration-300 origin-bottom ${isOpen ? 'scale-100 opacity-100 mb-2' : 'scale-0 opacity-0 h-0 overflow-hidden'}`}>
        <a 
          href="https://www.facebook.com/rozotravel?locale=es_LA" 
          target="_blank" 
          rel="noreferrer"
          className="bg-[#1877F2] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform tooltip-trigger relative group"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          <span className="absolute right-14 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">Facebook</span>
        </a>
        
        <a 
          href="https://www.instagram.com/rozotravel_oficial" 
          target="_blank" 
          rel="noreferrer"
          className="bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform relative group"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          <span className="absolute right-14 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">Instagram</span>
        </a>

        <a 
          href="https://www.tiktok.com/@rozotravel?lang=es-419" 
          target="_blank" 
          rel="noreferrer"
          className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform relative group"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
          <span className="absolute right-14 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">TikTok</span>
        </a>

        <a 
          href="https://wa.me/573189332134?text=🌴%20¡Hola!%20Quisiera%20más%20información." 
          target="_blank" 
          rel="noreferrer"
          className="bg-[#25D366] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform relative group"
        >
          <MessageCircle size={24} />
          <span className="absolute right-14 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">WhatsApp</span>
        </a>
      </div>

      {/* Botón Principal */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-orange text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50 relative"
        aria-label="Toggle Social Menu"
      >
        <div className={`transition-transform duration-300 absolute ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}>
          <Share2 size={26} />
        </div>
        <div className={`transition-transform duration-300 absolute ${isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`}>
          <X size={30} />
        </div>
      </button>
    </div>
  );
};

export default WhatsAppButton;
