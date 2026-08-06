import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gastronomy from './components/Gastronomy';
import Properties from './components/Properties';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gastronomy />
        <Properties />
        <Gallery />
        <Testimonials />
        <Contact />

        <section className="relative h-[420px] w-full bg-rozo-dark" aria-label="Ubicación">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.6503932824317!2d-76.4385154240762!3d3.6669046963071853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3a076a0c5c7d0d%3A0x6a0c24e5b98a0c24!2sRozo%2C%20Valle%20del%20Cauca!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(0.35) contrast(1.05)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de RozoTravel en Rozó, Valle del Cauca"
          />
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
