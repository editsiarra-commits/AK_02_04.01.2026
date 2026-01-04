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
            Pomoc w odzyskaniu równowagi emocjonalnej
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
              Hipnoterapia to bezpieczna i naturalna metoda pracy z podświadomością, która pozwala dotrzeć do źródła problemów i odblokować wewnętrzny potencjał. W stanie głębokiego relaksu, przy zachowaniu pełnej świadomości, otwieramy drzwi do umysłu podświadomego, gdzie zapisane są nasze najgłębsze przekonania, wzorce i emocje.
            </p>
            <p>
              To właśnie tam, w bezpiecznej przestrzeni, możemy dokonać transformujących zmian. Możemy uwolnić się od lęków, zmienić niechciane nawyki, wzmocnić poczucie własnej wartości i odzyskać wewnętrzną harmonię.
            </p>

            <h2 className="font-serif text-3xl text-warm-100 mt-16 mb-6">Dla kogo jest Hipnoterapia?</h2>
            <p>
              Zapraszam Cię, jeśli zmagasz się z:
            </p>
            <ul>
              <li>Lękiem, stresem i atakami paniki</li>
              <li>Niskim poczuciem własnej wartości i brakiem pewności siebie</li>
              <li>Trudnościami w relacjach</li>
              <li>Przewlekłym bólem lub napięciem w ciele</li>
              <li>Niechcianymi nawykami i nałogami</li>
              <li>Problemami ze snem</li>
              <li>Poczuciem utknięcia i braku celu w życiu</li>
            </ul>

            <h2 className="font-serif text-3xl text-warm-100 mt-16 mb-6">Jak wygląda sesja?</h2>
            <p>
              Każda sesja jest unikalna i dopasowana do Twoich potrzeb. Zaczynamy od rozmowy, podczas której omawiamy Twoje cele i obawy. Następnie, poprzez techniki relaksacyjne, wprowadzam Cię w stan hipnozy – przyjemny stan głębokiego odprężenia. W tym stanie, z pełnym poczuciem bezpieczeństwa i kontroli, pracujemy nad transformacją ograniczających Cię wzorców.
            </p>
            <blockquote className="border-l-4 border-coffee-600 pl-6 italic text-warm-200">
              Hipnoterapia jest procesem indywidualnym — dlatego właściwy kierunek i tempo pracy ustalamy wspólnie, w bezpiecznej i wspierającej przestrzeni. Celem jest odzyskanie kontroli, wewnętrznej równowagi i realnej wolności wyboru.
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hipnoterapia;
