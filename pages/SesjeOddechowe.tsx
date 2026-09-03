import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const SesjeOddechowe: React.FC = () => {
    const navigate = useNavigate();

    const handleContactClick = (e: React.MouseEvent) => {
        e.preventDefault();
        navigate('/', { state: { scrollTo: 'contact' } });
    };

  return (
    <div className="bg-warm-900 text-warm-200">
      {/* Hero Section */}
      <section className="relative pt-24 pb-4 md:pt-32 md:pb-6 border-b border-warm-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            src="/assets/video4.mp4"
          />
          <div className="absolute inset-0 bg-warm-950/70"></div>
          <div className="absolute inset-0 bg-linear-to-t from-warm-900 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="text-coffee-400 font-sans text-xl font-bold uppercase tracking-[0.3em] mb-2">
            Powrót do Siebie przez Oddech
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-warm-100 mb-2">
            Sesje Oddechowe
          </h1>
          <h2 className="text-xl md:text-2xl text-coffee-400 block mt-1 opacity-90 font-serif font-light tracking-wider mb-4">
            Białystok — Warszawa — Online
          </h2>
          <p className="text-2xl md:text-3xl text-warm-300 font-serif italic max-w-3xl mx-auto">
          „Oddech jest mostem między ciałem, a umysłem" - Thích Nhất Hạnh
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-4 pb-16 lg:pt-4 lg:pb-24">
        <div className="max-w-3xl mx-auto">
        <div className="mb-6">
            <Link to="/" className="inline-flex items-center text-coffee-400 hover:text-coffee-300 transition-colors">
              <ArrowLeft size={20} className="mr-2" />
              <span>Powrót do strony głównej</span>
            </Link>
          </div>
          <div className="prose prose-lg text-warm-300 font-light leading-relaxed">
            <p>
            W moim gabinecie możesz skorzystać z indywidualnych sesji oddechowych inspirowanych oddychaniem holotropowym — pogłębionej pracy z oddechem, ciałem i świadomością, która może sprzyjać kontaktowi z głębszymi warstwami doświadczenia wewnętrznego. Sesje te łączą świadomy, intensywniejszy oddech, muzykę oraz pracę z ciałem, tworząc spójny, ugruntowany proces. Dla wielu osób są to doświadczenia poruszające, inicjacyjne i transformujące - odbywające się bez użycia substancji.
            </p>
            
            <h2 className="font-serif text-3xl text-warm-100 mt-16 mb-6">Jeśli tu jesteś i czytasz ten tekst…</h2>
            
            <ul className="list-none space-y-2 pl-0">
              <li>* bardzo możliwe, że coś w Tobie już wie, że potrzebujesz doświadczenia wykraczającego poza samą rozmowę.
              Być może czujesz napięcie w ciele, emocje bez jasnej przyczyny, poczucie utknięcia albo wewnętrzne wezwanie do zmiany, której nie da się „przegadać".</li>
              <li>* sesje oddechowe są zaproszeniem do spotkania z tym, co chce zostać zobaczone i przeżyte, a nie tylko zrozumiane.</li>
            </ul>

            <h2 className="font-serif text-3xl text-warm-100 mt-16 mb-6">Na czym polega sesja?</h2>
            <p>
            Proces sesji oddechowej składa się z kilku elementów, które prowadzą Cię krok po kroku w głąb doświadczenia:
            </p> 

            <ul className="list-none space-y-2 pl-0 mt-4">
              <li>* oddech świadomie prowadzony, intensywniejszy, może prowadzić do doświadczenia poszerzonego stanu świadomości.</li>
              <li>* muzyka towarzyszy kadej sesji. Przygotowany przeze mnie set muzyczny, który prowadzi proces i pogłębia doświadczenie, wspierając naturalny rytm tego, co się pojawia.</li>
              <li>* pracujemy w bezpiecznej, komfortowej przestrzeni — z materacem i opaską na oczy — tak, abyś mógł/mogła w pełni skierować uwagę do wewnątrz.</li>
              <li>* body scanning i praca z ciałem. Sesja rozpoczyna się od świadomego skanowania ciała. W trakcie procesu stosuję również delikatne techniki pracy z ciałem, które mogą wspierać regulację napięcia i kontakt z pojawiającymi się doświadczeniami — zawsze z uważnością na granice i zgodę.</li>
            </ul>

            <h2 className="font-serif text-3xl text-warm-100 mt-16 mb-6">Integracja — to, co najważniejsze</h2>
            <p>
            To, co wydarza się podczas sesji oddechowej, nie kończy się wraz z ostatnim oddechem. Dlatego integralną częścią pracy jest osobna sesja integracyjna, podczas której wspólnie przyglądamy się temu, co się pojawiło, i poszukujemy sposobów nadania temu znaczenia w codziennym życiu.
            </p> 

            <ul className="list-none space-y-2 pl-0 mt-4">
              <li>Integracja może wspierać proces osadzania doświadczenia, tak aby nie pozostało ono jedynie intensywnym przeżyciem, lecz mogło znaleźć swoje miejsce w codziennym funkcjonowaniu.</li>
            </ul>

            <h2 className="font-serif text-3xl text-warm-100 mt-16 mb-6">Forma pracy</h2>
            <p>
            Sesje oddechowe prowadzę w pakiecie dwuetapowym:
            </p> 

            <ul className="list-none space-y-2 pl-0 mt-4">
              <li>* ok. 5-godzinna sesja oddechowa inspirowana oddychaniem holotropowym, połączona z body scanningiem i pracą z ciałem.</li>
              <li>* 2-godzinna sesja integracyjna, odbywająca się po procesie oddechowym.</li>
            </ul>

            <h2 className="font-serif text-2xl text-warm-100 mt-16 mb-6">Ta struktura tworzy przestrzeń nie tylko do przeżycia doświadczenia, ale również do jego lepszego zrozumienia, integracji i poszukiwania sposobów włączania płynących z niego wglądów do codziennego życia.</h2>
            
          </div>
            <div className="mt-8 text-center">
                            <button
                                onClick={handleContactClick}
                                className="px-10 py-4 bg-coffee-700 text-white font-sans text-xs uppercase tracking-widest hover:bg-coffee-600 transition-all duration-300 shadow-2xl shadow-coffee-900/20 inline-block cursor-pointer rounded-full"
                            >
                                ZAREZERWUJ TĘ SESJĘ
                            </button>
                        </div>
        </div>
      </div>
    </div>
  );
};

export default SesjeOddechowe;
