import React from 'react';
import BrandImage from './BrandImage';

const images = [
  { src: '/images/galeria/foto-1.jpg', alt: 'Espacio principal', span: 'md:col-span-2 md:row-span-2', tone: 'dark' },
  { src: '/images/galeria/foto-2.jpg', alt: 'Evento social', tone: 'orange' },
  { src: '/images/galeria/foto-3.jpg', alt: 'Gastronomía', tone: 'orange' },
  { src: '/images/galeria/foto-4.jpg', alt: 'Exterior de finca', tone: 'green' },
  { src: '/images/galeria/foto-5.jpg', alt: 'Experiencia en familia', tone: 'cream' },
];

const Gallery = () => {
  return (
    <section id="galeria" className="bg-rozo-dark">
      <div className="shell py-16 md:py-20">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.38em] text-rozo-amber">
              Galería
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Atmósfera <span className="italic text-rozo-amber">Rozó</span>
            </h2>
          </div>
          <p className="max-w-sm font-sans text-sm font-light text-white/50 md:text-right">
            Espacios reales para pasadías, eventos y experiencias gastronómicas.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:grid-rows-2 md:gap-3 md:h-[560px]">
          {images.map((img) => (
            <div
              key={img.src}
              className={`media-zoom group relative min-h-[180px] ${img.span || ''}`}
            >
              <BrandImage src={img.src} alt={img.alt} label={img.alt} tone={img.tone} />
              <div className="pointer-events-none absolute inset-0 z-[2] bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />
              <span className="pointer-events-none absolute bottom-3 left-3 z-[3] font-sans text-[10px] uppercase tracking-[0.2em] text-white/0 transition-all duration-500 group-hover:text-white/80">
                {img.alt}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
