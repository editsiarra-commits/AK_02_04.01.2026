import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const CAT: React.FC = () => {
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
            Głęboka Praca Terapeutyczna
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-warm-100 mb-4">
            Terapia wspomagana konopiami
          </h1>
          <p className="text-2xl md:text-3xl text-warm-300 font-serif italic max-w-3xl mx-auto">
          Cannabis Assisted Therapy - CAT
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
            Praca integracyjna inspirowana podejściem Cannabis-Assisted Therapy (CAT) koncentruje się na pogłębianiu kontaktu z doświadczeniem wewnętrznym, emocjami oraz utrwalonymi schematami, które wpływają na codzienne funkcjonowanie. Podejście to opiera się na założeniu, że określone stany świadomości mogą sprzyjać intensywniejszej introspekcji oraz lepszemu dostępowi do treści, które w klasycznej pracy werbalnej bywają trudniej osiągalne.
            </p>
            <p>
            Istotą tej formy pracy nie jest wywoływanie określonych stanów, lecz ich rozumienie, porządkowanie i integrowanie. Proces ma charakter rozwojowy i wglądowy, a jego celem jest zwiększenie samoświadomości, lepsze rozpoznanie własnych reakcji emocjonalnych oraz stopniowe budowanie bardziej spójnej relacji z samą sobą.
            </p>

            <h2 className="font-serif text-3xl text-warm-100 mt-16 mb-6">Pochodzenie podejścia</h2>
            <p>
            Podejście inspirowane CAT nie stanowi zamkniętej, autorskiej metody. Wywodzi się z połączenia psychologii humanistycznej i transpersonalnej, pracy z uważnością, pracy z ciałem oraz współczesnych nurtów integracji doświadczeń poszerzonych stanów świadomości. Rozwijane było przede wszystkim w środowiskach rozwojowych i integracyjnych w Stanach Zjednoczonych i Kanadzie jako sposób pracy z doświadczeniem, a nie jako odrębna forma terapii klinicznej.
            </p>
            

            <h2 className="font-serif text-3xl text-warm-100 mt-16 mb-6">Pełna zgodność z prawem w Polsce</h2>
            <p>
            Oferowana przeze mnie praca:
            </p>
            <p>
                 .          
            </p>
            
            
            <ul>
              <li>* nie obejmuje podawania, rekomendowania ani stosowania jakichkolwiek substancji psychoaktywnych</li>
              <li>* nie zastępuje leczenia medycznego ani decyzji lekarskich</li>
              <li>* ma charakter procesu integracyjnego i rozwojowego</li>
              <li>* jest prowadzona w pełnej zgodzie z obowiązującym prawem Rzeczypospolitej Polskiej</li>
              
              
              <p>
                 .          
            </p>
              
              <p>
              W Polsce medyczna marihuana jest lekiem dostępnym wyłącznie na receptę, przepisywaną przez uprawnionego lekarza i wydawanym w aptece jako kontrolowany surowiec farmaceutyczny - zgodnie z ustawą o przeciwdziałaniu narkomanii oraz prawem farmaceutycznym. Decyzja o jej stosowaniu należy wyłącznie do lekarza i pacjenta.
            </p>
            </ul>




            <h2 className="font-serif text-3xl text-warm-100 mt-16 mb-6">Na czym polega ta forma pracy?</h2>
            <p>
            Praca integracyjna może być szczególnie pomocna dla osób, które:
            </p>
            
            <p>
                 .          
            </p>
            
            <ul>
              <li>* mają za sobą legalne doświadczenia związane z medyczną marihuaną, niezwiązane bezpośrednio z procesem terapeutycznym</li>
              <li>* chcą lepiej zrozumieć pojawiające się wglądy, emocje i reakcje</li>
              <li>* potrzebują bezpiecznej przestrzeni do uporządkowania trudnych lub intensywnych przeżyć</li>
              
              
              
              <p>
                 .          
            </p>
              
              <p>
              U wielu osób proces ten sprzyja:
            </p>
            <p>
                 .          
            </p>
            </ul>

            <ul>
              <li>* pogłębieniu kontaktu z emocjami i wewnętrznymi schematami</li>
              <li>* lepszemu rozumieniu reakcji ciała i psychiki</li>
              <li>* integracji doświadczeń traumatycznych, egzystencjalnych oraz zablokowanych uczuć</li>
              <li>* poszerzeniu perspektywy postrzegania siebie i własnej historii</li>
              <li>* dotarciu do obszarów, które w klasycznej pracy werbalnej bywają trudno dostępne</li>
              
              
              <p>
                 .          
            </p>
              
              <p>
              W trakcie spotkań wykorzystywane są m.in. elementy rozmowy wglądowej, techniki uważności, pracy z oddechem, muzyka wspierająca oraz kierowana uwaga - zawsze w granicach komfortu i gotowości klienta.
            </p>
            
            </ul>


            <h2 className="font-serif text-3xl text-warm-100 mt-16 mb-6">To nie jest doświadczenie rekreacyjne</h2>
            <p>
            Nie jest to forma relaksu ani „łagodnego rozluźnienia”. To świadomy, pogłębiony proces pracy z doświadczeniem wewnętrznym, skierowany do osób, które czują, że klasyczne formy rozmowy nie zawsze pozwalają dotrzeć do głębszych warstw przeżyć.
            </p>
            <p>
            Dla wielu osób jest to sposób na lepsze zrozumienie źródeł wewnętrznych konfliktów, reakcji emocjonalnych oraz utrwalonych wzorców, które wpływają na codzienne funkcjonowanie.
            </p>





            <h2 className="font-serif text-3xl text-warm-100 mt-16 mb-6">Co może wspierać ten proces</h2>
            <p>
            U wielu osób praca ta sprzyja:
            </p>
            
            <p>
                 .          
            </p>
            
            <ul>
              <li>* pogłębieniu kontaktu z własnymi zasobami</li>
              <li>* wzmocnieniu poczucia sprawczości i zaufania do siebie</li>
              <li>* rozwijaniu zdolności do samoregulacji emocjonalnej</li>
              <li>* bardziej świadomemu odnoszeniu się do własnych potrzeb i granic</li>
              
              
             
              
              
            </ul>



            <h2 className="font-serif text-3xl text-warm-100 mt-16 mb-6">Zasady bezpieczeństwa i odpowiedzialności</h2>
            
            
            
            
            <ul>
              <li>* praca odbywa się wyłącznie w granicach obowiązującego prawa</li>
              <li>* nie ingeruje w decyzje medyczne ani farmakologiczne</li>
              <li>* tempo, zakres i głębokość procesu są zawsze indywidualnie dostosowane</li>
              <li>* granice i gotowość klienta pozostają kluczowe na każdym etapie</li>
              
           
            <h2 className="font-serif text-2xl text-warm-100 mt-16 mb-6">Jeśli czujesz, że potrzebujesz pogłębionej, uważnej pracy integracyjnej, która pomoże Ci lepiej zrozumieć i uporządkować własne doświadczenia, to podejście może być dla Ciebie wartościowym elementem procesu zmiany.</h2>





            
            </ul>








            
            
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

export default CAT;
