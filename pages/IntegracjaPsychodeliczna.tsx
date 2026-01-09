import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const IntegracjaPsychodeliczna: React.FC = () => {
    const navigate = useNavigate();

    const handleContactClick = (e: React.MouseEvent) => {
        e.preventDefault();
        navigate('/', { state: { scrollTo: 'contact' } });
    };

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
          <p className="text-coffee-400 font-sans text-xl font-bold uppercase tracking-[0.3em] mb-4">
            Przekształcanie Wglądów w Zmianę
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-warm-100 mb-4">
          Przygotowanie i Integracja Doświadczeń Psychodelicznych
          </h1>
          <p className="text-2xl md:text-3xl text-warm-300 font-serif italic max-w-3xl mx-auto">
          „Prawdziwa transformacja zaczyna się wtedy, gdy wizja spotyka codzienność.”
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
            Doświadczenia psychodeliczne — czy to z użyciem Ayahuaski, psylocybiny, MDMA, ketaminy, medycznej marihuany, czy poprzez oddech, medytację i inne poszerzone stany świadomości - potrafią być głębokie, graniczne i transformujące. Często poruszają warstwy emocjonalne, cielesne i egzystencjalne, otwierając przestrzenie, do których na co dzień nie mamy dostępu.
            </p>
            <p>
            Jednocześnie samo doświadczenie to dopiero początek. To, co wydarza się przed i po — przygotowanie oraz integracja - decyduje o tym, czy stanie się ono realną, wspierającą zmianą, czy pozostanie intensywnym, ale niezintegrowanym przeżyciem.
            </p>

            <h2 className="font-serif text-3xl text-warm-100 mt-16 mb-6">Dla kogo jest ta praca?</h2>
            <p>
            Ta forma pracy jest dla osób, które:
            </p>

            <ul className="list-none space-y-2 pl-0 mt-4">
              <li>* mają za sobą doświadczenie psychodeliczne i czują, że „coś się otworzyło”, ale nie wiedzą jeszcze, jak z tym żyć</li>
              <li>* planują takie doświadczenie i chcą podejść do niego świadomie i odpowiedzialnie</li>
              <li>* doświadczyły intensywnych stanów świadomości (także poprzez oddech lub medytację) i nie chcą zostawiać ich bez integracji.</li>
            </ul>
             
            <p className="mt-6">
              Jeśli rozpoznajesz się w którymkolwiek z tych punktów, integracja może być kluczowym etapem Twojego procesu.
            </p>

            <h2 className="font-serif text-3xl text-warm-100 mt-16 mb-6">Przygotowanie !</h2>
            <p>
            Przygotowanie to moment zatrzymania i wsłuchania się w to, co naprawdę Cię woła.
To praca z intencją, regulacją ciała i układu nerwowego, z lękami, oczekiwaniami i granicami — a także ze świadomym budowaniem set & setting, czyli wewnętrznych i zewnętrznych warunków, w jakich doświadczenie może się wydarzyć.
            </p>
            
            <p className="mt-4">
              Nie chodzi o kontrolowanie procesu, lecz o naukę bycia w tym, co się pojawi — także w tym, co nieznane, trudne lub intensywne. Dobre przygotowanie tworzy wewnętrzną przestrzeń, w której doświadczenie może zostać bezpiecznie przeżyte.
            </p>

            <h2 className="font-serif text-3xl text-warm-100 mt-16 mb-6">Integracja</h2>
            <p>
            Integracja zaczyna się wtedy, gdy doświadczenie się kończy. To proces rozumienia i osadzania tego, co zostało przeżyte, w codziennym życiu.
            </p>
            
            <p className="mt-4">
              Pracujemy z wglądami, symbolami i emocjami, przekładając je na realne zmiany — w relacjach, decyzjach, granicach i sposobie bycia ze sobą. Bez pośpiechu, bez idealizowania, z uważnością na regulację i ugruntowanie.
            </p>
            <p className="mt-4">
              Integracja sprawia, że to, co było intensywnym przeżyciem, może stać się żywym, wspierającym procesem zmiany, a nie tylko wspomnieniem „tripa”.
            </p>

            <h2 className="font-serif text-3xl text-warm-100 mt-16 mb-6">Ważna informacja prawna !</h2>
            <p>
            Oferowana przeze mnie praca:
            </p>

            <ul className="list-none space-y-2 pl-0 mt-4">
              <li>* nie obejmuje podawania, rekomendowania ani dostarczania substancji psychoaktywnych</li>
              <li>* nie zachęca do ich stosowania</li>
              <li>* nie zastępuje opieki medycznej ani decyzji lekarskich</li>
            </ul>
              
            <p className="mt-6">
              Przygotowanie i integracja mają charakter procesu rozwojowego i integracyjnego, prowadzonego zgodnie z obowiązującym prawem w Polsce.
            </p>

            <h2 className="font-serif text-2xl text-warm-100 mt-16 mb-6">Jeśli to, co przeżyłaś / przeżyłeś, wciąż w Tobie pracuje — integracja może być kolejnym, ważnym krokiem.</h2>
          </div>
            <div className="mt-8 text-center">
                <button
                    onClick={handleContactClick}
                    className="px-10 py-4 bg-coffee-700 text-white font-sans text-xs uppercase tracking-widest hover:bg-coffee-600 transition-all duration-300 shadow-2xl shadow-coffee-900/20 inline-block cursor-pointer"
                >
                    ZAREZERWUJ TĘ SESJĘ
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default IntegracjaPsychodeliczna;
