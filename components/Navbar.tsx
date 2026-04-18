import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Instagram, Facebook, Linkedin } from 'lucide-react';
import { NavItem } from '../types';

interface NavbarProps {
  navItems: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    if (path.startsWith('#')) {
      e.preventDefault();
      const id = path.substring(1);
      
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollTo: id } });
      } else {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      setIsOpen(false);
    }
  };

  // Top-bar text color: white (#f3f3f3) over hero, orange (coffee-500) over solid bg after scroll.
  // Hover always goes to dark grey for a subtle, readable accent on both backgrounds.
  const topBarText = scrolled
    ? 'text-coffee-500 hover:text-[#2a2a2a]'
    : 'text-[#f3f3f3] hover:text-[#2a2a2a]';

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Remove hash if present to ensure clean URL
      if (location.hash) {
          window.history.pushState("", document.title, window.location.pathname + window.location.search);
      }
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-warm-900/95 backdrop-blur-md shadow-md border-b border-warm-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Left Side: Socials & Brand */}
          <div className="flex items-center">
            {/* Social Icons (Desktop) */}
            <div className="hidden lg:flex items-center space-x-5 mr-8 pr-8 border-r border-warm-800/40">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={`${topBarText} transition-colors duration-300 transform hover:scale-110`}>
                    <Instagram size={18} strokeWidth={1.5} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={`${topBarText} transition-colors duration-300 transform hover:scale-110`}>
                    <Facebook size={18} strokeWidth={1.5} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`${topBarText} transition-colors duration-300 transform hover:scale-110`}>
                    <Linkedin size={18} strokeWidth={1.5} />
                </a>
            </div>

            <div className="shrink-0 flex items-center">
              <Link 
                to="/" 
                onClick={handleLogoClick}
                className={`font-serif text-xl md:text-xl font-semibold tracking-wider transition-colors cursor-pointer ${topBarText}`}
              >
                AGNIESZKA KOCHANOWSKA
              </Link>
            </div>
          </div>
          
          {/* Right Side: Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <div className="flex items-center">
                    <a
                      href={item.path}
                      onClick={(e) => handleNavClick(e, item.path)}
                      className={`flex items-center space-x-1 font-sans text-xs font-bold tracking-[0.15em] uppercase transition-colors ${topBarText}`}
                    >
                      <span>{item.label}</span>
                    </a>
                    <button aria-label="Rozwiń podmenu" className={`ml-1 transition-colors ${topBarText}`}>
                         <ChevronDown size={14} />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 w-64 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                      <div className="bg-warm-950/90 backdrop-blur-md rounded-xl shadow-xl overflow-hidden py-2 border border-warm-800">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="block px-6 py-3 text-xs uppercase tracking-wider text-coffee-500 hover:bg-warm-900 hover:text-[#2a2a2a] transition-colors border-b border-warm-800/50 last:border-0 font-medium"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  item.path.startsWith('#') ? (
                    <a
                      href={item.path}
                      onClick={(e) => handleNavClick(e, item.path)}
                      className={`font-sans text-xs font-bold tracking-[0.15em] uppercase transition-colors ${topBarText}`}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      className={`font-sans text-xs font-bold tracking-[0.15em] uppercase transition-colors ${topBarText}`}
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </div>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors ${topBarText}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-warm-950 shadow-xl h-dvh overflow-y-auto pb-[calc(env(safe-area-inset-bottom)+2rem)] border-t border-warm-800 flex flex-col">
          <div className="px-4 pt-4 pb-8 space-y-1 grow">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <div className="space-y-1">
                     <div className="flex justify-between items-center border-b border-warm-800">
                        <a 
                           href={item.path}
                           onClick={(e) => handleNavClick(e, item.path)}
                           className="grow py-4 text-sm font-bold text-[#f3f3f3] uppercase tracking-widest"
                        >
                           {item.label}
                        </a>
                        <button 
                            aria-label="Rozwiń podmenu"
                            onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                            className="p-4 text-[#f3f3f3]"
                        >
                            <ChevronDown size={16} className={`transform transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                        </button>
                     </div>
                     
                     {activeDropdown === item.label && (
                       <div className="bg-warm-900/50 py-2 rounded-lg">
                         {item.children.map(child => (
                           <Link
                             key={child.path}
                             to={child.path}
                             className="block px-8 py-3 text-xs uppercase tracking-wider text-coffee-500 hover:text-[#2a2a2a]"
                             onClick={() => setIsOpen(false)}
                           >
                             {child.label}
                           </Link>
                         ))}
                       </div>
                     )}
                  </div>
                ) : (
                  item.path.startsWith('#') ? (
                    <a
                      href={item.path}
                      onClick={(e) => handleNavClick(e, item.path)}
                      className="block px-3 py-4 text-sm font-bold text-[#f3f3f3] uppercase tracking-widest border-b border-warm-800 hover:bg-warm-900"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-4 text-sm font-bold text-[#f3f3f3] uppercase tracking-widest border-b border-warm-800 hover:bg-warm-900"
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </div>
            ))}
          </div>
          
          {/* Mobile Socials */}
          <div className="px-8 py-8 border-t border-warm-800 bg-warm-900/50">
             <p className="text-center text-xs text-[#f3f3f3] uppercase tracking-widest mb-4">Obserwuj Mnie</p>
             <div className="flex justify-center space-x-8">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#f3f3f3] hover:text-coffee-400 transition-colors">
                    <Instagram size={24} strokeWidth={1.5} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[#f3f3f3] hover:text-coffee-400 transition-colors">
                    <Facebook size={24} strokeWidth={1.5} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#f3f3f3] hover:text-coffee-400 transition-colors">
                    <Linkedin size={24} strokeWidth={1.5} />
                </a>
             </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
