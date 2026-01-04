import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const IntegracjaPsychodeliczna: React.FC = () => {
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
            src="/assets/video1.mp4"
          />
          <div className="absolute inset-0 bg-warm-950/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-warm-900 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="text-coffee-400 font-sans text-xs font-bold uppercase tracking-[0.3em] mb-4">
            Przekształcanie Wglądów w Zmianę
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-warm-100 mb-4">
            Integracja Psychodeliczna
          </h1>
          <p className="text-2xl md:text-3xl text-warm-300 font-serif italic max-w-3xl mx-auto">
            Wsparcie w przełożeniu głębokich doświadczeń na trwałe zmiany w życiu
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
            Doświadczenie psychodeliczne może być głęboko transformujące, otwierając drzwi do nowych perspektyw, głębszego samopoznania i uzdrowienia. Jednak prawdziwa praca zaczyna się po zakończeniu sesji. Integracja psychodeliczna to proces nadawania sensu, znaczenia i praktycznego zastosowania wglądom zdobytym podczas doświadczenia.
            </p>
            <p>
              Bez odpowiedniego wsparcia, cenne wglądy mogą z czasem wyblaknąć, a potencjał transformacyjny może zostać utracony. Celem integracji jest zakotwiczenie tych odkryć w codziennym życiu, prowadząc do trwałych i pozytywnych zmian w Twoim zachowaniu, relacjach i ogólnym samopoczuciu.
            </p>

            <h2 className="font-serif text-3xl text-warm-100 mt-16 mb-6">Dla kogo jest Integracja?</h2>
            <p>
              Sesje integracji psychodelicznej są dla Ciebie, jeśli:
            </p>
            <ul>
              <li>Miałeś/aś niedawno doświadczenie psychodeliczne i chcesz je w pełni zrozumieć.</li>
              <li>Chcesz przełożyć wglądy z doświadczenia na konkretne działania i zmiany.</li>
              <li>Doświadczyłeś/aś trudnych lub dezorientujących momentów i potrzebujesz wsparcia w ich przepracowaniu.</li>
              <li>Chcesz utrwalić pozytywne zmiany i zapobiec powrotowi do starych wzorców.</li>
              <li>Szukasz sposobów na włączenie nowo nabytej mądrości do swojego życia duchowego i codziennego.</li>
            </ul>

            <h2 className="font-serif text-3xl text-warm-100 mt-16 mb-6">Jak wygląda sesja integracyjna?</h2>
            <p>
            Sesja integracyjna to bezpieczna przestrzeń do otwartej rozmowy o Twoim doświadczeniu. Nie skupiamy się na ocenie, lecz na ciekawym i empatycznym badaniu tego, co się pojawiło. Pomagam Ci połączyć kropki, nazwać nienazwane i stworzyć osobistą mapę Twojej podróży. Pracujemy z metaforami, symbolami, odczuciami w ciele i emocjami, abyś mógł/mogła w pełni przyswoić i ucieleśnić swoje wglądy.
            </p>
            <blockquote className="border-l-4 border-coffee-600 pl-6 italic text-warm-200">
            Integracja to most między niezwykłym doświadczeniem a zwykłym życiem. To sztuka przekuwania mistycznych wglądów w ludzką mądrość, która służy Tobie i światu.            
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegracjaPsychodeliczna;
