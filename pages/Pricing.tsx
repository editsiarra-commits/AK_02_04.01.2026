import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Check, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface PricingProps {
  id?: string;
}

const Pricing: React.FC<PricingProps> = ({ id }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

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
        "Hipnoterapia osiąga najwyższą moc, gdy jest procesem – sekwencją spotkań, w której każdy krok buduje na poprzednim.",
        "Dzięki temu mogę zaprojektować drogę dokładnie pod Ciebie – zamiast gasić pojedyncze pożary, docieramy do źródła.",
        "To również najbardziej ekonomiczna i etyczna forma współpracy – zarówno dla Ciebie, jak i dla jakości efektów."
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
        "Sesja przygotowująca – ok. 2 h (intencja, granice, zasoby bezpieczeństwa, plan wsparcia)",
        "Sesja psychodeliczna – Mindfulness-Based Psychedelic Therapy z wykorzystaniem medycznej marihuany – ok. 5 h (głęboka, prowadzona, w pełni legalna i nadzorowana)",
        "Sesja integracyjna – ok. 2 h (przekładanie wglądów na codzienne życie, nowe decyzje, stabilne osadzenie)"
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % pricingItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + pricingItems.length) % pricingItems.length);
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
      <div className="container mx-auto px-4 py-0">
        <div className="max-w-6xl mx-auto py-10">
          <div className="mb-8 pl-4 sm:pl-12">
            <Link to="/" className="inline-flex items-center text-coffee-400 hover:text-coffee-300 transition-colors">
              <ArrowLeft size={20} className="mr-2" />
              <span>Powrót do strony głównej</span>
            </Link>
          </div>
          

          <div className="text-left mx-8 sm:mx-16 md:mx-20 lg:mx-28 mb-10">
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

          {/* Full Width Horizontal Slider */}
          <div className="w-full relative px-0 sm:px-0">
            <div className="max-w-6xl mx-auto relative">
              
              {/* Navigation Buttons */}
              <button 
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 sm:-ml-4 lg:-ml-8 z-20 p-4 rounded-full bg-warm-950/90 backdrop-blur-sm border border-warm-700 text-coffee-300 shadow-xl shadow-black/40 hover:bg-warm-900 hover:text-coffee-200 hover:border-coffee-500 hover:scale-105 transition-all focus:outline-none group"
                aria-label="Previous option"
              >
                <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" strokeWidth={2} />
              </button>
              
              <button 
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 sm:-mr-4 lg:-mr-8 z-20 p-4 rounded-full bg-warm-950/90 backdrop-blur-sm border border-warm-700 text-coffee-300 shadow-xl shadow-black/40 hover:bg-warm-900 hover:text-coffee-200 hover:border-coffee-500 hover:scale-105 transition-all focus:outline-none group"
                aria-label="Next option"
              >
                <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" strokeWidth={2} />
              </button>

              {/* Slider Container */}
              <div className="overflow-hidden -mx-4 sm:mx-0">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {pricingItems.map((item, index) => (
                    <div key={item.id} className="w-full shrink-0 pb-16 md:pb-20 pt-[50px] px-8 sm:px-16 md:px-20 lg:px-28">
                      <div className="bg-warm-950 rounded-[40px] overflow-hidden border border-warm-800/80 flex flex-col md:flex-row h-full shadow-[0_20px_70px_-10px_rgba(0,0,0,0.5)] hover:border-warm-700 hover:shadow-[0_20px_70px_-10px_rgba(154,115,82,0.25)] transition-all duration-500">
                        
                        {/* Left Column: Title & Price */}
                        <div className="p-10 md:p-14 md:w-5/12 bg-warm-900 flex flex-col justify-between relative overflow-hidden border-b md:border-b-0 md:border-r border-warm-800">
                          
                          <div className="relative z-10">
                            <div className="text-coffee-400 font-sans text-xs uppercase tracking-[0.2em] mb-8">
                              0{index + 1} — 0{pricingItems.length}
                            </div>
                            
                            <h3 className="font-serif text-3xl md:text-4xl text-coffee-600 leading-snug mb-4 font-medium">
                              {item.title}
                            </h3>
                            <p className="text-warm-400 text-lg font-light tracking-wide">
                              {item.subtitle}
                            </p>
                          </div>
                          
                          <div className="mt-14 mb-8 md:mb-0 relative z-10">
                            <div className="flex items-baseline font-serif tracking-tight">
                              <span className="text-5xl md:text-6xl text-warm-100 mr-2">{item.price.split(' ')[0]}</span>
                              <span className="text-3xl md:text-4xl text-black font-light">{item.price.split(' ')[1]}</span>
                            </div>
                            <div className="text-warm-500 mt-4 font-light text-sm tracking-widest uppercase">
                              {item.duration}
                            </div>
                          </div>
                          
                          <div className="mt-12 hidden md:block relative z-10">
                            <a href="#contact" onClick={handleContactClick} className="block w-full py-4 text-center bg-coffee-600 text-white font-sans hover:bg-coffee-500 transition-all duration-300 uppercase text-xs tracking-widest rounded-full">
                              Zarezerwuj Termin
                            </a>
                          </div>
                        </div>

                        {/* Right Column: Details */}
                        <div className="p-10 md:p-14 md:w-7/12 flex flex-col justify-center bg-transparent">
                          <p className="text-warm-300 text-lg font-light leading-relaxed mb-[25px]">
                            {item.description}
                          </p>
                          
                          <div className="space-y-6">
                            <h4 className="font-sans text-[15px] font-normal transition-all text-coffee-400 text-left">
                              {item.targetAudience}
                            </h4>
                            <ul className="space-y-5">
                              {item.details.map((detail, i) => (
                                <li key={i} className="flex items-start text-warm-300">
                                  <div className="mt-2.5 mr-5 shrink-0 w-1.5 h-1.5 rounded-full bg-coffee-500/60"></div>
                                  <span className="font-light leading-relaxed text-[15px]">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="mt-12 md:hidden">
                            <a href="#contact" onClick={handleContactClick} className="block w-full py-4 text-center bg-coffee-600 text-white font-sans hover:bg-coffee-500 transition-all duration-300 uppercase text-xs tracking-widest rounded-full">
                              Zarezerwuj Termin
                            </a>
                          </div>
                        </div>

                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Pagination Indicators */}
              <div className="flex justify-center space-x-3 mt-6 mb-4">
                {pricingItems.map((_, idx) => (
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

        </div>
      </div>
    </div>
  );
};

export default Pricing;