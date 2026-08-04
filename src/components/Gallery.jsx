import React from 'react';
import { Camera } from 'lucide-react';
import { motion } from 'framer-motion';

const Gallery = () => {
  return (
    <section id="galeria" className="py-0 bg-white">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 h-[600px] gap-1 p-1"
      >
        <div className="row-span-2 col-span-2 relative overflow-hidden group">
          <img src="/images/galeria/foto-1.jpg" alt="Resort pool" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
            <span className="text-white font-bold text-xl flex items-center gap-2"><Camera /> Espacios únicos</span>
          </div>
        </div>
        <div className="relative overflow-hidden group">
          <img src="/images/galeria/foto-2.jpg" alt="Evento social" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        </div>
        <div className="relative overflow-hidden group">
          <img src="/images/galeria/foto-3.jpg" alt="Gastronomía" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        </div>
        <div className="relative overflow-hidden group">
          <img src="/images/galeria/foto-4.jpg" alt="Exterior finca" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        </div>
        <div className="relative overflow-hidden group">
          <img src="/images/galeria/foto-5.jpg" alt="Familia" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        </div>
      </motion.div>
    </section>
  );
};

export default Gallery;
