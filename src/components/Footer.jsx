import React from 'react';
import { MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-rozo-dark text-white">
      <div className="shell py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <a href="#inicio" className="inline-block" aria-label="RozoTravel">
              <img
                src="/logopng.png"
                alt="RozoTravel"
                width={1024}
                height={1024}
                className="h-28 w-auto object-contain md:h-32"
                decoding="async"
              />
            </a>
            <p className="mt-6 max-w-sm font-script text-2xl text-rozo-amber md:text-3xl">
              Más que un servicio, creamos experiencias.
            </p>
            <p className="mt-4 max-w-sm font-sans text-sm font-light leading-relaxed text-white/45">
              Fincas, catering y eventos empresariales en Rozó y el Valle del Cauca.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-white/35">
              Explorar
            </p>
            <ul className="mt-5 space-y-3 font-sans text-sm text-white/65">
              <li><a href="#inicio" className="hover:text-white">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-white">Servicios</a></li>
              <li><a href="#fincas" className="hover:text-white">Fincas</a></li>
              <li><a href="#gastronomia" className="hover:text-white">Menú</a></li>
              <li><a href="#contacto" className="hover:text-white">Cotizar</a></li>
              <li><a href="/portafolio-gastronomia.pdf" target="_blank" rel="noreferrer" className="hover:text-rozo-amber">Portafolio PDF</a></li>
              <li><a href="/cotizacion-catering-eventos-2026.pdf" target="_blank" rel="noreferrer" className="hover:text-rozo-amber">Cotización 2026</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-white/35">
              Contacto
            </p>
            <ul className="mt-5 space-y-4 font-sans text-sm text-white/65">
              <li className="flex gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-rozo-orange" />
                <span>Rozó, Valle del Cauca, Colombia</span>
              </li>
              <li className="flex gap-3">
                <MessageCircle size={16} className="mt-0.5 shrink-0 text-rozo-green-light" />
                <a href="https://wa.me/573189332134" className="hover:text-white">+57 318 9332134</a>
              </li>
              <li className="flex gap-3">
                <MessageCircle size={16} className="mt-0.5 shrink-0 text-rozo-amber" />
                <a href="https://wa.me/573132018354" className="hover:text-white">+57 313 2018354</a>
              </li>
              <li className="flex gap-3">
                <MessageCircle size={16} className="mt-0.5 shrink-0 text-rozo-amber" />
                <a href="https://wa.me/573157035778" className="hover:text-white">+57 315 7035778</a>
              </li>
            </ul>

            <div className="mt-8 flex gap-3">
              <a
                href="https://www.facebook.com/rozotravel?locale=es_LA"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-sm border border-white/15 text-white/70 transition-colors hover:border-white/40 hover:text-white"
                aria-label="Facebook"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a
                href="https://www.instagram.com/rozotravel_oficial"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-sm border border-white/15 text-white/70 transition-colors hover:border-white/40 hover:text-white"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
              <a
                href="https://www.tiktok.com/@rozotravel?lang=es-419"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-sm border border-white/15 text-white/70 transition-colors hover:border-white/40 hover:text-white"
                aria-label="TikTok"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-8 font-sans text-xs text-white/35 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} RozoTravel. Todos los derechos reservados.</p>
          <a href="https://www.rozotravel.com" className="hover:text-white/70">www.rozotravel.com</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
