import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Instagram, Facebook } from 'lucide-react';
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

  // Handle scroll after navigation from another page
  useEffect(() => {
    if (location.pathname === '/') {
      // Check for state-based scroll (from navigation) or hash-based scroll (from URL)
      const stateId = (location.state as any)?.scrollTo;
      const hashId = location.hash ? location.hash.substring(1) : null;
      const id = stateId || hashId;

      if (id) {
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);

        // Clear state if it was used to prevent sticky scroll behavior on refresh
        if (stateId) {
           navigate(location.pathname, { replace: true, state: {} });
        }
      }
    }
  }, [location, navigate]);

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
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-warm-400 hover:text-coffee-400 transition-colors duration-300 transform hover:scale-110">
                    <Instagram size={18} strokeWidth={1.5} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-warm-400 hover:text-coffee-400 transition-colors duration-300 transform hover:scale-110">
                    <Facebook size={18} strokeWidth={1.5} />
                </a>
            </div>

            <div className="flex-shrink-0 flex items-center">
              <Link 
                to="/" 
                onClick={handleLogoClick}
                className="font-serif text-xl md:text-xl font-semibold tracking-wider text-warm-100 hover:text-white transition-colors cursor-pointer"
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
                      className={`flex items-center space-x-1 font-sans text-xs font-bold tracking-[0.15em] uppercase hover:text-coffee-400 transition-colors ${
                         scrolled ? 'text-warm-200' : 'text-warm-100'
                      }`}
                    >
                      <span>{item.label}</span>
                    </a>
                    <button className="ml-1 text-warm-200 hover:text-coffee-400">
                         <ChevronDown size={14} />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 w-64 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                      <div className="bg-warm-900 rounded-sm shadow-xl overflow-hidden py-2 border border-warm-800">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="block px-6 py-3 text-xs uppercase tracking-wider text-warm-300 hover:bg-warm-800 hover:text-coffee-300 transition-colors border-b border-warm-800/50 last:border-0 font-medium"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.path}
                    onClick={(e) => handleNavClick(e, item.path)}
                    className={`font-sans text-xs font-bold tracking-[0.15em] uppercase hover:text-coffee-400 transition-colors ${
                      scrolled ? 'text-warm-200' : 'text-warm-100'
                    }`}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-warm-100 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-warm-900 shadow-xl h-screen overflow-y-auto pb-20 border-t border-warm-800 flex flex-col">
          <div className="px-4 pt-4 pb-3 space-y-1 flex-grow">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <div className="space-y-1">
                     <div className="flex justify-between items-center border-b border-warm-800">
                        <a 
                           href={item.path}
                           onClick={(e) => handleNavClick(e, item.path)}
                           className="flex-grow py-4 text-sm font-bold text-warm-100 uppercase tracking-widest"
                        >
                           {item.label}
                        </a>
                        <button 
                            onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                            className="p-4 text-warm-400"
                        >
                            <ChevronDown size={16} className={`transform transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                        </button>
                     </div>
                     
                     {activeDropdown === item.label && (
                       <div className="bg-warm-950/30 py-2">
                         {item.children.map(child => (
                           <Link
                             key={child.path}
                             to={child.path}
                             className="block px-8 py-3 text-xs uppercase tracking-wider text-warm-300 hover:text-coffee-300"
                             onClick={() => setIsOpen(false)}
                           >
                             {child.label}
                           </Link>
                         ))}
                       </div>
                     )}
                  </div>
                ) : (
                  <a
                    href={item.path}
                    onClick={(e) => handleNavClick(e, item.path)}
                    className="block px-3 py-4 text-sm font-bold text-warm-100 uppercase tracking-widest border-b border-warm-800 hover:bg-warm-800"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </div>
          
          {/* Mobile Socials */}
          <div className="px-8 py-8 border-t border-warm-800 bg-warm-950/50">
             <p className="text-center text-xs text-warm-500 uppercase tracking-widest mb-4">Obserwuj Mnie</p>
             <div className="flex justify-center space-x-8">
                <a href="https://instagram.com" className="text-warm-300 hover:text-white transition-colors">
                    <Instagram size={24} strokeWidth={1.5} />
                </a>
                <a href="https://facebook.com" className="text-warm-300 hover:text-white transition-colors">
                    <Facebook size={24} strokeWidth={1.5} />
                </a>
             </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
