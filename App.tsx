import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Seo from './components/Seo';
import { NavItem } from './types';

const Home = lazy(() => import('./pages/Home'));
const OfferDetail = lazy(() => import('./pages/Offer').then(m => ({ default: m.OfferDetail })));
const Hipnoterapia = lazy(() => import('./pages/Hipnoterapia'));
const IntegracjaPsychodeliczna = lazy(() => import('./pages/IntegracjaPsychodeliczna'));
const SesjeOddechowe = lazy(() => import('./pages/SesjeOddechowe'));
const CAT = lazy(() => import('./pages/CAT'));
const Pricing = lazy(() => import('./pages/Pricing'));
const PrzydatnaWiedza = lazy(() => import('./pages/PrzydatnaWiedza'));

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
      { label: 'HIPNOTERAPIA', path: '/hipnoterapia' },
      { label: 'PRACA Z POSZERZONYMI STANAMI ŚWIADOMOŚCI', path: '/integracja-psychodeliczna' },
      { label: 'SESJE ODDECHOWE', path: '/sesje-oddechowe' }
      // { label: 'CAT Cannabis Assisted Therapy', path: '/cat' }
    ]
  },
  { label: 'Przydatna Wiedza', path: '/przydatna-wiedza' },
  { label: 'Cennik', path: '/pricing' },
  { label: 'Kontakt', path: '#contact' },
];

const RouteFallback: React.FC = () => (
  <div className="flex items-center justify-center min-h-[60vh] w-full">
    <div className="h-10 w-10 rounded-full border-2 border-coffee-500/30 border-t-coffee-500 animate-spin" aria-label="Ładowanie..." />
  </div>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Seo />
      <div className="flex flex-col min-h-dvh w-full overflow-x-hidden bg-warm-900 font-sans text-warm-200 selection:bg-coffee-600 selection:text-white">
        <Navbar navItems={navItems} />
        
        <main className="grow">
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/offer/:id" element={<OfferDetail />} />
              <Route path="/hipnoterapia" element={<Hipnoterapia />} />
              <Route path="/integracja-psychodeliczna" element={<IntegracjaPsychodeliczna />} />
              <Route path="/sesje-oddechowe" element={<SesjeOddechowe />} />
              <Route path="/cat" element={<CAT />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/przydatna-wiedza" element={<PrzydatnaWiedza />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
