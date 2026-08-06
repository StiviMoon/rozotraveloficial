import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import BrandImage from './BrandImage';

const servicesData = [
  {
    num: '01',
    title: 'Pasadías y fincas',
    desc: '11 fincas en Rozo, La Torre, Matapalo y Palmira. Salones de 60 a 900 personas, piscina, jacuzzi, canchas y parqueadero.',
    img: '/images/servicios/servicio-5.jpg',
    btnMessage: 'Hola, quisiera cotizar un pasadía o alquiler de finca.',
  },
  {
    num: '02',
    title: 'Eventos empresariales',
    desc: 'Espacios y catering para integración, reuniones y celebraciones con menú completo y logística.',
    img: '/images/servicios/servicio-1.jpg',
    btnMessage: 'Hola, quisiera cotizar un evento empresarial.',
  },
  {
    num: '03',
    title: 'Eventos sociales',
    desc: 'Cumpleaños, aniversarios y celebraciones con asados, platos vallunos, snacks y decoración temática.',
    img: '/images/servicios/servicio-2.jpg',
    btnMessage: 'Hola, quisiera cotizar un evento social.',
  },
  {
    num: '04',
    title: 'Catering y gastronomía',
    desc: 'Desayunos desde $15.500, asados desde $55.000, fiambre, lechona, snacks y postres. Anticipo 50%.',
    img: '/images/servicios/servicio-4.jpg',
    btnMessage: 'Hola, quisiera cotizar servicios de catering.',
  },
  {
    num: '05',
    title: 'Entretenimiento',
    desc: 'DJ, animador, sonido y hora loca (8 h) desde $1.500.000. Grupo musical crossover 1 h desde $1.000.000.',
    img: '/images/servicios/servicio-3.jpg',
    btnMessage: 'Hola, quisiera cotizar DJ, sonido o grupo musical.',
  },
  {
    num: '06',
    title: 'Mobiliario y montaje',
    desc: 'Sillas, mesas, manteles, vajilla, cristalería y carpas 6×6. Mesero $160.000 c/u · bebidas $15.000 c/u.',
    img: '/images/servicios/servicio-1.jpg',
    btnMessage: 'Hola, quisiera cotizar mobiliario y montaje para un evento.',
  },
];

const extras = [
  { label: 'Sillas Rimax', value: '$1.500 c/u' },
  { label: 'Mesas tablón / redonda', value: '$12.000 / $13.000' },
  { label: 'Manteles / sobre mantel', value: '$10.000 / $8.000' },
  { label: 'Vajilla y cristalería', value: '$1.000 c/u' },
  { label: 'Carpa 6×6', value: '$180.000 c/u' },
  { label: 'Bebidas ilimitadas', value: '$15.000 c/u' },
];

const Services = () => {
  return (
    <section id="servicios" className="section bg-white">
      <div className="shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="section-label">Servicios</p>
            <h2 className="section-title max-w-lg">
              Todo lo que tu evento{' '}
              <span className="italic text-rozo-orange">necesita</span>
            </h2>
          </div>
          <p className="section-lead md:mt-0 md:max-w-sm md:text-right">
            Fincas, catering y logística completa para pasadías y eventos en el Valle.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px bg-rozo-dark/10 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((srv) => (
            <article key={srv.num} className="group flex flex-col bg-white">
              <div className="media-zoom relative h-52">
                <BrandImage src={srv.img} alt={srv.title} label={srv.title} tone="green" />
                <span className="absolute left-4 top-4 z-10 font-display text-sm text-white/90">
                  {srv.num}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-7">
                <h3 className="font-display text-2xl font-semibold tracking-tight text-rozo-dark">
                  {srv.title}
                </h3>
                <p className="mt-3 flex-1 font-sans text-sm font-light leading-relaxed text-rozo-dark/60">
                  {srv.desc}
                </p>
                <a
                  href={`https://wa.me/573189332134?text=${encodeURIComponent(srv.btnMessage)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-rozo-orange transition-colors hover:text-rozo-dark"
                >
                  Cotizar <ArrowUpRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 border border-rozo-dark/10 bg-rozo-cream/60 p-8 md:p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-label">Adicionales 2026</p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-rozo-dark md:text-3xl">
                Referencia de montaje
              </h3>
            </div>
            <div className="flex flex-wrap gap-4 text-xs font-medium uppercase tracking-wide">
              <a href="/cotizacion-catering-eventos-2026.pdf" target="_blank" rel="noreferrer" className="text-rozo-orange hover:underline">
                Cotización PDF →
              </a>
              <a href="/portafolio-gastronomia.pdf" target="_blank" rel="noreferrer" className="text-rozo-green hover:underline">
                Portafolio →
              </a>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {extras.map((item) => (
              <div
                key={item.label}
                className="flex items-baseline justify-between gap-4 border-b border-rozo-dark/8 py-3"
              >
                <span className="font-sans text-sm text-rozo-dark/70">{item.label}</span>
                <span className="shrink-0 font-display text-sm font-semibold text-rozo-dark">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
