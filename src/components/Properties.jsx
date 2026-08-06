import React, { useState } from 'react';
import { MapPin, Users, ArrowUpRight } from 'lucide-react';
import BrandImage from './BrandImage';

const propertiesData = [
  {
    name: 'Finca N°1',
    location: 'Rozo — La Torre',
    capacity: 100,
    img: '/images/fincas/finca-1.jpg',
    amenities: ['Piscina + Jacuzzi climatizado', 'Cancha de fútbol', 'Billar y sapo', '4 baños', '20 vehículos'],
  },
  {
    name: 'Finca N°2',
    location: 'Rozo Principal',
    capacity: 150,
    img: '/images/fincas/finca-2.jpg',
    note: 'Capacidad para buses · carpas opcionales',
    amenities: ['Piscina + Jacuzzi', 'Cancha de fútbol', 'Juego de sapo', '9 baños', '30 vehículos'],
  },
  {
    name: 'Finca N°3',
    location: 'Rozo — La Torre',
    capacity: 80,
    img: '/images/fincas/finca-3.jpg',
    note: 'Carpas opcionales',
    amenities: ['Piscina + Jacuzzi y sauna', 'Cancha de fútbol', 'Sapo y billar', '5 baños', '20 vehículos'],
  },
  {
    name: 'Finca N°4',
    location: 'Rozo Principal',
    capacity: 80,
    img: '/images/fincas/finca-1.jpg',
    note: 'Carpas opcionales',
    amenities: ['Piscina + Jacuzzi y cascada', 'Cancha de fútbol', 'Sapo y billar', '4 baños', '30 vehículos'],
  },
  {
    name: 'Finca N°5',
    location: 'Rozo — La Torre',
    capacity: 60,
    img: '/images/fincas/finca-2.jpg',
    amenities: ['Piscina + Jacuzzi', 'Fútbol y voleibol', 'Juego de sapo', '4 baños', '15 vehículos'],
  },
  {
    name: 'Finca N°6',
    location: 'Rozo — La Torre',
    capacity: 120,
    img: '/images/fincas/finca-3.jpg',
    note: 'Salón adicional para 30 · carpas opcionales',
    amenities: ['Piscina + Jacuzzi', 'Cancha de fútbol', 'Sapo y billar', '6 baños', '20 vehículos'],
  },
  {
    name: 'Finca N°7',
    location: 'Rozo Principal',
    capacity: 100,
    img: '/images/fincas/finca-1.jpg',
    note: 'Carpas opcionales',
    amenities: ['Piscina + Jacuzzi', 'Cancha mediana', 'Sapo y billar', '5 baños', '10 vehículos'],
  },
  {
    name: 'Finca N°8',
    location: 'Vía Palmira — Rozo',
    capacity: 900,
    img: '/images/fincas/finca-2.jpg',
    note: 'Capacidad con montaje de carpas',
    highlight: 'Eventos masivos',
    amenities: ['Piscina', 'Cancha de fútbol', 'Zonas verdes', '5 baños', '30 vehículos'],
  },
  {
    name: 'Finca N°9',
    location: 'Rozo Principal',
    capacity: 100,
    img: '/images/fincas/finca-3.jpg',
    amenities: ['Piscinas + jacuzzi y sauna', 'Cancha de fútbol', 'Billar y sapo', '6 baños', '10 vehículos'],
  },
  {
    name: 'Finca N°10',
    location: 'Tienda Nueva, Palmira',
    capacity: 400,
    img: '/images/fincas/finca-1.jpg',
    highlight: 'Gran capacidad',
    amenities: ['Piscinas adultos y niños', 'Cancha de fútbol', 'Billar y sapo', '10 baños', '50 vehículos'],
  },
  {
    name: 'Finca N°11',
    location: 'Rozo — Matapalo',
    capacity: 150,
    img: '/images/fincas/finca-2.jpg',
    amenities: ['Piscina adultos + Jacuzzi', 'Cancha de fútbol', 'Billar y sapo', '4 baños', '20 vehículos'],
  },
];

const INITIAL_VISIBLE = 6;

const Properties = () => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? propertiesData : propertiesData.slice(0, INITIAL_VISIBLE);

  return (
    <section id="fincas" className="section bg-white">
      <div className="shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-label">Fincas</p>
            <h2 className="section-title max-w-lg">
              Espacios para{' '}
              <span className="italic text-rozo-green">celebrar</span>
            </h2>
            <p className="section-lead">
              11 fincas en Rozo, La Torre, Matapalo y Palmira. Salones desde 60 hasta 900 personas.
            </p>
          </div>
          <a
            href="/cotizacion-catering-eventos-2026.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-rozo-orange hover:text-rozo-dark"
          >
            Cotización PDF <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((prop) => (
            <article key={prop.name} className="group flex flex-col">
              <div className="media-zoom relative aspect-[5/4]">
                <BrandImage src={prop.img} alt={prop.name} label={prop.name} tone="green" />
                <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 z-[3] flex items-end justify-between gap-3">
                  <h3 className="font-display text-2xl font-semibold text-white">{prop.name}</h3>
                  {prop.highlight && (
                    <span className="bg-rozo-orange px-2 py-1 font-sans text-[10px] font-semibold uppercase tracking-wider text-white">
                      {prop.highlight}
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 font-sans text-sm text-rozo-dark/55">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={14} className="text-rozo-orange" /> {prop.location}
                </span>
                <span className="inline-flex items-center gap-1.5 font-medium text-rozo-dark">
                  <Users size={14} className="text-rozo-orange" /> {prop.capacity} pers.
                </span>
              </div>

              {prop.note && (
                <p className="mt-2 font-sans text-xs text-rozo-green">{prop.note}</p>
              )}

              <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                {prop.amenities.map((am) => (
                  <li key={am} className="font-sans text-xs text-rozo-dark/45">
                    {am}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/573189332134?text=${encodeURIComponent(`Hola RozoTravel, quiero cotizar la ${prop.name} (${prop.location}) para un evento.`)}`}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex w-fit items-center gap-2 border-b border-rozo-dark/20 pb-1 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-rozo-dark transition-colors hover:border-rozo-orange hover:text-rozo-orange"
              >
                Cotizar finca <ArrowUpRight size={13} />
              </a>
            </article>
          ))}
        </div>

        {!showAll && (
          <div className="mt-14 text-center">
            <button type="button" onClick={() => setShowAll(true)} className="btn-ghost rounded-sm">
              Ver las {propertiesData.length} fincas
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Properties;
