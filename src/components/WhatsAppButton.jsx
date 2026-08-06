import React, { useState } from 'react';
import { MessageCircle, X, Share2 } from 'lucide-react';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <div
        className={`flex flex-col gap-2 transition-all duration-300 ${
          isOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
        }`}
      >
        <a
          href="https://www.facebook.com/rozotravel?locale=es_LA"
          target="_blank"
          rel="noreferrer"
          className="flex h-11 w-11 items-center justify-center rounded-sm bg-[#1877F2] text-white shadow-lg transition-transform hover:-translate-y-0.5"
          aria-label="Facebook"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
        </a>
        <a
          href="https://www.instagram.com/rozotravel_oficial"
          target="_blank"
          rel="noreferrer"
          className="flex h-11 w-11 items-center justify-center rounded-sm bg-rozo-orange text-white shadow-lg transition-transform hover:-translate-y-0.5"
          aria-label="Instagram"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
        </a>
        <a
          href="https://www.tiktok.com/@rozotravel?lang=es-419"
          target="_blank"
          rel="noreferrer"
          className="flex h-11 w-11 items-center justify-center rounded-sm bg-black text-white shadow-lg transition-transform hover:-translate-y-0.5"
          aria-label="TikTok"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
        </a>
        <a
          href="https://wa.me/573189332134?text=¡Hola!%20Quisiera%20más%20información."
          target="_blank"
          rel="noreferrer"
          className="flex h-11 w-11 items-center justify-center rounded-sm bg-[#25D366] text-white shadow-lg transition-transform hover:-translate-y-0.5"
          aria-label="WhatsApp"
        >
          <MessageCircle size={18} />
        </a>
      </div>

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex h-12 w-12 items-center justify-center rounded-sm bg-rozo-orange text-white shadow-lg transition-colors hover:bg-[#d4551a]"
        aria-label={isOpen ? 'Cerrar redes' : 'Abrir redes'}
      >
        {isOpen ? <X size={22} /> : <Share2 size={20} />}
      </button>
    </div>
  );
};

export default WhatsAppButton;
