import React, { useState } from 'react';
import BrandImage from './BrandImage';

const categories = ['Destacados', 'Desayunos', 'Almuerzos', 'Asados', 'Vallunos', 'Snacks', 'Postres'];

const menuItems = [
  {
    name: 'Asado Llanero Criollo',
    desc: '400 g entre lomo redondo de res madurado, panceta Cervalle y chicharrón totiado. Piña asada, papa, yuca, guacamole y chimichurri.',
    price: '$60.000',
    priceNote: 'Desde $60.000 (grupos +100)',
    img: '/images/gastronomia/plato-1.jpg',
    tag: 'Recomendado',
    category: 'Asados',
  },
  {
    name: 'Sancocho de Gallina',
    desc: 'Sancocho en fogón de leña con presa de pollo de campo (450 g), arroz, tostada artesanal, ají, aguacate y agua de panela con limón.',
    price: '$40.000',
    img: '/images/gastronomia/plato-2.jpg',
    category: 'Almuerzos',
  },
  {
    name: 'Fiambre Valluno',
    desc: 'Preparación envuelta en hoja de plátano: arroz, pollo, costilla de cerdo, chorizo criollo, huevo, maduro, papa al vapor y salsa criolla.',
    price: '$50.000',
    img: '/images/gastronomia/plato-3.jpg',
    category: 'Vallunos',
  },
  {
    name: 'Mesa Valluna',
    desc: 'Mini aborrajados, mini empanadas, tostada de plátano, vaso de lulada 7 oz, hogao, guacamole y ají.',
    price: '$15.000',
    img: '/images/gastronomia/plato-4.jpg',
    category: 'Snacks',
  },
  {
    name: 'Desayuno Huevos Pericos',
    desc: 'Huevos pericos, arepa casera de maíz, porción de fruta, queso y bebida caliente (tinto, chocolate o café con leche).',
    price: '$17.500',
    img: '/images/gastronomia/plato-2.jpg',
    category: 'Desayunos',
  },
  {
    name: 'Desayuno Arriero',
    desc: 'Calentado de frijol, huevos pericos o chicharrón, arepa de maíz mediana y bebida caliente.',
    price: '$17.500',
    priceNote: 'Con chicharrón $19.500',
    img: '/images/gastronomia/plato-4.jpg',
    category: 'Desayunos',
  },
  {
    name: 'Pollo en su jugo',
    desc: 'Plato típico de Rozo en fogón de leña, jugo de tomate y finas hierbas, presa 400 g. Arroz pegado, tostada artesanal y aguacate.',
    price: '$40.000',
    img: '/images/gastronomia/plato-2.jpg',
    category: 'Almuerzos',
  },
  {
    name: 'Chuleta Valluna',
    desc: 'Filete de pollo o cerdo empanizado 300 g, arroz, ensalada y tostada artesanal. Opción con consomé $40.000.',
    price: '$35.000',
    img: '/images/gastronomia/plato-1.jpg',
    category: 'Almuerzos',
  },
  {
    name: 'Asado Tradicional al Carbón',
    desc: 'Lomo de res, filete de pollo, costilla BBQ, chorizo, papa, yuca, mazorca, guacamole y chimichurri.',
    price: '$55.000',
    img: '/images/gastronomia/plato-1.jpg',
    category: 'Asados',
  },
  {
    name: 'Asado al Barril',
    desc: 'Bondiola, chicharrón toteado, pollo, lomo de res, papa, maduro con queso, mazorca, guacamole y chimichurri.',
    price: '$60.000',
    priceNote: 'Desde $60.000 (+100 pers.)',
    img: '/images/gastronomia/plato-1.jpg',
    category: 'Asados',
  },
  {
    name: 'Plato Gourmet',
    desc: 'Rollitos de pechuga jamón y queso, lomo de cerdo en vino tinto, arroz al perejil y ensalada tropical. Vajilla opcional.',
    price: '$40.000',
    priceNote: 'Portafolio $45.000 · vajilla +$5.000',
    img: '/images/gastronomia/plato-3.jpg',
    category: 'Almuerzos',
  },
  {
    name: 'Tamal Valluno',
    desc: 'Masa de maíz blanco curado con carne y costilla de cerdo, arveja y papa. Arroz, arepa y tostada artesanal.',
    price: '$31.500',
    priceNote: 'Cotización eventos $35.000',
    img: '/images/gastronomia/plato-3.jpg',
    category: 'Vallunos',
  },
  {
    name: 'Lechona Valluna',
    desc: '350 g de lechona con arepa de maíz, tostada artesanal y vaso de gaseosa 10 oz.',
    price: '$25.000',
    img: '/images/gastronomia/plato-3.jpg',
    category: 'Vallunos',
  },
  {
    name: 'Snack Opción 3',
    desc: 'Aborrajado grande, empanada, tostada artesanal con hogao y ají, vaso de lulada 10 oz.',
    price: '$18.000',
    img: '/images/gastronomia/plato-4.jpg',
    category: 'Snacks',
  },
  {
    name: 'Choripán',
    desc: 'Chorizo criollo asado, pan, queso y chimichurri.',
    price: '$18.000',
    img: '/images/gastronomia/plato-4.jpg',
    category: 'Snacks',
  },
  {
    name: 'Melao con Cuajada',
    desc: 'Porción de queso cuajada con melao de panela.',
    price: '$8.000',
    img: '/images/gastronomia/plato-4.jpg',
    category: 'Postres',
  },
  {
    name: 'Queso Embriagado',
    desc: 'Cuajada aromatizada con aguardiente y clavos de olor.',
    price: '$8.000',
    img: '/images/gastronomia/plato-4.jpg',
    category: 'Postres',
  },
  {
    name: 'Cheesecake',
    desc: 'Porción de cheesecake de frutos rojos o amarillos.',
    price: '$10.000',
    img: '/images/gastronomia/plato-2.jpg',
    category: 'Postres',
  },
];

