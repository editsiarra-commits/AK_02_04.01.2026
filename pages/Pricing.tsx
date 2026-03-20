import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Check, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface PricingProps {
  id?: string;
}

const Pricing: React.FC<PricingProps> = ({ id }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setItemsPerPage(3);
      else if (window.innerWidth >= 768) setItemsPerPage(2);
      else setItemsPerPage(1);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Keep track of which card is flipped. We'll store a set of flipped card IDs.
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    // Handler to close flipped cards when clicking outside
    const handleGlobalClick = (e: MouseEvent) => {
      // Check if the click was inside the slider container
      const target = e.target as HTMLElement;
      if (!target.closest('.slider-container')) {
        setFlippedCards(new Set());
      }
    };

    // Add event listener to document
    document.addEventListener('click', handleGlobalClick);
    
    // Cleanup listener on unmount
    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  const toggleFlip = (id: number, e: React.MouseEvent) => {
    // Prevent the click from bubbling up to document
    e.stopPropagation();
    
    setFlippedCards(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        // Option A: Flip only one card at a time (clearing others)
        const single = new Set<number>();
        single.add(id);
        return single;
      }
      return next;
    });
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/', { state: { scrollTo: 'contact' } });
  };

  const pricingItems = [
    {
      id: 1,
      title: "Hipnoterapia",
      subtitle: "Proces transformacyjny",
      price: "2000 zł",
      duration: "5 sesji",
      description: "Ten pakiet tworzę dla osób, które mówią: „Chcę przestać łatać objawy – chcę realnej, trwałej zmiany.",
      targetAudience: "Ponad 7 godzin głębokiej, uważnej pracy w relacji. Pierwsze spotkanie – do 2 godzin – to czas, w którym naprawdę Cię poznaję: Twoją historię, zasoby, mechanizmy, marzenia i to, co dotychczas blokowało zmianę. Kolejne sesje trwają zazwyczaj 90 minut.”.",
      details: [
        "hipnoterapia osiąga najwyższą moc, gdy jest procesem – sekwencją spotkań, w której każdy krok buduje na poprzednim.",
        "dzięki temu mogę zaprojektować drogę dokładnie pod Ciebie – zamiast gasić pojedyncze pożary, docieramy do źródła.",
        "to również najbardziej ekonomiczna i etyczna forma współpracy – zarówno dla Ciebie, jak i dla jakości efektów."
      ]
    },
    {
      id: 2,
      title: "Hipnoterapia",
      subtitle: "Pojedyncza sesja",
      price: "500 zł",
      duration: "do 2 godzin",
      description: "Jeżeli po sesji uznasz, że warto kontynuować, zaproponuję najkorzystniejszą ścieżkę dalszej pracy — w tym możliwość przejścia na pakiet.",
      targetAudience: "Wybierają je osoby, które chcą:",
      details: [
        "poczuć, czym naprawdę jest stan hipnozy",
        "przepracować jeden, konkretny temat już teraz",
        "doświadczyć mojego stylu prowadzenia i poczucia bezpieczeństwa w relacji",
        "spokojnie zdecydować, czy chcą wejść głębiej"
      ]
    },
    {
      id: 3,
      title: "Cannabis Assisted Therapy",
      subtitle: "Pełny 3 etapowy proces",
      price: "2500 zł",
      duration: "Ok. 9 godzin łącznie",
      description: "Uporządkowana, bezpieczna podróż w głąb: przygotowanie → doświadczenie → integracja. Proces realizowany zgodnie z najwyższymi standardami bezpieczeństwa i etyki. Dla osób gotowych na głęboką, świadomą zmianę – w kontrolowanych, profesjonalnych ramach.",
      targetAudience: "W pakiecie:",
      details: [
        "sesja przygotowująca – ok. 2 h (intencja, granice, zasoby bezpieczeństwa, plan wsparcia)",
        "sesja psychodeliczna – Mindfulness-Based Psychedelic Therapy z wykorzystaniem medycznej marihuany – ok. 5 h (głęboka, prowadzona, w pełni legalna i nadzorowana)",
        "sesja integracyjna – ok. 2 h (przekładanie wglądów na codzienne życie, nowe decyzje, stabilne osadzenie)"
      ]
    },
    {
      id: 4,
      title: "Sesja integracji psychodelicznej",
      subtitle: "/ Sesja przygotowująca",
      price: "600 zł",
      duration: "2–2,5 godziny",
      description: "To przestrzeń, w której wglądy stają się trwałą zmianą, a nie tylko chwilowym olśnieniem.",
      targetAudience: "Dla Ciebie, jeśli:",
      details: [
        "niedawno przeżyłeś/aś intensywne doświadczenie i potrzebujesz uporządkować, nazwać i osadzić to, co się wydarzyło",
        "planujesz pracę psychodeliczną i chcesz wejść w nią z maksymalną świadomością, intencją i wsparciem"
      ]
    },
    {
      id: 5,
      title: "Oddychanie holotropowe",
      subtitle: "+ integracja",
      price: "1500 zł",
      duration: "Do 5 godzin + sesja integracyjna",
      description: "Dla osób, które pragną doświadczeniowej, somatycznej pracy – bez substancji, a z ogromną mocą.",
      targetAudience: "Pakiet zapewnia pełne zamknięcie pętli:",
      details: [
        "intensywny wgląd i uwolnienie w ciele",
        "spokojne, świadome osadzenie tego, co się ujawniło",
        "przełożenie zmiany na codzienne życie"
      ]
    }
  ];

  const maxSlide = Math.max(0, pricingItems.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentSlide((prev) => prev >= maxSlide ? 0 : prev + 1);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => prev <= 0 ? maxSlide : prev - 1);
  };

  return (
    <div className="bg-warm-900 text-warm-200 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 border-b border-warm-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            src="/assets/video4.mp4"
          />
          <div className="absolute inset-0 bg-warm-950/85"></div>
          <div className="absolute right-0 bottom-0 bg-linear-to-t from-warm-900 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pt-8">
          <p className="text-coffee-400 font-sans text-xl font-bold uppercase tracking-[0.3em] mb-4">
            Inwestycja w Twoją Zmianę
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-warm-100 mb-4">
            Cennik
          </h1>
          <div className="text-xl md:text-2xl text-warm-300 font-serif italic max-w-3xl mx-auto space-y-4">
            <p>To nie są po prostu „sesje”.</p>
            <p className="text-[#32303b]">To starannie zaprojektowane przestrzenie, w których możesz przestać walczyć ze sobą i zacząć żyć w zgodzie z tym, kim naprawdę jesteś.</p>
            <p>Jeśli czujesz, że to może być Twój moment – napisz lub zadzwoń.</p>
            <p className="text-[#e8573a]">Pierwszy krok jest bezpłatny.</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-8 pl-4 sm:pl-12">
            <Link to="/" className="inline-flex items-center text-coffee-400 hover:text-coffee-300 transition-colors">
              <ArrowLeft size={20} className="mr-2" />
              <span>Powrót do strony głównej</span>
            </Link>
          </div>
        </div>
          
        {/* Full Width Horizontal Slider */}
        <div className="w-full relative mt-8 sm:mt-0 slider-container">
          <div className="max-w-[1800px] mx-auto relative px-4 sm:px-12 xl:px-20">
              
              {/* Navigation Buttons */}
              <button 
                onClick={prevSlide}
                className="absolute left-0 sm:left-4 top-[40%] sm:top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 rounded-full bg-warm-950/90 backdrop-blur-sm border border-warm-700 text-coffee-300 shadow-xl shadow-black/40 hover:bg-warm-900 hover:text-coffee-200 hover:border-coffee-500 hover:scale-105 transition-all focus:outline-none group"
                aria-label="Previous option"
              >
                <ChevronLeft size={20} className="sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" strokeWidth={2} />
              </button>
              
              <button 
                onClick={nextSlide}
                className="absolute right-0 sm:right-4 top-[40%] sm:top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 rounded-full bg-warm-950/90 backdrop-blur-sm border border-warm-700 text-coffee-300 shadow-xl shadow-black/40 hover:bg-warm-900 hover:text-coffee-200 hover:border-coffee-500 hover:scale-105 transition-all focus:outline-none group"
                aria-label="Next option"
              >
                <ChevronRight size={20} className="sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" strokeWidth={2} />
              </button>

              {/* Slider Container */}
              <div className="overflow-hidden w-full">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(calc(-${currentSlide} * 100% / ${itemsPerPage}))` }}
                >
                  {pricingItems.map((item, index) => {
                    const isFlipped = flippedCards.has(item.id);
                    return (
                    <div key={item.id} className="w-full md:w-1/2 xl:w-1/3 shrink-0 pb-16 md:pb-20 pt-4 sm:pt-[50px] px-8 sm:px-10 lg:px-12 perspective-[1500px] flex pricing-card-container">
                      {/* Flippable Inner Container */}
                      <div 
                        className="w-full relative transition-all duration-700 preserve-3d cursor-pointer group grid h-full"
                        style={{ 
                          WebkitTransformStyle: 'preserve-3d',
                          transformStyle: 'preserve-3d',
                          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                        }}
                        onClick={(e) => toggleFlip(item.id, e)}
                      >
                        
                        {/* -------------------- FRONT FACE -------------------- */}
                        <div 
                          className="row-start-1 col-start-1 bg-warm-900 rounded-[32px] sm:rounded-[40px] overflow-hidden border border-warm-800 shadow-[0_20px_70px_-10px_rgba(0,0,0,0.5)] hover:border-warm-700 hover:shadow-[0_20px_70px_-10px_rgba(154,115,82,0.25)] transition-all duration-500 backface-hidden flex flex-col z-20"
                          style={{ 
                            WebkitBackfaceVisibility: 'hidden',
                            backfaceVisibility: 'hidden',
                            transform: 'rotateY(0deg)',
                            cursor: 'default'
                          }}
                        >
                          <div className="p-8 sm:p-10 md:p-12 h-full flex flex-col relative gap-6 sm:gap-8">
                            <div className="relative z-10 pt-2 sm:pt-4">
                              <div className="text-coffee-400 font-sans text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-4 sm:mb-6">
                                0{index + 1} — 0{pricingItems.length}
                              </div>
                              
                            <h3 className="font-serif text-3xl sm:text-4xl lg:text-3xl xl:text-4xl text-coffee-600 leading-tight sm:leading-snug mb-2 font-medium pr-8 sm:pr-12">
                              {item.title}
                            </h3>
                              <p className="text-warm-400 text-sm sm:text-lg md:text-xl font-light tracking-wide">
                                {item.subtitle}
                              </p>
                            </div>
                            
                            <div className="relative z-10">
                              <div className="flex items-baseline font-serif tracking-tight">
                                <span className="text-5xl sm:text-6xl lg:text-5xl xl:text-6xl text-warm-100 mr-2 sm:mr-3">{item.price.split(' ')[0]}</span>
                                <span className="text-3xl sm:text-4xl lg:text-3xl xl:text-4xl text-black font-light">{item.price.split(' ')[1]}</span>
                              </div>
                              <div className="text-warm-500 mt-2 sm:mt-4 font-light text-xs sm:text-sm md:text-base tracking-widest uppercase">
                                {item.duration}
                              </div>
                            </div>
                            
                            <div className="mt-auto pt-6 sm:pt-8 relative z-10 w-full flex justify-center sm:justify-start">
                              <button 
                                onClick={(e) => { e.stopPropagation(); toggleFlip(item.id, e); }} 
                                className="block w-full sm:w-2/3 md:w-3/4 lg:w-2/3 py-3 sm:py-4 text-center bg-coffee-600 text-white font-sans hover:bg-coffee-500 transition-all duration-300 uppercase text-[10px] sm:text-sm tracking-widest rounded-full cursor-pointer"
                              >
                                DOWIEDZ SIĘ WIĘCEJ
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* -------------------- BACK FACE -------------------- */}
                        <div 
                          className="row-start-1 col-start-1 bg-warm-950 rounded-[32px] sm:rounded-[40px] overflow-hidden border border-warm-800 shadow-[0_20px_70px_-10px_rgba(0,0,0,0.5)] hover:border-warm-700 transition-colors duration-500 backface-hidden z-10 flex flex-col"
                          style={{ 
                            WebkitBackfaceVisibility: 'hidden',
                            backfaceVisibility: 'hidden',
                            transform: 'rotateY(180deg)',
                            cursor: 'default'
                          }}
                        >
                          <div className="p-8 sm:p-10 md:p-12 h-full flex flex-col relative gap-6 sm:gap-8">
                            <div className="pt-2 sm:pt-4">
                              <p className="text-warm-300 text-[13px] sm:text-base font-extralight leading-[18px] tracking-[0.5px] pr-8 sm:pr-12">
                                {item.description}
                              </p>
                            </div>
                            
                            <div className="space-y-4 sm:space-y-6">
                              <h4 className="font-sans text-[12px] sm:text-[14px] md:text-[15px] font-normal transition-all text-coffee-400 text-left leading-[18px]">
                                {item.targetAudience}
                              </h4>
                              <ul className="space-y-3 sm:space-y-4">
                                {item.details.map((detail, i) => (
                                  <li key={i} className="flex items-start text-warm-300">
                                    <div className="mt-1.5 sm:mt-2 mr-3 sm:mr-4 shrink-0 w-1.5 h-1.5 rounded-full bg-coffee-500/60"></div>
                                    <span className="font-light leading-[18px] text-[12px] sm:text-[14px] md:text-[15px]">{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div className="mt-auto pt-6 sm:pt-8 w-full flex justify-center sm:justify-start">
                              <button 
                                onClick={(e) => { e.stopPropagation(); handleContactClick(e); }} 
                                className="block w-full sm:w-2/3 md:w-3/4 lg:w-2/3 py-3 sm:py-4 text-center border border-coffee-600 text-coffee-400 font-sans hover:bg-coffee-900/30 transition-all duration-300 uppercase text-[10px] sm:text-sm tracking-widest rounded-full cursor-pointer"
                              >
                                Zarezerwuj Termin
                              </button>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  )})}
                </div>
              </div>
              
              {/* Pagination Indicators */}
              <div className="flex justify-center space-x-3 mt-6 mb-4">
                {Array.from({ length: maxSlide + 1 }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-500 ease-out cursor-pointer ${
                      currentSlide === idx ? 'bg-coffee-400 w-10 shadow-[0_0_8px_rgba(154,115,82,0.6)]' : 'bg-warm-700 w-3 hover:bg-coffee-500 hover:w-5'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        <div className="container mx-auto px-4 max-w-6xl mt-12">
          <div className="text-left mx-4 sm:mx-12 lg:mx-16 mb-10">
            <p className="text-warm-300 text-lg font-light mb-6">
              Przed dokonaniem jakiejkolwiek płatności zapraszam Cię na bezpłatną, 15-minutową konsultację telefoniczną.
              W spokojnej przestrzeni, w której wspólnie:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start text-warm-300">
                <Check size={20} className="text-coffee-400 mr-3 mt-0.5 shrink-0" /> 
                <span>precyzyjnie nazwiemy to, co naprawdę chcecie zmienić / uzdrowić / rozwinąć</span>
              </li>
              <li className="flex items-start text-warm-300">
                <Check size={20} className="text-coffee-400 mr-3 mt-0.5 shrink-0" /> 
                <span>poczujemy, która ścieżka będzie dla Ciebie najbardziej precyzyjna i bezpieczna</span>
              </li>
              <li className="flex items-start text-warm-300">
                <Check size={20} className="text-coffee-400 mr-3 mt-0.5 shrink-0" /> 
                <span>ustalimy rytm i terminy, które będą Ci służyć.</span>
              </li>
            </ul>
            <p className="text-warm-400 text-sm font-light leading-relaxed">
              Płatność realizowana jest z góry – stanowi jednocześnie gwarancję Twojego miejsca w moim kalendarzu. 
              W razie odwołania lub niewykorzystania sesji przez Ciebie – opłata nie podlega zwrotowi. 
              Przełożenie terminu jest możliwe do 24 h przed spotkaniem. 
              Potrzebujesz faktury (usługa terapeutyczna / superwizja)? Napisz lub zadzwoń przed opłatą – przygotuję ją bez problemu.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Pricing;