import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-coffee-950 text-warm-200 py-16 border-t border-warm-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="space-y-6">
            <h3 className="font-serif text-2xl text-warm-100 tracking-wider">Agnieszka Kochanowska</h3>
            <p className="font-sans text-sm leading-relaxed text-warm-400 font-light max-w-xs">
              Hipnoterapia, integracja psychodeliczna, sesje oddechowe i praca w nurcie Cannabis Assisted Therapy — gabinet w Białymstoku i Warszawie, możliwość sesji online.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="font-sans text-xs font-bold uppercase text-warm-500 tracking-widest">Kontakt</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-warm-300 hover:text-warm-100 transition-colors cursor-pointer group">
                <Mail size={16} className="text-coffee-400 group-hover:text-coffee-300" />
                <span className="text-sm font-light">agnieszka_kochanowska@wp.pl</span>
              </div>
              <div className="flex items-center space-x-3 text-warm-300 hover:text-warm-100 transition-colors cursor-pointer group">
                <Phone size={16} className="text-coffee-400 group-hover:text-coffee-300" />
                <span className="text-sm font-light">+48 537 537 277</span>
              </div>
              <div className="flex items-center space-x-3 text-warm-300 group">
                <MapPin size={16} className="text-coffee-400" />
                <span className="text-sm font-light">Białystok, Warszawa, Online</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-sans text-xs font-bold uppercase text-warm-500 tracking-widest">Szybkie Linki</h4>
            <div className="flex flex-col space-y-3">
              <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-sm text-warm-300 hover:text-coffee-400 transition-colors hover:translate-x-1 transform duration-300">O Mnie</a>
              <a href="#offer" onClick={(e) => handleNavClick(e, 'offer')} className="text-sm text-warm-300 hover:text-coffee-400 transition-colors hover:translate-x-1 transform duration-300">Oferta</a>
              <Link to="/pricing" className="text-sm text-warm-300 hover:text-coffee-400 transition-colors hover:translate-x-1 transform duration-300">Cennik</Link>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-sm text-warm-300 hover:text-coffee-400 transition-colors hover:translate-x-1 transform duration-300">Kontakt</a>
            </div>
            <div className="pt-6 flex space-x-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-warm-400 hover:text-coffee-400 transition-colors"><Instagram size={20} /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-warm-400 hover:text-coffee-400 transition-colors"><Facebook size={20} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-warm-400 hover:text-coffee-400 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
          
        </div>
        <div className="mt-16 pt-8 border-t border-warm-800 text-center">
          <p className="text-xs text-warm-500 font-sans tracking-wide">
            &copy; {new Date().getFullYear()} Agnieszka Kochanowska Hipnoterapia. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
