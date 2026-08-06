import React from 'react';
import BrandImage from './BrandImage';

const Testimonials = () => {
  return (
    <section className="section grain relative overflow-hidden bg-[#1a3d1c] text-white">
      <div className="shell relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <img
            src="/logopng.png"
            alt="RozoTravel"
            className="mx-auto mb-8 h-20 w-auto object-contain md:h-24"
            decoding="async"
          />
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.38em] text-rozo-amber">
            Testimonios
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Lo que cuentan{' '}
            <span className="font-script text-rozo-amber">nuestros clientes</span>
          </h2>

          <blockquote className="mt-12">
            <p className="font-display text-2xl font-normal italic leading-snug text-white/90 md:text-3xl md:leading-snug">
              “Organizamos la integración de la empresa en una finca de RozoTravel.
              Salón perfecto, asado llanero delicioso y todo el montaje listo.
              Hicieron que cotizar y reservar fuera fácil.”
            </p>
          </blockquote>

          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="h-14 w-14 shrink-0 overflow-hidden rounded-sm ring-1 ring-white/20">
              <BrandImage
                src="/images/testimonios/perfil-1.jpg"
                alt="María Gómez"
                tone="green"
              />
            </div>
            <div className="text-left">
              <p className="font-display text-lg font-semibold">María Gómez</p>
              <p className="font-sans text-xs uppercase tracking-[0.18em] text-white/50">
                Evento empresarial · Valle del Cauca
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
