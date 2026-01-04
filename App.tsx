import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { OfferDetail } from './pages/Offer';
import { NavItem } from './types';

// ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const navItems: NavItem[] = [
  { label: 'O Mnie', path: '#about' },
  { 
    label: 'Oferta', 
    path: '#offer',
    children: [
      { label: 'Stres i Lęk', path: '#offer' },
      { label: 'Rzucanie Palenia', path: '#offer' },
      { label: 'Regresja', path: '#offer' },
      { label: 'Pewność Siebie', path: '#offer' }
    ]
  },
  { label: 'Cennik', path: '#pricing' },
  { label: 'Kontakt', path: '#contact' },
];

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-warm-900 font-sans text-warm-200 selection:bg-coffee-600 selection:text-white">
        <Navbar navItems={navItems} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/offer/:id" element={<OfferDetail />} />
            {/* Redirect legacy routes to home sections if needed, or handle via simple routing */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;