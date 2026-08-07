import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

const LegalLayout = ({ title, updated, children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${title} | RozoTravel`;
    return () => {
      document.title = 'RozoTravel | Alquiler de Fincas y Eventos en el Valle';
    };
  }, [title]);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-rozo-cream pt-28 md:pt-36">
        <article className="shell max-w-3xl pb-20 md:pb-28">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-rozo-orange transition-colors hover:text-rozo-dark"
          >
            <ArrowLeft size={14} /> Volver al inicio
          </Link>

          <p className="section-label mt-10">Legal</p>
          <h1 className="section-title">{title}</h1>
          {updated && (
            <p className="mt-3 font-sans text-sm text-rozo-dark/45">
              Última actualización: {updated}
            </p>
          )}

          <div className="legal-content mt-10 space-y-8 font-sans text-base font-light leading-relaxed text-rozo-dark/75">
            {children}
          </div>

          <div className="mt-14 flex flex-wrap gap-x-6 gap-y-2 border-t border-rozo-dark/10 pt-8 font-sans text-sm">
            <Link to="/politica-de-privacidad" className="text-rozo-orange hover:underline">
              Privacidad
            </Link>
            <Link to="/terminos-y-condiciones" className="text-rozo-orange hover:underline">
              Términos
            </Link>
            <Link to="/politica-de-cookies" className="text-rozo-orange hover:underline">
              Cookies
            </Link>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default LegalLayout;
