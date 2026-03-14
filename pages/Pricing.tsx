import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

interface PricingProps {
  id?: string;
}

const Pricing: React.FC<PricingProps> = ({ id }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const pricingItems = [
    {
      id: 1,
      title: "Hipnoterapia",
      subtitle: "Proces transformacyjny",
      price: "2000 zł",
      duration: "5 sesji",
      description: "Ponad 7 godzin głębokiej, uważnej pracy w relacji. Pierwsze spotkanie – do 2 godzin – to czas, w którym naprawdę Cię poznaję: Twoją historię, zasoby, mechanizmy, marzenia i to, co dotychczas blokowało zmianę. Kolejne sesje trwają zazwyczaj 90 minut.",
      targetAudience: "Ten pakiet tworzę dla osób, które mówią: „Chcę przestać łatać objawy – chcę realnej, trwałej zmiany”.",
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
      subtitle: "/ Sesja przygotowująca do doświadczenia psychodelicznego",
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
    <section id={id} className="relative py-12 md:py-16 bg-warm-950 scroll-mt-20 overflow-hidden">
      {/* Intro Section (Slide 1 from PDF) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8 md:mb-12">
        <h2 className="font-serif text-4xl md:text-5xl text-warm-100 mb-8">Cennik – Inwestycja w Twoją zmianę</h2>
        
        <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-warm-800 shadow-sm text-left">
          <p className="text-warm-300 text-lg font-light mb-6">
            Przed dokonaniem jakiejkolwiek płatności zapraszam Cię na bezpłatną, 15-minutową konsultację telefoniczną.
            W spokojnej przestrzeni, w której wspólnie:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start text-warm-300">
              <Check size={20} className="text-coffee-400 mr-3 mt-0.5 flex-shrink-0" /> 
              <span>precyzyjnie nazwiemy to, co naprawdę chcecie zmienić / uzdrowić / rozwinąć</span>
            </li>
            <li className="flex items-start text-warm-300">
              <Check size={20} className="text-coffee-400 mr-3 mt-0.5 flex-shrink-0" /> 
              <span>poczujemy, która ścieżka będzie dla Ciebie najbardziej precyzyjna i bezpieczna</span>
            </li>
            <li className="flex items-start text-warm-300">
              <Check size={20} className="text-coffee-400 mr-3 mt-0.5 flex-shrink-0" /> 
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

      {/* Full Width Horizontal Slider (Slides 2-6 from PDF) */}
      <div className="w-full relative px-4 sm:px-8">
        <div className="max-w-6xl mx-auto relative">
          
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 sm:-ml-12 z-10 p-4 rounded-full bg-white/80 backdrop-blur-sm border border-coffee-100 text-warm-300 hover:text-coffee-400 hover:border-coffee-300 hover:bg-white transition-all shadow-[0_4px_20px_rgb(0,0,0,0.03)] focus:outline-none group"
            aria-label="Previous option"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" strokeWidth={1.5} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 sm:-mr-12 z-10 p-4 rounded-full bg-white/80 backdrop-blur-sm border border-coffee-100 text-warm-300 hover:text-coffee-400 hover:border-coffee-300 hover:bg-white transition-all shadow-[0_4px_20px_rgb(0,0,0,0.03)] focus:outline-none group"
            aria-label="Next option"
          >
            <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" strokeWidth={1.5} />
          </button>

          {/* Slider Container */}
          <div className="overflow-hidden px-2 py-4">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {pricingItems.map((item, index) => (
                <div key={item.id} className="w-full flex-shrink-0 px-2 sm:px-4 py-2 md:py-4">
                  <div className="bg-warm-900/60 backdrop-blur-sm rounded-[40px] shadow-[0_10px_40px_rgb(0,0,0,0.03)] overflow-hidden border border-warm-800/40 flex flex-col md:flex-row h-full">
                    
                    {/* Left Column: Title & Price */}
                    <div className="p-10 md:p-14 md:w-5/12 bg-coffee-50/60 flex flex-col justify-between relative overflow-hidden">
                      {/* Decorative soft blob */}
                      <div className="absolute -top-20 -left-20 w-64 h-64 bg-coffee-100/50 rounded-full blur-3xl"></div>
                      
                      <div className="relative z-10">
                        <div className="text-coffee-300/70 font-sans text-xs uppercase tracking-[0.2em] mb-8">
                          0{index + 1} — 0{pricingItems.length}
                        </div>
                        
                        <h3 className="font-serif text-3xl md:text-4xl text-warm-100 leading-snug mb-4">
                          {item.title}
                        </h3>
                        <p className="text-coffee-400 text-lg font-light tracking-wide italic">
                          {item.subtitle}
                        </p>
                      </div>
                      
                      <div className="mt-14 mb-8 md:mb-0 relative z-10">
                        <div className="text-5xl md:text-6xl font-serif text-warm-100 tracking-tight">
                          {item.price}
                        </div>
                        <div className="text-warm-400 mt-4 font-light text-sm tracking-widest uppercase">
                          {item.duration}
                        </div>
                      </div>
                      
                      <div className="mt-12 hidden md:block relative z-10">
                        <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}} className="block w-full py-4 text-center border border-coffee-200/60 text-coffee-600 bg-white/50 hover:bg-white hover:border-coffee-300 transition-all duration-300 uppercase text-xs tracking-[0.2em] rounded-full shadow-sm">
                          Zarezerwuj Termin
                        </a>
                      </div>
                    </div>

                    {/* Right Column: Details */}
                    <div className="p-10 md:p-14 md:w-7/12 flex flex-col justify-center bg-transparent">
                      <p className="text-warm-200 text-lg font-light leading-relaxed mb-10">
                        {item.description}
                      </p>
                      
                      <div className="space-y-6">
                        <h4 className="font-sans text-xs font-medium uppercase text-warm-300 tracking-[0.2em]">
                          {item.targetAudience}
                        </h4>
                        <ul className="space-y-5">
                          {item.details.map((detail, i) => (
                            <li key={i} className="flex items-start text-warm-200">
                              <div className="mt-2.5 mr-5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-coffee-300/40"></div>
                              <span className="font-light leading-relaxed text-[15px]">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mt-12 md:hidden">
                        <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}} className="block w-full py-4 text-center border border-coffee-200/60 text-coffee-600 bg-white hover:bg-coffee-50 hover:border-coffee-300 transition-all duration-300 uppercase text-xs tracking-[0.2em] rounded-full shadow-sm">
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
          <div className="flex justify-center space-x-3 mt-10">
            {pricingItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                  currentSlide === idx ? 'bg-coffee-300 w-8' : 'bg-warm-800 w-2 hover:bg-coffee-200'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Outro Section (Slide 7 from PDF) */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12 md:mt-16">
        <h3 className="font-serif text-3xl md:text-4xl text-warm-100 mb-6">To nie są po prostu „sesje”.</h3>
        <div className="text-warm-300 text-xl font-light leading-relaxed space-y-6">
          <p>
            To starannie zaprojektowane przestrzenie, w których możesz przestać walczyć ze sobą i zacząć żyć w zgodzie z tym, kim naprawdę jesteś.
          </p>
          <p>
            Jeśli czujesz, że to może być Twój moment – napisz lub zadzwoń.
          </p>
          <p>
            Pierwszy krok jest bezpłatny.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;