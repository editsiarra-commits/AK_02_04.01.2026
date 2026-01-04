import React from 'react';

const CAT: React.FC = () => {
  return (
    <div className="bg-warm-900 text-warm-200">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-warm-950/70 border-b border-warm-800">
        <div className="absolute inset-0 bg-gradient-to-t from-warm-900 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="text-coffee-400 font-sans text-xs font-bold uppercase tracking-[0.3em] mb-4">
            Głęboka Praca Terapeutyczna
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-warm-100 mb-4">
            CAT (Cannabis Assisted Therapy)
          </h1>
          <p className="text-2xl md:text-3xl text-warm-300 font-serif italic max-w-3xl mx-auto">
            Terapia wspomagana konopiami w celu głębszego wglądu i uzdrowienia
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg prose-invert text-warm-300 font-light leading-relaxed">
            <p>
            CAT (Cannabis Assisted Therapy) to innowacyjna metoda terapeutyczna, która wykorzystuje medyczne właściwości konopi do pogłębienia procesu terapeutycznego. W bezpiecznych i kontrolowanych warunkach, przy wsparciu wykwalifikowanego terapeuty, pacjent może uzyskać dostęp do głębszych warstw świadomości, co ułatwia przepracowanie traum, lęków i ograniczających wzorców.
            </p>
            <p>
            Konopie, stosowane w sposób świadomy i intencjonalny, mogą działać jako katalizator, wzmacniając połączenie umysł-ciało, obniżając mechanizmy obronne i otwierając na nowe perspektywy. To nie jest rekreacyjne użycie, ale głęboko terapeutyczna praca w odmiennym stanie świadomości.
            </p>

            <h2 className="font-serif text-3xl text-warm-100 mt-16 mb-6">Dla kogo jest CAT?</h2>
            <p>
              Terapia wspomagana konopiami może być pomocna dla osób, które:
            </p>
            <ul>
              <li>Doświadczają trudności w dostępie do swoich emocji lub wspomnień.</li>
              <li>Czują, że utknęły w tradycyjnej terapii "przez rozmowę".</li>
              <li>Mają za sobą doświadczenia traumatyczne (PTSD).</li>
              <li>Cierpią na chroniczny stres, lęki lub depresję.</li>
              <li>Są zainteresowane głęboką pracą somatyczną i eksploracją świadomości.</li>
            </ul>

            <h2 className="font-serif text-3xl text-warm-100 mt-16 mb-6">Jak wygląda sesja CAT?</h2>
            <p>
            Proces CAT składa się z trzech etapów. Zaczynamy od sesji przygotowawczej, gdzie omawiamy Twoją historię, intencje i budujemy zaufanie. Sama sesja z użyciem konopi trwa kilka godzin i odbywa się w bezpiecznej, komfortowej przestrzeni, z moim pełnym wsparciem. Po sesji następuje kluczowy etap integracji, podczas którego pracujemy nad przełożeniem wglądów i doświadczeń na realne zmiany w życiu.
            </p>
            <blockquote className="border-l-4 border-coffee-600 pl-6 italic text-warm-200">
            CAT to nie magiczne rozwiązanie, ale potężne narzędzie w rękach świadomego pacjenta i doświadczonego terapeuty. To zaproszenie do głębokiego spotkania z samym sobą, aby uzdrowić to, co boli i odkryć swoją wewnętrzną siłę.
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CAT;
