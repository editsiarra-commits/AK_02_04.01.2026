import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Hipnoterapia: React.FC = () => {
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
            Odzyskaj Spokój i Moc
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-warm-100 mb-4">
            Hipnoterapia
          </h1>
          <p className="text-2xl md:text-3xl text-warm-300 font-serif italic max-w-3xl mx-auto">
          to pogłębiona, świadoma praca z umysłem i emocjami, która wykorzystuje naturalne stany skupienia i zawężonej uwagi, aby dotrzeć do źródeł trudności - tam, gdzie klasyczna rozmowa często zatrzymuje się na powierzchni.
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
            Stan hipnotyczny jest czymś, co każdy z nas zna z codziennego życia - kiedy „odpływamy” myślami, głęboko się skupiamy lub wchodzimy w flow. W terapii świadomie korzystamy z tego stanu, by bezpiecznie i łagodnie dotknąć podświadomych przekonań, emocji, wspomnień i wzorców, które zazwyczaj pozostają poza zasięgiem świadomej refleksji.
            </p>
          

            <h2 className="font-serif text-3xl text-warm-100 mt-16 mb-6">Na czym polega ta forma pracy?</h2>
            <p>
            Hipnoterapia w mojej praktyce opiera się na współpracy, uważności i realnej sprawczości osoby uczestniczącej w procesie. Pracujemy z tym, co jest aktualnie gotowe do zobaczenia i zintegrowania - w tempie dostosowanym do Twoich granic i możliwości. W trakcie sesji wykorzystywane są m.in.:
            </p> 

            <p>
                 .          
            </p>

            <ul>
              <li>- kierowanie uwagi i wyobraźnia</li>
              <li>- metafora i praca symboliczna</li>
              <li>- kontakt z odczuciami z ciała</li>
              <li>- dialog wewnętrzny i integracja części</li>
              
            </ul>
            <p>
                 .          
            </p>
            <p>
            Celem nie jest „naprawianie” ani forsowanie zmiany, lecz stworzenie warunków, w których zmiana może pojawić się w sposób bardziej naturalny, trwały i spójny z Twoim doświadczeniem.
            </p>
          





            <h2 className="font-serif text-3xl text-warm-100 mt-16 mb-6">Dla kogo jest szczególnie pomocna?</h2>
            <p>
            
            </p> 


            <ul>
              <li>- gdy czujesz, że powtarzające się emocje, lęki czy blokady wracają mimo racjonalnego rozumienia problemu</li>
              <li>- blokady twórcze, prokrastynacja, sabotowanie siebie</li>
              <li>- niskie poczucie własnej wartości, wewnętrzny krytyk</li>
              <li>- gdy chcesz lepiej zrozumieć wewnętrzne konflikty i schematy „jedna część mnie chce…, a druga nie pozwala"</li>
              <li>- gdy klasyczna rozmowa nie wystarcza, by dotrzeć do głębszych warstw</li>
              <li>- gdy potrzebujesz łagodnej, ale naprawdę głębokiej pracy z traumą, napięciem, niskim poczuciem wartości czy trudnościami w relacjach</li>
              <li>- wstyd, poczucie winy, żal, emocje powracające mimo pracy „na poziomie głowy”</li>
            </ul>
           



            <h2 className="font-serif text-3xl text-warm-100 mt-16 mb-6">Jak wygląda sesja?</h2>
            <p>
            Sesja trwa zazwyczaj 60-90 minut. Zaczynamy od spokojnej rozmowy. Ustalamy cel, kontekst i to, co jest dla Ciebie teraz najważniejsze. Następnie przechodzimy do pracy w stanie hipnotycznym, który większość osób opisuje jako głęboki, regenerujący odpoczynek przy zachowanej świadomości.
            </p> 

            <p>
                 .          
            </p>

            <ul>
              <li>- Nie tracisz kontroli</li>
              <li>- Nie robisz nic wbrew sobie</li>
              <li>- Masz możliwość zatrzymania, zmiany tempa lub wyjścia z procesu w każdej chwili</li>
            </ul>
          
          

            <h2 className="font-serif text-3xl text-warm-100 mt-16 mb-6">Podejście trauma-informed i inkluzywne</h2>
            <p>
            Pracuję z szczególną uważnością na sygnały układu nerwowego, poczucie bezpieczeństwa i Twoją sprawczość. Zawsze możesz zatrzymać proces, zmienić kierunek lub powiedzieć „dość”. Nie ma presji, nie ma „wchodzenia głębiej za wszelką cenę”. Każda historia, doświadczenie i potrzeba są traktowane z szacunkiem - bez założeń i bez jednej „normy”.
            </p> 

            

            
            <h2 className="font-serif text-3xl text-warm-100 mt-16 mb-6">Czym hipnoterapia nie jest?</h2>
            <p>
            
            </p> 


            <ul>
              <li>- nie jest utratą kontroli ani manipulacją</li>
              <li>- nie jest doświadczeniem rekreacyjnym, ani „magicznym”</li>
              <li>- nie polega na szybkim „kasowaniu” problemów </li>
              <li>- nie zastępuje leczenia medycznego</li>
              </ul>
              <p>
                 .          
            </p>

              <p>
              To świadomy, aktywny proces wymagający Twojego zaangażowania - i dający trwałe efekty.
            </p>
           
           



            <h2 className="font-serif text-3xl text-warm-100 mt-16 mb-6">Przykłady efektów, których najczęściej doświadczają moi Klienci</h2>

            <ul>
              <li>- wyraźny spokój wewnętrzny i zmniejszenie napięcia</li>
              <li>- zanik lub znaczne osłabienie fobii, lęków i wewnętrznego krytyka</li>
              <li>- lżejsze relacje z innymi i z samym sobą</li>
              <li>- powrót poczucia sprawczości i energii do działania</li>
              <li>- umiejętność spokojniejszego radzenia sobie z trudnymi emocjam</li>
              </ul>


            




            <h2 className="font-serif text-3xl text-warm-100 mt-16 mb-6">Jeśli masz wrażenie, że utknąłeś w schematach, z których nie potrafisz się wydostać samodzielnie – hipnoterapia bardzo często okazuje się przełomem. Chcesz sprawdzić, czy to dobry kierunek właśnie dla Ciebie? Zapraszam na spokojną, bez zobowiązań konsultację</h2>




            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hipnoterapia;
