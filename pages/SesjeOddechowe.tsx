import React from 'react';

const SesjeOddechowe: React.FC = () => {
  return (
    <div className="bg-warm-900 text-warm-200">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-warm-950/70 border-b border-warm-800">
        <div className="absolute inset-0 bg-gradient-to-t from-warm-900 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="text-coffee-400 font-sans text-xs font-bold uppercase tracking-[0.3em] mb-4">
            Powrót do Siebie przez Oddech
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-warm-100 mb-4">
            Sesje Oddechowe
          </h1>
          <p className="text-2xl md:text-3xl text-warm-300 font-serif italic max-w-3xl mx-auto">
            Odkryj uzdrawiającą moc świadomego oddechu
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg prose-invert text-warm-300 font-light leading-relaxed">
            <p>
            Oddech jest najpotężniejszym, a jednocześnie najbardziej niedocenianym narzędziem, jakie posiadamy. To brama do naszego układu nerwowego, emocji i najgłębszych stanów świadomości. Sesje oddechowe to praktyka wykorzystująca świadome, połączone oddychanie, aby uwolnić zablokowaną energię, przetworzyć stłumione emocje i wejść w odmienny stan świadomości w całkowicie naturalny sposób.
            </p>
            <p>
            Poprzez intensywną pracę z oddechem omijamy analityczny umysł, pozwalając ciału i podświadomości na ujawnienie tego, co wymaga uzdrowienia. To głęboko somatyczne doświadczenie, które może prowadzić do katharsis, uwolnienia traumy i głębokiego wglądu duchowego.
            </p>

            <h2 className="font-serif text-3xl text-warm-100 mt-16 mb-6">Dla kogo są Sesje Oddechowe?</h2>
            <p>
              Ta forma pracy jest szczególnie skuteczna, jeśli:
            </p>
            <ul>
              <li>Czujesz się odcięty/a od swojego ciała i emocji.</li>
              <li>Pragniesz uwolnić się od stresu, napięcia i lęku.</li>
              <li>Masz poczucie utknięcia, a tradycyjne metody terapii nie przynoszą rezultatów.</li>
              <li>Chcesz pogłębić swoją praktykę medytacyjną lub duchową.</li>
              <li>Jesteś gotowy/a na głęboką pracę transformacyjną i spotkanie z samym/samą sobą.</li>
              <li>Chcesz w bezpieczny sposób zbadać odmienne stany świadomości.</li>
            </ul>

            <h2 className="font-serif text-3xl text-warm-100 mt-16 mb-6">Jak wygląda sesja oddechowa?</h2>
            <p>
            Sesja odbywa się w bezpiecznej i podtrzymującej przestrzeni. Rozpoczyna się rozmową i ustaleniem intencji. Następnie, leżąc wygodnie, przy specjalnie dobranej muzyce, jesteś prowadzony/a przez proces świadomego, połączonego oddechu. Czas trwania intensywnego oddychania jest dostosowany do Twoich potrzeb. Przez cały czas jestem przy Tobie, dbając o Twoje bezpieczeństwo i wspierając Twój proces. Sesję kończymy relaksacją i integracją doświadczenia.
            </p>
            <blockquote className="border-l-4 border-coffee-600 pl-6 italic text-warm-200">
            Twój oddech jest Twoim wewnętrznym uzdrowicielem. Naucz się go słuchać, a zaprowadzi Cię dokładnie tam, gdzie potrzebujesz być.
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SesjeOddechowe;
