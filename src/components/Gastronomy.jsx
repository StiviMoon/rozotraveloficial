import React from 'react';
import { Download, ArrowRight, Flame } from 'lucide-react';
import { motion } from 'framer-motion';

const gastronomyData = [
  {
    name: 'Asado Llanero Criollo',
    desc: 'Lomo de res madurado, panceta y chicharrón con piña asada, papa y yuca.',
    price: '$60.000',
    img: '/images/gastronomia/plato-1.jpg',
    tag: 'Recomendado'
  },
  {
    name: 'Sancocho de Gallina',
    desc: 'Presa de pollo de campo y trifásico bañada en hogao, con tostada artesanal.',
    price: '$40.000',
    img: '/images/gastronomia/plato-2.jpg'
  },
  {
    name: 'Fiambre Valluno',
    desc: 'Preparación valluna envuelta en hojas de plátano con pollo, cerdo y chorizo.',
    price: '$50.000',
    img: '/images/gastronomia/plato-3.jpg'
  },
  {
    name: 'Mesa Valluna (Snacks)',
    desc: 'Mini aborrajados, mini empanadas, tostada de plátano, lulada y hogao.',
    price: '$15.000',
    img: '/images/gastronomia/plato-4.jpg'
  }
];

const Gastronomy = () => {
  return (
    <section id="gastronomia" className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rozo-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-rozo-dark mb-4">
              Experiencias <span className="font-script text-rozo-orange text-5xl font-normal">Gastronómicas</span>
            </h2>
            <p className="text-gray-600 max-w-xl">Descubre los sabores del Valle con nuestros desayunos, asados, platos típicos vallunos y postres. Perfecto para eventos o grupos en nuestras fincas.</p>
          </div>
          <a href="/portafolio-gastronomia.pdf" target="_blank" className="mt-6 md:mt-0 bg-rozo-green text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-rozo-green-light transition-all shadow-md hover:shadow-lg">
            <Download size={20} /> Ver Menú Completo
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gastronomyData.map((dish, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group relative flex flex-col"
            >
              {dish.tag && (
                <div className="absolute top-3 left-3 bg-rozo-orange text-white text-xs font-bold px-3 py-1 rounded-full z-10 flex items-center gap-1 shadow-sm">
                  <Flame size={12} /> {dish.tag}
                </div>
              )}
              <div className="h-48 overflow-hidden relative">
                <img src={dish.img} alt={dish.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-5 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-rozo-dark mb-2 leading-tight">{dish.name}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{dish.desc}</p>
                <div className="flex justify-between items-center pt-3 border-t border-gray-50">
                  <span className="text-lg font-bold text-rozo-green">{dish.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gastronomy;
