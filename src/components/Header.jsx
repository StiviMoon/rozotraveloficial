import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 left-0 top-0 ${isScrolled ? 'bg-black/60 backdrop-blur-md py-2 shadow-lg border-b border-white/10' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-2 lg:grid-cols-3 items-center">
        
        <div className="flex justify-start">
          <a href="#" className="flex items-center gap-2">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-white shadow-md flex items-center justify-center border-2 border-white/20">
              <img 
                src="/logorozotravel.png" 
                alt="RozoTravel Logo" 
                className="w-full h-full object-cover scale-[1.25]"
              />
            </div>
          </a>
        </div>
        
        <div className="hidden lg:flex justify-center">
          <nav className="flex items-center gap-1 bg-gray-50/80 p-1.5 rounded-full border border-gray-100 shadow-inner font-medium text-sm">
            <a href="#inicio" className="text-gray-700 hover:text-rozo-orange hover:bg-white px-4 py-2 rounded-full transition-all hover:shadow-sm">Inicio</a>
            <a href="#servicios" className="text-gray-700 hover:text-rozo-orange hover:bg-white px-4 py-2 rounded-full transition-all hover:shadow-sm">Servicios</a>
            <a href="#fincas" className="text-gray-700 hover:text-rozo-orange hover:bg-white px-4 py-2 rounded-full transition-all hover:shadow-sm">Fincas</a>
            <a href="#nosotros" className="text-gray-700 hover:text-rozo-orange hover:bg-white px-4 py-2 rounded-full transition-all hover:shadow-sm">Nosotros</a>
            <a href="#galeria" className="text-gray-700 hover:text-rozo-orange hover:bg-white px-4 py-2 rounded-full transition-all hover:shadow-sm">Galería</a>
            <a href="#contacto" className="text-gray-700 hover:text-rozo-orange hover:bg-white px-4 py-2 rounded-full transition-all hover:shadow-sm">Contacto</a>
          </nav>
        </div>
        
        <div className="hidden lg:flex justify-end">
          <a href="https://wa.me/573189332134?text=¡Hola!%20Quiero%20reservar%20con%20RozoTravel" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-gradient-green text-white px-5 py-2.5 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all">
            Reservar por WhatsApp
          </a>
        </div>

        <div className="flex lg:hidden justify-end">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white drop-shadow-md focus:outline-none">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg absolute w-full top-full left-0 border-t border-gray-100">
          <nav className="flex flex-col p-4 text-center gap-4">
            <a href="#inicio" onClick={() => setMobileMenuOpen(false)} className="hover:text-rozo-green font-medium">Inicio</a>
            <a href="#servicios" onClick={() => setMobileMenuOpen(false)} className="hover:text-rozo-green font-medium">Servicios</a>
            <a href="#fincas" onClick={() => setMobileMenuOpen(false)} className="hover:text-rozo-green font-medium">Fincas</a>
            <a href="#nosotros" onClick={() => setMobileMenuOpen(false)} className="hover:text-rozo-green font-medium">Nosotros</a>
            <a href="#galeria" onClick={() => setMobileMenuOpen(false)} className="hover:text-rozo-green font-medium">Galería</a>
            <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="hover:text-rozo-green font-medium">Contacto</a>
            <a href="https://wa.me/573189332134" target="_blank" rel="noreferrer" className="bg-gradient-green text-white px-5 py-3 rounded-full font-semibold inline-block mx-auto mt-2">
              Reservar
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
