import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LegalDatos from './pages/LegalDatos';
import LegalTerminos from './pages/LegalTerminos';
import LegalNavegacion from './pages/LegalNavegacion';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/politica-de-privacidad" element={<LegalDatos />} />
        <Route path="/terminos-y-condiciones" element={<LegalTerminos />} />
        <Route path="/politica-de-cookies" element={<LegalNavegacion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
