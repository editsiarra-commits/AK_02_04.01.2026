import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const CAT: React.FC = () => {
  const navigate = useNavigate();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/', { state: { scrollTo: 'contact' } });
  };

  return (
    <div className="bg-surface text-gray-600">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            src="/assets/video4.mp4"
          />
          <div className="absolute inset-0 bg-navy-900/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="text-coral-400 font-sans text-xl font-bold uppercase tracking-[0.3em] mb-2">
            Głęboka Praca Terapeutyczna
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-white mb-2">
            Terapia wspomagana konopiami
          </h1>
          <p className="text-2xl md:text-3xl text-gray-200 font-serif italic max-w-3xl mx-auto">
            Cannabis Assisted Therapy - CAT
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-coral-500 hover:text-coral-600 transition-colors">
              <ArrowLeft size={20} className="mr-2" />
              <span>Powrót do strony głównej</span>
            </Link>
          </div>
          <div className="prose prose-lg text-gray-500 font-light leading-relaxed">
            <p>
              Praca integracyjna inspirowana podejściem Cannabis-Assisted Therapy (CAT) koncentruje się na pogłębianiu kontaktu z doświadczeniem wewnętrznym, emocjami oraz utrwalonymi schematami, które wpływają na codzienne funkcjonowanie. Podejście to opiera się na założeniu, że określone stany świadomości mogą sprzyjać intensywniejszej introspekcji oraz lepszemu dostępowi do treści, które w klasycznej pracy werbalnej bywają trudniej osiągalne.
            </p>
            <p>
              Istotą tej formy pracy nie jest wywoływanie określonych stanów, lecz ich rozumienie, porządkowanie i integrowanie. Proces ma charakter rozwojowy i wglądowy, a jego celem jest zwiększenie samoświadomości, lepsze rozpoznanie własnych reakcji emocjonalnych oraz stopniowe budowanie bardziej spójnej relacji z samą sobą.
            </p>

            <h2 className="font-serif text-3xl text-navy-900 mt-16 mb-6">Pochodzenie podejścia</h2>
            <p>
              Podejście inspirowane CAT nie stanowi zamkniętej, autorskiej metody. Wywodzi się z połączenia psychologii humanistycznej i transpersonalnej, pracy z uważnością, pracy z ciałem oraz współczesnych nurtów integracji doświadczeń poszerzonych stanów świadomości. Rozwijane było przede wszystkim w środowiskach rozwojowych i integracyjnych w Stanach Zjednoczonych i Kanadzie jako sposób pracy z doświadczeniem, a nie jako odrębna forma terapii klinicznej.
            </p>


            <h2 className="font-serif text-3xl text-navy-900 mt-16 mb-6">Pełna zgodność z prawem w Polsce</h2>
            <p>
              Oferowana przeze mnie praca:
            </p>

            <ul className="list-none space-y-2 pl-0">
              <li>* nie obejmuje podawania, rekomendowania ani stosowania jakichkolwiek substancji psychoaktywnych</li>
              <li>* nie zastępuje leczenia medycznego ani decyzji lekarskich</li>
              <li>* ma charakter procesu integracyjnego i rozwojowego</li>
              <li>* jest prowadzona w pełnej zgodzie z obowiązującym prawem Rzeczypospolitej Polskiej</li>
            </ul>

            <p className="mt-6">
              W Polsce medyczna marihuana jest lekiem dostępnym wyłącznie na receptę, przepisywaną przez uprawnionego lekarza i wydawanym w aptece jako kontrolowany surowiec farmaceutyczny - zgodnie z ustawą o przeciwdziałaniu narkomanii oraz prawem farmaceutycznym. Decyzja o jej stosowaniu należy wyłącznie do lekarza i pacjenta.
            </p>

            <h2 className="font-serif text-3xl text-navy-900 mt-16 mb-6">Na czym polega ta forma pracy?</h2>
            <p>
              Praca integracyjna może być szczególnie pomocna dla osób, które:
            </p>

            <ul className="list-none space-y-2 pl-0">
              <li>* mają za sobą legalne doświadczenia związane z medyczną marihuaną, niezwiązane bezpośrednio z procesem terapeutycznym</li>
              <li>* chcą lepiej zrozumieć pojawiające się wglądy, emocje i reakcje</li>
              <li>* potrzebują bezpiecznej przestrzeni do uporządkowania trudnych lub intensywnych przeżyć</li>
            </ul>

            <p className="mt-6">
              U wielu osób proces ten sprzyja:
            </p>

            <ul className="list-none space-y-2 pl-0 mt-4">
              <li>* pogłębieniu kontaktu z emocjami i wewnętrznymi schematami</li>
              <li>* lepszemu rozumieniu reakcji ciała i psychiki</li>
              <li>* integracji doświadczeń traumatycznych, egzystencjalnych oraz zablokowanych uczuć</li>
              <li>* poszerzeniu perspektywy postrzegania siebie i własnej historii</li>
              <li>* dotarciu do obszarów, które w klasycznej pracy werbalnej bywają trudno dostępne</li>
            </ul>

            <p className="mt-6">
              W trakcie spotkań wykorzystywane są m.in. elementy rozmowy wglądowej, techniki uważności, pracy z oddechem, muzyka wspierająca oraz kierowana uwaga - zawsze w granicach komfortu i gotowości klienta.
            </p>

            <h2 className="font-serif text-3xl text-navy-900 mt-16 mb-6">To nie jest doświadczenie rekreacyjne</h2>
            <p>
              Nie jest to forma relaksu ani „łagodnego rozluźnienia". To świadomy, pogłębiony proces pracy z doświadczeniem wewnętrznym, skierowany do osób, które czują, że klasyczne formy rozmowy nie zawsze pozwalają dotrzeć do głębszych warstw przeżyć.
            </p>
            <p>
              Dla wielu osób jest to sposób na lepsze zrozumienie źródeł wewnętrznych konfliktów, reakcji emocjonalnych oraz utrwalonych wzorców, które wpływają na codzienne funkcjonowanie.
            </p>

            <h2 className="font-serif text-3xl text-navy-900 mt-16 mb-6">Co może wspierać ten proces</h2>
            <p>
              U wielu osób praca ta sprzyja:
            </p>

            <ul className="list-none space-y-2 pl-0">
              <li>* pogłębieniu kontaktu z własnymi zasobami</li>
              <li>* wzmocnieniu poczucia sprawczości i zaufania do siebie</li>
              <li>* rozwijaniu zdolności do samoregulacji emocjonalnej</li>
              <li>* bardziej świadomemu odnoszeniu się do własnych potrzeb i granic</li>
            </ul>

            <h2 className="font-serif text-3xl text-navy-900 mt-16 mb-6">Zasady bezpieczeństwa i odpowiedzialności</h2>

            <ul className="list-none space-y-2 pl-0">
              <li>* praca odbywa się wyłącznie w granicach obowiązującego prawa</li>
              <li>* nie ingeruje w decyzje medyczne ani farmakologiczne</li>
              <li>* tempo, zakres i głębokość procesu są zawsze indywidualnie dostosowane</li>
              <li>* granice i gotowość klienta pozostają kluczowe na każdym etapie</li>
            </ul>

            <h2 className="font-serif text-2xl text-navy-900 mt-16 mb-6">Jeśli czujesz, że potrzebujesz pogłębionej, uważnej pracy integracyjnej, która pomoże Ci lepiej zrozumieć i uporządkować własne doświadczenia, to podejście może być dla Ciebie wartościowym elementem procesu zmiany.</h2>
          </div>
          <div className="mt-8 text-center">
            <button
              onClick={handleContactClick}
              className="px-10 py-4 bg-coral-500 text-white font-sans text-xs uppercase tracking-widest hover:bg-coral-600 transition-all duration-300 shadow-lg rounded-lg inline-block cursor-pointer"
            >
              ZAREZERWUJ TĘ SESJĘ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CAT;
