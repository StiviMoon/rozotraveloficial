import React from 'react';
import { MapPin, Users, Flame, Wifi, ArrowRight, Droplets, Music, TreePine, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const propertiesData = [
  {
    name: 'Finca La Esperanza',
    location: 'Rozó',
    capacity: 20,
    price: '$850k',
    rating: 4.9,
    img: '/images/fincas/finca-1.jpg',
    amenities: [
      { name: 'Piscina', icon: <Droplets size={14} /> },
      { name: 'BBQ', icon: <Flame size={14} /> },
      { name: 'WiFi', icon: <Wifi size={14} /> }
    ]
  },
  {
    name: 'Villa del Sol',
    location: 'La Torre, Rozó',
    capacity: 35,
    price: '$1.2M',
    rating: 5.0,
    img: '/images/fincas/finca-2.jpg',
    amenities: [
      { name: 'Piscina Priv.', icon: <Droplets size={14} /> },
      { name: 'Zona Eventos', icon: <Music size={14} /> }
    ]
  },
  {
    name: 'Refugio Campestre',
    location: 'Rozó Centro',
    capacity: 15,
    price: '$600k',
    rating: 4.8,
    img: '/images/fincas/finca-3.jpg',
    amenities: [
      { name: 'Áreas Verdes', icon: <TreePine size={14} /> },
      { name: 'Cancha', icon: <Users size={14} /> }
    ]
  }
];

const Properties = () => {
  return (
    <section id="fincas" className="py-20 bg-rozo-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-rozo-orange/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-rozo-green/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-rozo-dark mb-4">
              Fincas <span className="font-script text-rozo-green text-5xl font-normal">Destacadas</span>
            </h2>
            <p className="text-gray-600 max-w-xl">Descubre nuestras propiedades top en el corazón del Valle del Cauca, equipadas con todo lo necesario para tu confort.</p>
          </div>
          <a href="https://wa.me/573189332134" target="_blank" rel="noreferrer" className="mt-4 md:mt-0 font-semibold text-rozo-orange hover:text-rozo-amber flex items-center gap-2 transition-colors">
            Ver todas <ArrowRight size={18} />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {propertiesData.map((prop, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100/50 relative group"
            >
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-rozo-green z-10 flex items-center gap-1 shadow-sm">
                <Star size={12} className="text-rozo-amber fill-rozo-amber" /> {prop.rating}
              </div>
              <div className="h-64 card-img-container relative">
                <img src={prop.img} alt={prop.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <a href="#" className="bg-white text-rozo-dark px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">Ver Detalles</a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-rozo-dark mb-2">{prop.name}</h3>
                <div className="flex items-center text-sm text-gray-500 mb-4 gap-4">
                  <span className="flex items-center gap-1"><MapPin size={16} className="text-rozo-orange" /> {prop.location}</span>
                  <span className="flex items-center gap-1"><Users size={16} className="text-rozo-orange" /> Cap: {prop.capacity} pers.</span>
                </div>
                <div className="flex gap-2 mb-6 flex-wrap">
                  {prop.amenities.map((am, i) => (
                    <span key={i} className="bg-rozo-cream text-rozo-green text-xs px-2 py-1 rounded-md flex items-center gap-1">
                      {am.icon} {am.name}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-xs text-gray-500 block">Desde</span>
                    <span className="text-lg font-bold text-rozo-dark">{prop.price} <span className="text-sm font-normal text-gray-500">/noche</span></span>
                  </div>
                  <a href={`https://wa.me/573189332134?text=Deseo%20reservar%20${encodeURIComponent(prop.name)}`} target="_blank" rel="noreferrer" className="bg-gradient-green text-white px-5 py-2.5 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all">
                    Reservar
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;
