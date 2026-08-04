import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  return (
    <section className="py-20 bg-rozo-green text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="leaves" width="100" height="100" patternUnits="userSpaceOnUse"><path d="M50 0C50 27.614 27.614 50 0 50C27.614 50 50 72.386 50 100C50 72.386 72.386 50 100 50C72.386 50 50 27.614 50 0Z" fill="currentColor"/></pattern></defs>
          <rect width="100%" height="100%" fill="url(#leaves)"/>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Lo que dicen nuestros <span className="font-script text-rozo-amber text-5xl font-normal">Clientes</span>
          </h2>
          
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-white/20 shadow-2xl">
            <div className="text-rozo-amber flex justify-center gap-1 text-2xl mb-6">
              <Star className="fill-current" />
              <Star className="fill-current" />
              <Star className="fill-current" />
              <Star className="fill-current" />
              <Star className="fill-current" />
            </div>
            <p className="text-xl md:text-2xl font-light italic mb-8 leading-relaxed">
              "Celebramos nuestro aniversario de empresa con RozoTravel. La finca espectacular, la atención de primera y la comida deliciosa. ¡Totalmente recomendados, hicieron que todo fuera fácil y perfecto!"
            </p>
            <div className="flex items-center justify-center gap-4">
              <img src="/images/testimonios/perfil-1.jpg" alt="María Gómez" className="w-16 h-16 rounded-full border-2 border-rozo-amber" />
              <div className="text-left">
                <h4 className="font-bold text-lg">María Gómez</h4>
                <span className="text-sm text-white/70">Gerente de RRHH</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
