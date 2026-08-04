import React, { useState } from 'react';
import { CheckCircle2, MessageCircle, MapPin, Utensils } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    service: '',
    name: '',
    date: '',
    guests: '',
    location: '',
    budget: '',
    notes: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const whatsappMessage = `🌴 ¡Hola! Gracias por contactar a ROZOTRAVEL.%0A%0AHe llenado el formulario de cotización web y aquí están mis datos:%0A%0A*Servicio:* ${formData.service}%0A*Nombre:* ${formData.name}%0A*Fecha:* ${formData.date}%0A*Número de personas:* ${formData.guests}%0A*Lugar/Zona:* ${formData.location}%0A*Presupuesto:* ${formData.budget}%0A*Detalles adicionales:* ${formData.notes}%0A%0A¿Podrían ayudarme con más información?`;

    const whatsappNumber = '573189332134';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    
    setIsSubmitted(true);
    setFormData({ service: '', name: '', date: '', guests: '', location: '', budget: '', notes: '' });

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitted(false);
    }, 1500);
  };

  return (
    <section id="contacto" className="py-24 bg-rozo-cream relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-rozo-orange/5 rounded-full blur-3xl translate-x-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-rozo-dark mb-4">
              Planifica tu próxima <span className="font-script text-rozo-orange text-5xl font-normal">Experiencia</span>
            </h2>
            <p className="text-gray-600 mb-8">Completa el formulario y te enviaremos una propuesta a la medida directamente a tu WhatsApp. ¡Es rápido y fácil!</p>
            
            <div className="flex flex-col gap-6 mb-8">
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-rozo-green/10 rounded-full flex items-center justify-center text-rozo-green text-xl shrink-0">
                  <MessageCircle />
                </div>
                <div>
                  <h4 className="font-bold text-rozo-dark">Atención por WhatsApp</h4>
                  <a href="https://wa.me/573189332134" className="text-rozo-green hover:underline">+57 318 9332134</a>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-rozo-orange/10 rounded-full flex items-center justify-center text-rozo-orange text-xl shrink-0">
                  <MapPin />
                </div>
                <div>
                  <h4 className="font-bold text-rozo-dark">Ubicación</h4>
                  <span className="text-gray-600">Rozó, Valle del Cauca, Colombia</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-rozo-amber/10 rounded-full flex items-center justify-center text-rozo-amber text-xl shrink-0">
                  <Utensils />
                </div>
                <div>
                  <h4 className="font-bold text-rozo-dark">Catering y Gastronomía</h4>
                  <p className="text-sm text-gray-600 mb-1">Cristian Fabian Londoño R.</p>
                  <div className="flex flex-col text-sm">
                    <a href="https://wa.me/573132018354" className="text-rozo-amber font-medium hover:underline">+57 313 2018354</a>
                    <a href="https://wa.me/573157035778" className="text-rozo-amber font-medium hover:underline">+57 315 7035778</a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100"
          >
            {isSubmitted && (
              <div className="mb-6 bg-green-50 border border-green-200 text-green-800 rounded-xl p-4 flex gap-3 items-start">
                <CheckCircle2 className="text-green-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold">¡Datos listos!</p>
                  <p className="text-sm">Serás redirigido a WhatsApp para enviar tu solicitud a ROZOTRAVEL...</p>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">1. Servicio de interés</label>
                <select id="service" value={formData.service} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-rozo-green focus:ring-2 focus:ring-rozo-green/20 outline-none transition-all">
                  <option value="" disabled>Selecciona un servicio...</option>
                  <option value="Alquiler de fincas">Alquiler de fincas</option>
                  <option value="Evento empresarial">Evento empresarial</option>
                  <option value="Evento social">Evento social</option>
                  <option value="Catering">Catering y Gastronomía</option>
                  <option value="Compra de propiedad">Compra/Venta de propiedad</option>
                </select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">2. Nombre completo</label>
                  <input type="text" id="name" value={formData.name} onChange={handleChange} required placeholder="Tu nombre" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-rozo-green focus:ring-2 focus:ring-rozo-green/20 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">3. Fecha (aprox)</label>
                  <input type="date" id="date" value={formData.date} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-rozo-green focus:ring-2 focus:ring-rozo-green/20 outline-none transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">4. Número de personas</label>
                  <input type="number" id="guests" value={formData.guests} onChange={handleChange} min="1" placeholder="Ej: 20" required className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-rozo-green focus:ring-2 focus:ring-rozo-green/20 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">5. Lugar / Zona de interés</label>
                  <input type="text" id="location" value={formData.location} onChange={handleChange} placeholder="Ej: Rozó Centro, La Torre..." required className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-rozo-green focus:ring-2 focus:ring-rozo-green/20 outline-none transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Presupuesto aproximado</label>
                <input type="text" id="budget" value={formData.budget} onChange={handleChange} placeholder="Ej: $1.000.000 COP" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-rozo-green focus:ring-2 focus:ring-rozo-green/20 outline-none transition-all" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">6. ¿Qué estás buscando o cómo podemos ayudarte?</label>
                <textarea id="notes" value={formData.notes} onChange={handleChange} rows="3" placeholder="Detalles adicionales, tipo de evento, requerimientos especiales..." required className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-rozo-green focus:ring-2 focus:ring-rozo-green/20 outline-none transition-all resize-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-gradient-orange text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:-translate-y-1 transition-all flex items-center justify-center gap-2 mt-4">
                Cotizar por WhatsApp <MessageCircle />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
