import React from 'react';
import { Home, Building2, Users, Utensils, Key } from 'lucide-react';
import { motion } from 'framer-motion';

const servicesData = [
  {
    title: 'Alquiler de Fincas',
    desc: 'Fincas exclusivas para descanso y disfrute en familia o con amigos.',
    img: '/images/servicios/servicio-5.jpg',
    icon: <Home size={20} />,
    colorClass: 'text-rozo-orange bg-rozo-orange/20',
    btnMessage: 'Hola, quisiera cotizar el alquiler de una finca.'
  },
  {
    title: 'Eventos Empresariales',
    desc: 'Espacios y experiencias diseñadas para el éxito de tu empresa.',
    img: '/images/servicios/servicio-1.jpg',
    icon: <Building2 size={20} />,
    colorClass: 'text-rozo-green bg-rozo-green/20',
    btnMessage: 'Hola, quisiera cotizar un evento empresarial.'
  },
  {
    title: 'Eventos Sociales',
    desc: 'Celebraciones únicas que se convierten en recuerdos inolvidables.',
    img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: <Users size={20} />,
    colorClass: 'text-rozo-orange bg-rozo-amber/20',
    btnMessage: 'Hola, quisiera cotizar un evento social.'
  },
  {
    title: 'Catering y Gastronomía',
    desc: 'Desayunos, almuerzos, asados, platos vallunos y postres para cada ocasión. (¡Descarga nuestro menú abajo!)',
    img: '/images/servicios/servicio-4.jpg',
    icon: <Utensils size={20} />,
    colorClass: 'text-rozo-brown bg-rozo-brown/20',
    btnMessage: 'Hola, quisiera cotizar servicios de catering.'
  },
  {
    title: 'Venta de Propiedades',
    desc: 'Encuentra la propiedad ideal para invertir o vivir.',
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: <Key size={20} />,
    colorClass: 'text-rozo-green bg-rozo-green-light/20',
    btnMessage: 'Hola, estoy interesado en comprar una propiedad.',
    fullWidth: true
  }
];

const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-rozo-cream/30 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-rozo-green/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-rozo-orange/5 rounded-full blur-3xl translate-y-1/4 translate-x-1/4"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-rozo-dark mb-4">
            Nuestros <span className="font-script text-rozo-orange text-5xl font-normal">Servicios</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-green mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((srv, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-rozo-cream rounded-2xl overflow-hidden hover-card flex flex-col h-full shadow-md ${srv.fullWidth ? 'md:col-span-2 lg:col-span-1 mx-auto w-full lg:w-auto' : ''}`}
            >
              <div className="h-48 card-img-container">
                <img src={srv.img} alt={srv.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex-grow flex flex-col relative z-10 bg-white/80 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm ${srv.colorClass}`}>
                    {srv.icon}
                  </div>
                  <h3 className="text-xl font-bold">{srv.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 flex-grow">{srv.desc}</p>
                <a href={`https://wa.me/573189332134?text=${encodeURIComponent(srv.btnMessage)}`} target="_blank" rel="noreferrer" className="mt-auto block text-center bg-white border border-rozo-green/30 text-rozo-green hover:bg-gradient-green hover:border-transparent hover:text-white hover:shadow-lg px-4 py-2.5 rounded-xl font-bold transition-all duration-300">
                  Cotizar servicio
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
