import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import CookiesPolicy from './pages/CookiesPolicy';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
        <Route path="/terminos-y-condiciones" element={<TermsAndConditions />} />
        <Route path="/politica-de-cookies" element={<CookiesPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
