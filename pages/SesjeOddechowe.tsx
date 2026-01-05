import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const SesjeOddechowe: React.FC = () => {
  return (
    <div className="bg-warm-900 text-warm-200">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 border-b border-warm-800 overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-t from-warm-900 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="text-coffee-400 font-sans text-xs font-bold uppercase tracking-[0.3em] mb-4">
            Powrót do Siebie przez Oddech
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-warm-100 mb-4">
            Sesje Oddechowe
          </h1>
          <p className="text-2xl md:text-3xl text-warm-300 font-serif italic max-w-3xl mx-auto">
          „Oddech jest mostem między ciałem, a umysłem” - Thích Nhất Hạnh
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto">
        <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-coffee-300 hover:text-coffee-200 transition-colors">
              <ArrowLeft size={20} className="mr-2" />
              <span>Powrót do strony głównej</span>
            </Link>
          </div>
          <div className="prose prose-lg prose-invert text-warm-300 font-light leading-relaxed">
            <p>
            W moim gabinecie możesz skorzystać z indywidualnych sesji oddechowych inspirowanych oddychaniem holotropowym — pogłębionej pracy z oddechem, ciałem i świadomością, która umożliwia kontakt z głębokimi warstwami doświadczenia wewnętrznego. Sesje te łączą świadomy, intensywniejszy oddech, muzykę oraz pracę z ciałem, tworząc spójny, ugruntowany proces. Dla wielu osób są to doświadczenia poruszające, inicjacyjne i transformujące - odbywające się bez użycia substancji.
            </p>
            <p>
            
            </p>

            <h2 className="font-serif text-3xl text-warm-100 mt-16 mb-6">Jeśli tu jesteś i czytasz ten tekst…</h2>
            
            <ul>
              <li>* bardzo możliwe, że coś w Tobie już wie, że rozmowa nie sięga wystarczająco głęboko.
              Być może czujesz napięcie w ciele, emocje bez jasnej przyczyny, poczucie utknięcia albo wewnętrzne wezwanie do zmiany, której nie da się „przegadać”.</li>
              <li>* sesje oddechowe są zaproszeniem do spotkania z tym, co chce zostać zobaczone i przeżyte, a nie tylko zrozumiane.</li>
              
            </ul>

            
            <h2 className="font-serif text-3xl text-warm-100 mt-16 mb-6">Na czym polega sesja?</h2>
            <p>
            Proces sesji oddechowej składa się z kilku elementów, które prowadzą Cię krok po kroku w głąb doświadczenia:
            </p> 

           

            <ul>
              <li>* oddech świadomie prowadzony, intensywniejszy, otwiera dostęp do poszerzonego stanu świadomości. To w nim często ujawniają się emocje, wspomnienia i obrazy, które do tej pory pozostawały poza zasięgiem uwagi.</li>
              <li>* muzyka towarzyszy kadej sesji. Przygotowany przeze mnie set muzyczny, który prowadzi proces i pogłębia doświadczenie, wspierając naturalny rytm tego, co się pojawia.</li>
              <li>* pracujemy w bezpiecznej, komfortowej przestrzeni — z materacem i opaską na oczy — tak, abyś mógł/mogła w pełni skierować uwagę do wewnątrz.</li>
              <li>* body scanning i praca z ciałem. Sesja rozpoczyna się od świadomego skanowania ciała. W trakcie procesu stosuję również delikatne techniki pracy z ciałem, które pomagają uwalniać napięcia i domykać pojawiające się procesy — zawsze z uważnością na granice i zgodę.</li>
              
            </ul>



            <h2 className="font-serif text-3xl text-warm-100 mt-16 mb-6">Integracja — to, co najważniejsze</h2>
            <p>
            To, co wydarza się podczas sesji oddechowej, nie kończy się wraz z ostatnim oddechem.
Dlatego integralną częścią pracy jest osobna sesja integracyjna, podczas której pomagam Ci zrozumieć i osadzić to, co się ujawniło — oraz przełożyć doświadczenie na realne życie.
            </p> 

            <p>
                          
            </p>

            <ul>
              <li>Integracja sprawia, że to, co głębokie i intensywne, może stać się wspierającą zmianą, a nie tylko silnym przeżyciem.</li>
              
              
            </ul>




            <h2 className="font-serif text-3xl text-warm-100 mt-16 mb-6">Forma pracy</h2>
            <p>
            Sesje oddechowe prowadzę w pakiecie dwuetapowym:
            </p> 

            <p>
                 .          
            </p>

            <ul>
              <li>* ok. 4-godzinna sesja oddechowa inspirowana oddychaniem holotropowym, połączona z body scanningiem i pracą z ciałem.</li>
              <li>* 2-godzinna sesja integracyjna, odbywająca się po procesie oddechowym.</li>
              
            </ul>


           
          
            <h2 className="font-serif text-2xl text-warm-100 mt-16 mb-6">Ta struktura pozwala Ci nie tylko przeżyć doświadczenie, ale także je zrozumieć, zintegrować i włączyć w codzienne funkcjonowanie.</h2>




           








            
          </div>
            <div className="mt-8 text-center">
                            <Link
                                to="/"
                                state={{ scrollTo: 'contact' }}
                                className="px-10 py-4 bg-coffee-700 text-white font-sans text-xs uppercase tracking-widest hover:bg-coffee-600 transition-all duration-300 shadow-2xl shadow-coffee-900/20"
                            >
                                Umów Konsultację
                            </Link>
                        </div>
        </div>
      </div>
    </div>
  );
};

export default SesjeOddechowe;