const featuredNames = ['Asado Llanero Criollo', 'Sancocho de Gallina', 'Fiambre Valluno', 'Mesa Valluna'];

const Gastronomy = () => {
  const [active, setActive] = useState('Destacados');

  const filtered =
    active === 'Destacados'
      ? menuItems.filter((d) => featuredNames.includes(d.name))
      : menuItems.filter((d) => d.category === active);

  return (
    <section id="gastronomia" className="section bg-rozo-cream">
      <div className="shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="section-label">Gastronomía</p>
            <h2 className="section-title max-w-xl">
              Sabores del Valle{' '}
              <span className="font-script text-rozo-orange not-italic">para tu mesa</span>
            </h2>
            <p className="section-lead">
              Precios por persona. Anticipo del 50% para reservar la alimentación.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="/portafolio-gastronomia.pdf" target="_blank" rel="noreferrer" className="btn-green rounded-sm">
              Menú completo
            </a>
            <a href="/cotizacion-catering-eventos-2026.pdf" target="_blank" rel="noreferrer" className="btn-ghost rounded-sm">
              Cotización 2026
            </a>
          </div>
        </div>

        <div className="mt-10 flex gap-1 overflow-x-auto border-b border-rozo-dark/10 pb-px scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`shrink-0 border-b-2 px-4 py-3 font-sans text-xs font-semibold uppercase tracking-[0.16em] transition-colors ${
                active === cat
                  ? 'border-rozo-orange text-rozo-orange'
                  : 'border-transparent text-rozo-dark/40 hover:text-rozo-dark'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((dish, idx) => (
            <article key={`${dish.name}-${idx}`} className="group flex flex-col">
              <div className="media-zoom relative aspect-[4/3]">
                <BrandImage src={dish.img} alt={dish.name} label={dish.name} tone="orange" />
                {dish.tag && (
                  <span className="absolute left-3 top-3 z-10 bg-rozo-orange px-2.5 py-1 font-sans text-[10px] font-semibold uppercase tracking-wider text-white">
                    {dish.tag}
                  </span>
                )}
              </div>
              <div className="mt-4 flex flex-1 flex-col">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold leading-tight text-rozo-dark">
                    {dish.name}
                  </h3>
                  <span className="shrink-0 font-display text-lg font-semibold text-rozo-green">
                    {dish.price}
                  </span>
                </div>
                <p className="mt-2 flex-1 font-sans text-sm font-light leading-relaxed text-rozo-dark/55">
                  {dish.desc}
                </p>
                {dish.priceNote && (
                  <p className="mt-2 font-sans text-[11px] text-rozo-dark/40">{dish.priceNote}</p>
                )}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-12 border-t border-rozo-dark/10 pt-6 font-sans text-sm text-rozo-dark/50">
          Catering · Cristian Fabián Londoño R. ·{' '}
          <a href="https://wa.me/573132018354" className="text-rozo-orange hover:underline">313 201 8354</a>
          {' · '}
          <a href="https://wa.me/573157035778" className="text-rozo-orange hover:underline">315 703 5778</a>
        </p>
      </div>
    </section>
  );
};

export default Gastronomy;
