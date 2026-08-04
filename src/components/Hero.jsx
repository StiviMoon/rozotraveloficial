import React from 'react';
import { ChevronDown, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/images/hero/fondo.jpg" alt="Finca en Rozó" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/10"></div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
          Vive <span className="font-script text-rozo-amber font-normal text-6xl md:text-8xl">Rozó</span>, Vive el Valle
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 font-light drop-shadow-md">
          Experiencias inolvidables en el corazón del Valle del Cauca.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 flex-wrap">
          <a href="#fincas" className="bg-white/20 backdrop-blur-md border border-white/40 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-rozo-green transition-all shadow-lg hover:shadow-xl flex items-center justify-center">
            Ver Fincas Disponibles
          </a>
          <a href="/portafolio-gastronomia.pdf" target="_blank" className="bg-rozo-green/80 backdrop-blur-md border border-rozo-green text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-rozo-green transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
            <Download size={20} /> Menú y Catering
          </a>
          <a href="https://wa.me/573189332134" target="_blank" rel="noreferrer" className="bg-gradient-orange text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
            Cotizar por WhatsApp
          </a>
        </div>
      </motion.div>

      <div className="wave-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,123.15,190.28,110.15,234.6,100.41,278.4,79.52,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 scroll-indicator">
        <a href="#nosotros" className="text-white opacity-80 hover:opacity-100 transition-opacity">
          <ChevronDown size={36} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
