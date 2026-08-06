import React, { useState } from 'react';
import { CheckCircle2, MessageCircle, MapPin, Utensils, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    service: '',
    name: '',
    date: '',
    guests: '',
    location: '',
    budget: '',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `¡Hola! Gracias por contactar a ROZOTRAVEL.%0A%0AHe llenado el formulario de cotización web:%0A%0A*Servicio:* ${formData.service}%0A*Nombre:* ${formData.name}%0A*Fecha:* ${formData.date}%0A*Número de personas:* ${formData.guests}%0A*Lugar/Zona:* ${formData.location}%0A*Presupuesto:* ${formData.budget}%0A*Detalles:* ${formData.notes}%0A%0A¿Podrían ayudarme con más información?`;

    setIsSubmitted(true);
    setFormData({ service: '', name: '', date: '', guests: '', location: '', budget: '', notes: '' });

    setTimeout(() => {
      window.open(`https://wa.me/573189332134?text=${whatsappMessage}`, '_blank');
      setIsSubmitted(false);
    }, 1200);
  };

  return (
    <section id="contacto" className="section bg-rozo-cream">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="section-label">Contacto</p>
            <h2 className="section-title">
              Planifica tu{' '}
              <span className="italic text-rozo-orange">próxima experiencia</span>
            </h2>
            <p className="section-lead">
              Completa el formulario y te enviamos una propuesta por WhatsApp.
              Para alimentación, anticipo del 50%.
            </p>

            <div className="mt-10 space-y-0 divide-y divide-rozo-dark/10 border-y border-rozo-dark/10">
              <div className="flex gap-4 py-5">
                <MessageCircle className="mt-0.5 shrink-0 text-rozo-green" size={20} />
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-rozo-dark/40">
                    WhatsApp
                  </p>
                  <a href="https://wa.me/573189332134" className="mt-1 block font-display text-lg text-rozo-dark hover:text-rozo-orange">
                    +57 318 9332134
                  </a>
                </div>
              </div>
              <div className="flex gap-4 py-5">
                <Phone className="mt-0.5 shrink-0 text-rozo-orange" size={20} />
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-rozo-dark/40">
                    Llamadas
                  </p>
                  <a href="tel:+573132018354" className="mt-1 block font-display text-lg text-rozo-dark hover:text-rozo-orange">
                    +57 313 2018354
                  </a>
                </div>
              </div>
              <div className="flex gap-4 py-5">
                <MapPin className="mt-0.5 shrink-0 text-rozo-orange" size={20} />
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-rozo-dark/40">
                    Ubicación
                  </p>
                  <p className="mt-1 font-sans text-sm text-rozo-dark/70">
                    Rozó · Palmira · La Torre · Matapalo
                  </p>
                </div>
              </div>
              <div className="flex gap-4 py-5">
                <Utensils className="mt-0.5 shrink-0 text-rozo-amber" size={20} />
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-rozo-dark/40">
                    Catering
                  </p>
                  <p className="mt-1 font-sans text-sm text-rozo-dark/70">Cristian Fabián Londoño Rosero</p>
                  <div className="mt-1 flex flex-col gap-0.5 text-sm">
                    <a href="https://wa.me/573132018354" className="text-rozo-orange hover:underline">+57 313 2018354</a>
                    <a href="https://wa.me/573157035778" className="text-rozo-orange hover:underline">+57 315 7035778</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="border border-rozo-dark/10 bg-white p-6 md:p-10"
            >
              {isSubmitted && (
                <div className="mb-6 flex items-start gap-3 border border-rozo-green/20 bg-rozo-green/5 p-4 text-rozo-green">
                  <CheckCircle2 className="mt-0.5 shrink-0" size={18} />
                  <div>
                    <p className="font-semibold">Datos listos</p>
                    <p className="text-sm opacity-80">Te redirigimos a WhatsApp…</p>
                  </div>
                </div>
              )}

              <div className="space-y-5">
                <div>
                  <label htmlFor="service" className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-[0.16em] text-rozo-dark/45">
                    Servicio
                  </label>
                  <select id="service" value={formData.service} onChange={handleChange} required className="field">
                    <option value="" disabled>Selecciona un servicio…</option>
                    <option value="Pasadía / Alquiler de finca">Pasadía / Alquiler de finca</option>
                    <option value="Evento empresarial">Evento empresarial</option>
                    <option value="Evento social">Evento social</option>
                    <option value="Catering y Gastronomía">Catering y Gastronomía</option>
                    <option value="Entretenimiento (DJ / música)">Entretenimiento (DJ / música)</option>
                    <option value="Mobiliario y montaje">Mobiliario y montaje</option>
                  </select>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-[0.16em] text-rozo-dark/45">
                      Nombre
                    </label>
                    <input type="text" id="name" value={formData.name} onChange={handleChange} required placeholder="Tu nombre" className="field" />
                  </div>
                  <div>
                    <label htmlFor="date" className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-[0.16em] text-rozo-dark/45">
                      Fecha
                    </label>
                    <input type="date" id="date" value={formData.date} onChange={handleChange} required className="field" />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="guests" className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-[0.16em] text-rozo-dark/45">
                      Personas
                    </label>
                    <input type="number" id="guests" value={formData.guests} onChange={handleChange} min="1" placeholder="Ej: 80" required className="field" />
                  </div>
                  <div>
                    <label htmlFor="location" className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-[0.16em] text-rozo-dark/45">
                      Zona
                    </label>
                    <input type="text" id="location" value={formData.location} onChange={handleChange} placeholder="Rozo, La Torre…" required className="field" />
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-[0.16em] text-rozo-dark/45">
                    Presupuesto
                  </label>
                  <input type="text" id="budget" value={formData.budget} onChange={handleChange} placeholder="Ej: $3.000.000 COP" className="field" />
                </div>

                <div>
                  <label htmlFor="notes" className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-[0.16em] text-rozo-dark/45">
                    Detalles
                  </label>
                  <textarea
                    id="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Menú, DJ, carpas, decoración…"
                    required
                    className="field resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full rounded-sm">
                  Cotizar por WhatsApp <MessageCircle size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
