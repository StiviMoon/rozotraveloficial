import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#gastronomia', label: 'Menú' },
  { href: '#fincas', label: 'Fincas' },
  { href: '#contacto', label: 'Contacto' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'border-b border-rozo-dark/8 bg-rozo-cream/95 py-2 shadow-[0_8px_30px_rgba(43,43,43,0.06)]'
          : 'border-b border-transparent bg-transparent py-3'
      }`}
    >
      <div className="shell flex items-center justify-between gap-6">
        {/* Brand logo — large, full mark */}
        <a href="#inicio" className="group relative z-10 shrink-0" aria-label="RozoTravel — Inicio">
          <img
            src="/logopng.png"
            alt="RozoTravel"
            width={1024}
            height={1024}
            className={`w-auto object-contain transition-all duration-500 ${
              isScrolled
                ? 'h-[5.6rem] md:h-[6.4rem] lg:h-[7.2rem]'
                : 'h-[6.4rem] md:h-[7.6rem] lg:h-32'
            }`}
            decoding="async"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link ${isScrolled ? 'nav-link-scrolled' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://wa.me/573189332134?text=¡Hola!%20Quiero%20reservar%20con%20RozoTravel"
            target="_blank"
            rel="noreferrer"
            className={`btn rounded-sm ${
              isScrolled
                ? 'bg-rozo-orange text-white hover:bg-[#d4551a]'
                : 'border border-white/60 text-white hover:bg-white hover:text-rozo-dark'
            }`}
          >
            Reservar
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className={`lg:hidden flex h-11 w-11 items-center justify-center rounded-sm ${
            isScrolled ? 'text-rozo-dark' : 'text-white'
          }`}
          aria-label="Abrir menú"
        >
          <Menu size={24} strokeWidth={1.75} />
        </button>
      </div>

      {/* Full-screen mobile menu */}
      <div
        className={`fixed inset-0 z-[60] bg-rozo-dark transition-all duration-500 lg:hidden ${
          mobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="shell flex h-full flex-col py-5">
          <div className="flex items-center justify-between gap-4">
            <img
              src="/logopng.png"
              alt="RozoTravel"
              className="h-16 w-auto object-contain"
            />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="flex h-11 w-11 shrink-0 items-center justify-center text-white"
              aria-label="Cerrar menú"
            >
              <X size={26} strokeWidth={1.75} />
            </button>
          </div>

          <nav className="mt-14 flex flex-col gap-1">
            {links.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-white/10 py-4 font-display text-3xl font-medium text-white/90 transition-colors hover:text-rozo-amber"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto space-y-4 pb-8">
            <a
              href="https://wa.me/573189332134"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileOpen(false)}
              className="btn-primary w-full rounded-sm"
            >
              Reservar por WhatsApp
            </a>
            <p className="text-center font-sans text-xs tracking-wide text-white/40">
              Rozó · Valle del Cauca
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
