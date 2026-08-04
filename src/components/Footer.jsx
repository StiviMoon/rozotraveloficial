import React from 'react';
import { MapPin, MessageCircle, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-rozo-dark text-white pt-16 pb-8 border-t-[6px] border-rozo-green">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
          
          <div className="flex flex-col items-center md:items-start">
            <img src="/logorozotravel.png" alt="RozoTravel" className="h-24 mb-6 bg-white p-3 rounded-2xl shadow-md" />
            <p className="font-script text-rozo-amber text-3xl font-light mb-4">"Más que un servicio, creamos experiencias."</p>
            <p className="text-white/60 text-sm">Tu aliado de confianza en turismo y eventos en el Valle del Cauca.</p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-white border-b border-white/10 pb-2 inline-block">Enlaces Rápidos</h4>
            <ul className="space-y-3 flex flex-col items-center md:items-start">
              <li><a href="#inicio" className="text-white/70 hover:text-rozo-green-light transition-colors flex items-center gap-2"><ChevronRight size={14} className="text-rozo-orange" /> Inicio</a></li>
              <li><a href="#servicios" className="text-white/70 hover:text-rozo-green-light transition-colors flex items-center gap-2"><ChevronRight size={14} className="text-rozo-orange" /> Servicios</a></li>
              <li><a href="#fincas" className="text-white/70 hover:text-rozo-green-light transition-colors flex items-center gap-2"><ChevronRight size={14} className="text-rozo-orange" /> Fincas</a></li>
              <li><a href="#contacto" className="text-white/70 hover:text-rozo-green-light transition-colors flex items-center gap-2"><ChevronRight size={14} className="text-rozo-orange" /> Cotizar</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-white border-b border-white/10 pb-2 inline-block">Contacto</h4>
            <ul className="space-y-4 mb-6 flex flex-col items-center md:items-start">
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="text-rozo-orange mt-1 shrink-0" size={20} />
                <span>Rozó, Valle del Cauca<br/>Colombia</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <MessageCircle className="text-rozo-green-light shrink-0" size={20} />
                <a href="https://wa.me/573189332134" className="hover:text-white transition-colors">+57 318 9332134</a>
              </li>
            </ul>
            
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="https://www.facebook.com/rozotravel?locale=es_LA" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1877F2] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://www.instagram.com/rozotravel_oficial" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://www.tiktok.com/@rozotravel?lang=es-419" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-black transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
              </a>
              <a href="https://wa.me/573189332134" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-white/10 text-white/50 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} RozoTravel. Todos los derechos reservados.</p>
          <a href="https://www.rozotravel.com" className="hover:text-white transition-colors">www.rozotravel.com</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
