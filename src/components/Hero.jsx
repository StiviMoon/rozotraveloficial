import React from 'react';
import BrandImage from './BrandImage';

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative h-[100svh] min-h-[680px] max-h-[1100px] overflow-hidden bg-rozo-dark"
    >
      <div className="absolute inset-0 z-0">
        <BrandImage
          src="/images/hero/fondo.jpg"
          alt="Finca con piscina al atardecer en Rozó"
          tone="dark"
          imgClassName="hero-kenburns"
        />
        <div
          className="absolute inset-0 z-[2]"
          style={{
            background:
              'linear-gradient(105deg, rgba(20,18,14,0.90) 0%, rgba(20,18,14,0.58) 36%, rgba(20,18,14,0.22) 62%, rgba(20,18,14,0.35) 100%), linear-gradient(to top, rgba(20,18,14,0.78) 0%, transparent 45%)',
          }}
        />
      </div>

      <div className="relative z-10 flex h-full items-end">
        <div className="shell w-full pb-16 pt-28 md:pb-24 lg:pb-28">
          <div className="grid w-full items-end gap-6 lg:grid-cols-12 lg:gap-8">
            {/* Copy — left */}
            <div className="order-2 max-w-xl lg:order-1 lg:col-span-6 xl:col-span-5">
              <h1 className="hero-reveal font-display text-[2.6rem] font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[4.75rem]">
                Vive el Valle
                <span className="mt-1 block font-normal italic text-white/95">
                  desde{' '}
                  <span className="font-script not-italic text-rozo-amber text-[1.15em]">
                    Rozó
                  </span>
                </span>
              </h1>

              <p className="hero-reveal hero-reveal-delay-1 mt-5 max-w-md font-sans text-base font-light leading-relaxed text-white/80 md:text-lg">
                Pasadías, eventos empresariales y catering en fincas especiales del Valle del Cauca.
              </p>

              <div className="hero-reveal hero-reveal-delay-2 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href="#fincas" className="hero-cta hero-cta-primary rounded-sm">
                  Explorar fincas
                </a>
                <a
                  href="https://wa.me/573189332134?text=¡Hola!%20Quiero%20cotizar%20con%20RozoTravel"
                  target="_blank"
                  rel="noreferrer"
                  className="hero-cta hero-cta-secondary rounded-sm"
                >
                  Cotizar por WhatsApp
                </a>
              </div>

              <div className="hero-reveal hero-reveal-delay-3 mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 font-sans text-xs tracking-wide text-white/55">
                <a href="/portafolio-gastronomia.pdf" target="_blank" rel="noreferrer" className="underline-offset-4 hover:text-white hover:underline">
                  Menú gastronómico
                </a>
                <span className="hidden text-white/25 sm:inline" aria-hidden>·</span>
                <a href="/cotizacion-catering-eventos-2026.pdf" target="_blank" rel="noreferrer" className="underline-offset-4 hover:text-white hover:underline">
                  Cotización 2026
                </a>
              </div>
            </div>

            {/* Brand mark — right, large */}
            <div className="order-1 flex justify-end lg:order-2 lg:col-span-6 xl:col-span-7 lg:justify-end lg:pb-4">
              <img
                src="/logopng.png"
                alt="RozoTravel"
                width={1024}
                height={1024}
                className="hero-reveal h-[min(48vw,240px)] w-auto max-w-[90%] object-contain drop-shadow-[0_12px_40px_rgba(0,0,0,0.45)] sm:h-64 md:h-80 lg:h-[22rem] xl:h-[26rem] 2xl:h-[28rem]"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>

      <a
        href="#nosotros"
        className="absolute bottom-8 left-6 z-10 flex flex-col items-center gap-2 md:left-12"
        aria-label="Bajar al contenido"
      >
        <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/50">Scroll</span>
        <span className="hero-scroll-line block h-10 w-px origin-top bg-white/70" />
      </a>
    </section>
  );
};

export default Hero;
