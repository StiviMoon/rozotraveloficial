import React from 'react';
import { Home, GlassWater, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="nosotros" className="py-24 bg-rozo-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-white rounded-full blur-3xl opacity-50 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-rozo-green/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-rozo-dark">
            Nuestra <span className="font-script text-rozo-green text-5xl font-normal">Historia</span>
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            En <strong className="text-rozo-orange">RozoTravel</strong>, creemos que los mejores recuerdos se construyen rodeados de naturaleza, familia y amigos. Somos expertos en la región de Rozó, Valle del Cauca, ofreciendo un servicio personalizado, confianza y propiedades exclusivas para garantizarte una experiencia de descanso y celebración sin igual.
          </p>
          <p className="text-xl font-medium text-gradient-orange italic font-script text-3xl mb-12">
            "Más que un servicio, creamos experiencias."
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100/50">
              <div className="w-16 h-16 mx-auto bg-rozo-green/10 rounded-2xl flex items-center justify-center mb-6">
                <Home className="w-8 h-8 text-rozo-green" />
              </div>
              <h3 className="text-4xl font-bold text-rozo-dark mb-2">+50</h3>
              <p className="text-gray-600 font-medium">Fincas Exclusivas</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100/50">
              <div className="w-16 h-16 mx-auto bg-rozo-orange/10 rounded-2xl flex items-center justify-center mb-6">
                <GlassWater className="w-8 h-8 text-rozo-orange" />
              </div>
              <h3 className="text-4xl font-bold text-rozo-dark mb-2">+200</h3>
              <p className="text-gray-600 font-medium">Eventos Realizados</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100/50">
              <div className="w-16 h-16 mx-auto bg-rozo-amber/10 rounded-2xl flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-rozo-amber" />
              </div>
              <h3 className="text-4xl font-bold text-rozo-dark mb-2">100%</h3>
              <p className="text-gray-600 font-medium">Satisfacción</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
