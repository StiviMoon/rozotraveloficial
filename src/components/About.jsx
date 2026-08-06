import React from 'react';

const stats = [
  { value: '11', label: 'Fincas especiales' },
  { value: '60–900', label: 'Capacidad por salón' },
  { value: '2026', label: 'Menú y cotización' },
];

const About = () => {
  return (
    <section id="nosotros" className="section bg-rozo-cream">
      <div className="shell">
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <img
              src="/logopng.png"
              alt="RozoTravel"
              width={1024}
              height={1024}
              className="mb-6 h-20 w-auto object-contain md:h-24"
              decoding="async"
            />
            <p className="section-label">Nosotros</p>
            <h2 className="section-title">
              Experiencias en el
              <span className="mt-1 block italic text-rozo-green">corazón de Rozó</span>
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="font-sans text-lg font-light leading-relaxed text-rozo-dark/70 md:text-xl">
              En <strong className="font-semibold text-rozo-orange">RozoTravel</strong> brindamos
              experiencias gastronómicas en eventos y en nuestras fincas. Queremos que disfrutes
              asados inolvidables con amigos, familia o tu equipo de trabajo.
            </p>
            <p className="mt-5 font-sans text-base font-light leading-relaxed text-rozo-dark/60">
              Asesoramos según tu comodidad y presupuesto: pasadías, eventos empresariales y un
              menú completo de catering en el Valle del Cauca.
            </p>
            <p className="mt-8 font-script text-3xl text-rozo-orange md:text-4xl">
              Más que un servicio, creamos experiencias.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 border-t border-rozo-dark/10 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-8 sm:py-10 ${i > 0 ? 'sm:border-l sm:border-rozo-dark/10 sm:pl-10' : ''} ${i < stats.length - 1 ? 'border-b border-rozo-dark/10 sm:border-b-0' : ''}`}
            >
              <p className="font-display text-4xl font-semibold tracking-tight text-rozo-dark md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 font-sans text-xs font-medium uppercase tracking-[0.22em] text-rozo-dark/45">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
