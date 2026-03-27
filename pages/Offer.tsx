import { ArrowLeft, Check } from 'lucide-react';
import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { OfferSubCategory } from '../types';
import AnimatedTile from '../components/AnimatedTile';

// Data for offers
export const offers: Record<string, OfferSubCategory> = {
  'stress-anxiety': {
    id: 'stress-anxiety',
    title: 'Pomoc w odzyskaniu równowagi emocjonalnej',
    description: 'Czujesz, że straciłaś/łeś grunt pod nogami? Emocje zalewają tak mocno, że działania tracą klarowność, a Ty masz wrażenie, że nawet z samym sobą trudno się dogadać?',
    fullDescription: 'Emocje zalewają tak mocno, że działania tracą klarowność, a Ty masz wrażenie, że nawet z samym sobą trudno się dogadać? Zastanawiasz się, gdzie podziała się Twoja wewnętrzna równowaga… i co zrobić, żeby wróciła? To moment w którym warto o nią zadbać. To, jak się czujesz i jak funkcjonujesz na co dzień, w ogromnej mierze zależy od Twoich własnych emocji i od tego, w jaki sposób nimi zarządzasz. Zarządzasz - to słowo klucz. Codziennie, nieustannie prowadzisz ze sobą wewnętrzny dialog, tworzysz w głowie obrazy, przyjmujesz określoną postawę ciała. Wszystko to automatycznie przywołuje konkretne myśli, a one z kolei budzą odpowiednie emocje. Robisz to cały czas – najczęściej nieświadomie. Dobra wiadomość? Skoro potrafisz to robić nieświadomie, to możesz też nauczyć się robić to świadomie, celowo i w sposób, który naprawdę Ci służy.',
    benefits: ['wewnętrznym dialogiem', 'obrazami mentalnymi', 'ciałem', 'emocjami'],
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80',
    tileBackgroundImage: '/assets/TILES_1.jpg',
    additionalInfo: 'tak, aby przestały działać przeciwko Tobie, a zaczęły wzmacniać Twoje poczucie spokoju, stabilności i sprawczości. Odzyskanie równowagi emocjonalnej wymaga uważności, czasu i odpowiednich narzędzi. To proces, który pozwala wrócić do siebie i funkcjonować w zgodzie z własnymi potrzebami - bez ciągłego napięcia i wewnętrznej walki.',
    autonomousHeadline: 'Czujesz, że straciłaś/łeś grunt pod nogami?',
    benefitsHeadline: 'Podczas sesji indywidualnych pokażę Ci, jak świadomie pracować z:'
  },
  'smoking-cessation': {
    id: 'smoking-cessation',
    title: 'Fobie, lęki i poczucie winy',
    description: 'Czujesz, że coś w środku ciągle trzyma Cię za gardło? Samolot, winda, pająk, rozmowa z szefem, a czasem po prostu… wychodzenie z domu.',
    fullDescription: 'Samolot, winda, pająk, rozmowa z szefem, a czasem po prostu… wychodzenie z domu. Lęk potrafi skutecznie zawężać codzienne funkcjonowanie. Może pojawiać się nagle lub towarzyszyć od lat, przyjmując formę fobii, napięcia, niepokoju albo ciągłego poczucia zagrożenia. Często nie wynika z aktualnej sytuacji, lecz z utrwalonych reakcji i doświadczeń zapisanych głębiej niż świadome myślenie. Podobnie działa poczucie winy — ciche, uporczywe, nierzadko nieadekwatne do rzeczywistości. Może blokować decyzje, odbierać energię i utrzymywać w stanie wewnętrznego napięcia, nawet wtedy, gdy obiektywnie „wszystko jest w porządku". Te stany mają jedną wspólną cechę: mózg uruchomił kiedyś bardzo silny program ochronny… i zapomniał go wyłączyć. W hipnoterapii nie walczymy z lękiem ani nie próbujemy go przekonać, że „nie ma się czego bać". Zamiast tego zajmujemy się docieraniem do źródeł tych stanów i stopniowym ich rozbrajaniem. Pracujemy z podświadomymi schematami, reakcjami ciała i wewnętrznymi przekonaniami tak, aby lęk przestał przejmować kontrolę, a poczucie winy straciło swoją destrukcyjną siłę.',
    benefits: ['ciało przestaje reagować paniką na dawne wyzwalacze', 'poczucie winy traci swoją miażdżącą siłę', 'wraca możliwość normalnego oddychania i myślenia w sytuacjach, które wcześniej paraliżowały'],
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80',
    tileBackgroundImage: '/assets/TILES_2.jpg',
    additionalInfo: '',
    autonomousHeadline: 'Czujesz, że coś w środku ciągle trzyma Cię za gardło? ',
    benefitsHeadline: 'Najczęściej po kilku spotkaniach ludzie zauważają, że:'
  },
  'regression': {
    id: 'regression',
    title: 'Zwiekszenie poczucia wartości i pewności siebie',
    description: 'Niskie poczucie własnej wartości rzadko pokazuje się wprost. Częściej czai się w ciągłym porównywaniu do innych, nadmiernej samokontroli, problemach ze stawianiem granic czy wrażeniu, że „po prostu nie jestem dość dobra/y". Z czasem to wycofuje, buduje napięcie i każe rezygnować z własnych potrzeb',
    fullDescription: 'Częściej czai się w ciągłym porównywaniu do innych, nadmiernej samokontroli, problemach ze stawianiem granic czy wrażeniu, że „po prostu nie jestem dość dobra/y". Z czasem to wycofuje, buduje napięcie i każe rezygnować z własnych potrzeb. Pewność siebie to nie wrodzona cecha, ale stan, który rośnie z wewnętrznych przekonań, emocji i doświadczeń. To Twój automatyczny sposób patrzenia na siebie, reagowania na wyzwania i podejmowania decyzji - często bez świadomej refleksji. W hipnoterapii skupiamy się na przemianie tych głębokich, nieuświadomionych wzorców, które podkopują Twoją wartość. Pracujemy z wewnętrznym dialogiem, emocjami i zapisanymi w podświadomości schematami, by budować stabilne poczucie sprawczości, wewnętrznej pewności i zaufania do siebie.',
    benefits: [' nie udawanie pewności, ale odzyskanie naturalnego dostępu do Twoich zasobów', 'prawo do bycia sobą, bez ciągłego kwestionowania własnej wartości'],
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80',
    tileBackgroundImage: '/assets/TILES_3.jpg',
    additionalInfo: 'Wyobraź sobie, jak to jest, kiedy w końcu przestajesz się podważać i zaczynasz po prostu być.',
    autonomousHeadline: 'Niskie poczucie własnej wartości rzadko pokazuje się wprost.',
    benefitsHeadline: 'Cel?'
  },
  'confidence': {
    id: 'confidence',
    title: 'Wewnętrzna integracja',
    description: 'Czy zdarza Ci się mieć poczucie, że wewnętrznie jesteś rozdarty/a — jakby różne części Ciebie chciały czegoś innego, a żadna z nich nie potrafiła przejąć prowadzenia? Taki stan często objawia się napięciem, brakiem decyzji lub powtarzaniem zachowań, które są sprzeczne z Twoimi intencjami.',
    fullDescription: ' — jakby różne części Ciebie chciały czegoś innego, a żadna z nich nie potrafiła przejąć prowadzenia? Taki stan często objawia się napięciem, brakiem decyzji lub powtarzaniem zachowań, które są sprzeczne z Twoimi intencjami. To nie jest brak silnej woli to dysonans wewnętrzny który pojawia się wtedy, gdy różne potrzeby, przekonania lub impulsy działają jednocześnie, ale w przeciwnych kierunkach. W ujęciu hipnoterapeutycznym zakłada się, że każda z tych części ma swoją ważną, pozytywną intencję — problemem nie jest ona sama, lecz sposób jej realizacji, który wchodzi w konflikt z innymi aspektami Twojego funkcjonowania. Podczas pracy w stanie transu możliwe jest dotarcie do tych wewnętrznych mechanizmów i stworzenie przestrzeni do ich integracji. Celem jest wypracowanie nowych, spójnych rozwiązań, które pozwolą zaspokoić potrzeby różnych części podświadomości bez wzajemnego blokowania się. Jeśli towarzyszy Ci uporczywe poczucie wewnętrznego konfliktu i chcesz odzyskać jasność, spokój oraz poczucie kierunku, pomogę Ci przejść przez ten proces w bezpieczny i uporządkowany sposób.',
    benefits: ['lepsze rozumienie wewnętrznych części siebie i ich rzeczywistych intencji', 'zmniejszenie napięcia wynikającego z wewnętrznych sprzeczności', 'odzyskanie większej spójności, jasności i poczucia kierunku w codziennym życiu'],
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80',
    tileBackgroundImage: '/assets/TILES_4.jpg',
    additionalInfo: 'Jeśli czujesz, że wewnętrznie coś ciągnie Cię w różne strony, zapraszam. Wspólnie możemy spokojnie dotrzeć do źródła tego napięcia i odzyskać więcej równowagi.',
    autonomousHeadline: 'Czy zdarza Ci się mieć poczucie, że wewnętrznie jesteś rozdarty/a?',
    benefitsHeadline: 'Celem tej pracy jest:'
  },
  'personal-development': {
    id: 'personal-development',
    title: 'Budowanie zdrowych relacji',
    description: 'Relacje towarzyszą nam na każdym kroku - w miłości, rodzinie, przyjaźniach, w pracy. To właśnie one w ogromnym stopniu decydują o tym, jak bezpiecznie i satysfakcjonująco czujemy się na co dzień. Trudności w kontaktach z innymi rzadko wynikają z braku chęci czy złych intencji',
    fullDescription: 'To właśnie one w ogromnym stopniu decydują o tym, jak bezpiecznie i satysfakcjonująco czujemy się na co dzień. Trudności w kontaktach z innymi rzadko wynikają z braku chęci czy złych intencji. Najczęściej są efektem starych, automatycznych wzorców - sposobów reagowania, które kiedyś powstały, żeby nas chronić, a teraz działają już wbrew nam. Zwłaszcza wtedy, kiedy pojawia się napięcie, różnica zdań albo większa bliskość. W hipnoterapii pracujemy właśnie z tymi głębiej ukrytymi mechanizmami.',
    benefits: ['Żeby komunikacja stawała się spokojniejsza, wyraźniejsza i bardziej autentyczna', 'Żebyś potrafił/a mówić o swoich potrzebach i granicach - bez poczucia winy i bez wywoływania wojny', 'Żeby konflikty mogły się kończyć porozumieniem, a nie wyczerpaniem'],
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80',
    tileBackgroundImage: '/assets/TILES_5.jpg',
    additionalInfo: 'Dobre relacje to nie tylko mniej cierpienia w życiu prywatnym. To też większa lekkość i skuteczność w pracy, więcej spokoju w codzienności i mocniejsze poczucie, że masz wpływ na to, jak wygląda Twoje życie.',
    autonomousHeadline: 'Relacje towarzyszą nam na każdym kroku - w miłości, rodzinie, przyjaźniach, w pracy.',
    benefitsHeadline: 'Uczysz się rozpoznawać, co się w Tobie uruchamia w trudnych momentach i jak można to zmienić'
  },
  'procrastination': {
    id: 'procrastination',
    title: 'Powrót do równowagi po rozstaniu',
    description: 'Rozstanie boli - niezależnie od tego, kto podjął decyzję i jak bardzo „słuszna" wydawała się w danym momencie. Często długo potem nosimy w sobie smutek, żal, złość, poczucie straty albo pustki, która nie chce się zagoić.',
    fullDescription: 'Często długo potem nosimy w sobie smutek, żal, złość, poczucie straty albo pustki, która nie chce się zagoić. W hipnoterapii towarzyszę Ci w tym procesie w sposób łagodny i bezpieczny. Pracujemy z emocjami, które wciąż mocno trzymają, z myślami, które wracają w kółko, z przywiązaniami, które nie pozwalają puścić. Nie chodzi o to, żeby „zapomnieć" czy „szybko przejść dalej", tylko o to, żeby pozwolić sobie przeżyć to doświadczenie w pełni - i w końcu móc je odłożyć z szacunkiem. Po tej pracy zwykle pojawia się więcej spokoju wewnętrznego, lżejsze oddychanie i powoli rodząca się przestrzeń na nowe - na siebie i na relacje, które już nie będą musiały dźwigać ciężaru starego bólu.',
    benefits: ['więcej zgody na to, co trudne i niedomknięte','mniej napięcia wokół tego, co było', 'więcej wewnętrznego spokoju i gotowości na to, co nowe'],
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80',
    tileBackgroundImage: '/assets/TILES_6.jpg',
    additionalInfo: ' Jeśli czujesz, że jakaś część Ciebie wciąż została w tamtym miejscu — zapraszam, będę Ci w tym towarzyszyć.',
    autonomousHeadline: 'Rozstanie boli - niezależnie od tego, kto podjął decyzję i jak bardzo „słuszna" wydawała się w danym momencie',
    benefitsHeadline: 'W tym procesie stopniowo pojawia się:'
  },
  'relationships': {
    id: 'relationships',
    title: 'Regulacja wagi',
    description: 'Praca z wagą w hipnoterapii nie polega na walce z ciałem ani na narzucaniu sztywnych zasad. To proces, w którym skupiamy się na zmianie głębokich, nieuświadomionych schematów wpływających na sposób jedzenia, relację z jedzeniem, motywację i dbanie o siebie',
    fullDescription: 'To proces, w którym skupiamy się na zmianie głębokich, nieuświadomionych schematów wpływających na sposób jedzenia, relację z jedzeniem, motywację i dbanie o siebie. Podczas cyklu indywidualnych sesji wspólnie wypracowujemy rozwiązania dopasowane do Twojego organizmu, stylu życia i wewnętrznych potrzeb. Pracujemy nad budowaniem wspierających nawyków żywieniowych i ruchowych, wzmacnianiem motywacji oraz poczucia sprawczości — w zgodzie z Twoim systemem wartości i realnymi możliwościami.',
    benefits: ['większe zrozumienie mechanizmów, które wpływają na jedzenie i relację z ciałem','więcej sprawczości, motywacji i nawyków dopasowanych do Twoich realnych możliwości', 'bardziej naturalna troska o siebie, oparta na równowadze, a nie na przymusie'],
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80',
    tileBackgroundImage: '/assets/TILES_7.jpg',
    additionalInfo: ' jeśli chcesz odzyskać wpływ na swoje wybory i relację z ciałem — możemy wspólnie poszukać drogi, która będzie naprawdę Twoja.',
    autonomousHeadline: 'Praca z wagą w hipnoterapii nie polega na walce z ciałem ani na narzucaniu sztywnych zasad',
    benefitsHeadline: 'W tym procesie stopniowo pojawia się:'
  },
  'psychedelic-therapy': {
    id: 'psychedelic-therapy',
    title: 'Regulacja trzeźwości',
    description: 'Trudności z alkoholem bardzo często nie dotyczą samej substancji, lecz funkcji, jaką pełni ona w życiu — regulowania emocji, napięcia, relacji czy poczucia ulgi. W pracy hipnoterapeutycznej skupiamy się na dotarciu do tych mechanizmów i znalezieniu dla nich zdrowszych, bezpiecznych rozwiązań',
    fullDescription: ' W pracy hipnoterapeutycznej skupiamy się na dotarciu do tych mechanizmów i znalezieniu dla nich zdrowszych, bezpiecznych rozwiązań. Podczas indywidualnych sesji dobieramy sposób pracy odpowiedni do Twojej historii, potrzeb i gotowości do zmiany. Może to obejmować budowanie nowych nawyków, pracę z emocjami, które wcześniej były „regulowane" alkoholem, powrót do zasobów sprzed momentu, w którym alkohol stał się problemem, lub zmianę nieświadomych reakcji związanych z jego używaniem.',
    benefits: [' '],
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80',
    tileBackgroundImage: '/assets/TILES_8.jpg',
    additionalInfo: ' ',
    autonomousHeadline: 'Trudności z alkoholem bardzo często nie dotyczą samej substancji, lecz funkcji, jaką pełni ona w życiu — regulowania emocji, napięcia, relacji czy poczucia ulgi',
    benefitsHeadline: 'Hipnoterapia jest procesem indywidualnym — dlatego właściwy kierunek i tempo pracy ustalamy wspólnie, w bezpiecznej i wspierającej przestrzeni. Celem jest odzyskanie kontroli, wewnętrznej równowagi i realnej wolności wyboru.'
  }
};

interface OfferSectionProps {
  id?: string;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ id }) => (
  <section id={id} className="relative py-[45px] bg-warm-900 scroll-mt-20 border-t border-warm-800">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <span className="text-coffee-400 font-sans text-s font-bold uppercase tracking-[0.3em] mb-3 block"> </span>
            <h2 className="font-display text-4xl md:text-4xl text-warm-100 tracking-wide py-0 -mt-[25px] -mb-[25px]">OTO W CZYM MOGĘ CI POMÓC:</h2>
        </div>

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
         {Object.values(offers).map((offer) => (
           <Link to={`/offer/${offer.id}`} key={offer.id} className="group relative flex flex-col h-full overflow-hidden bg-warm-800 rounded-2xl">
             <AnimatedTile offerId={offer.id} backgroundImage={offer.tileBackgroundImage} />
             
             <div className="relative z-10 p-4 pt-6 flex flex-col justify-start text-center items-center grow">
                 {/* Frame Effect */}
                 <div className="absolute inset-2 border border-warm-950/10 group-hover:border-coffee-400/40 transition-colors duration-700 pointer-events-none rounded-xl"></div>
                 
                 <div className="transform transition-transform duration-500 group-hover:-translate-y-2 w-full flex flex-col items-center">
                    <h3 className="font-display text-[26px] text-white mb-2 tracking-wide drop-shadow-lg leading-tight px-2 font-semibold">{offer.title}</h3>
                    
                    {/* Animated Line */}
                    <div className="w-0 h-px bg-coffee-400 mx-auto mb-3 transition-all duration-500 group-hover:w-12 opacity-80"></div>
                    
                    <p className="text-white font-sans text-xs font-medium leading-relaxed max-w-[240px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0 delay-75 mb-4">
                        {offer.description}
                    </p>
                 </div>
                 
                 <div className="mt-auto pt-2 pb-2">
                    <span className="inline-flex items-center justify-center px-5 py-2 border border-warm-700/30 rounded-full text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-warm-300 group-hover:text-coffee-300 group-hover:border-coffee-400/40 transition-all duration-500 bg-warm-950/40 backdrop-blur-sm">
                      Dowiedz się więcej
                    </span>
                 </div>
             </div>
           </Link>
         ))}
       </div>
     </div>
  </section>
);

export const OfferDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const offer = id ? offers[id] : null;

  const handleNavigate = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    navigate('/', { state: { scrollTo: sectionId } });
  };

  if (!offer) {
    return (
        <div className="min-h-dvh flex items-center justify-center bg-warm-900">
            <div className="text-center">
                <h2 className="text-2xl font-display text-warm-100">Oferta nie znaleziona</h2>
                <a href="#offer" onClick={(e) => handleNavigate(e, 'offer')} className="text-coffee-400 underline mt-4 block cursor-pointer">Powrót do Ofert</a>
            </div>
        </div>
    );
  }

  return (
    <div className="min-h-dvh bg-warm-900 pb-20">
       {/* Hero for Detail */}
       <div className="h-[30vh] relative overflow-hidden">
         <AnimatedTile offerId={offer.id} backgroundImage={offer.tileBackgroundImage}>
             <div className="absolute inset-0 bg-warm-950/75 flex items-center justify-center">
                <div className="text-center px-4 max-w-4xl z-10">
                  <span className="block text-coffee-400 uppercase tracking-widest text-sm mb-4 font-bold">Szczegóły Usługi</span>
                  <h1 className="font-display text-4xl md:text-5xl text-warm-100 tracking-wide mb-2">{offer.title}</h1>
                </div>
             </div>
         </AnimatedTile>
       </div>

       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
         <div className="bg-white p-8 md:p-16 rounded-2xl shadow-2xl border border-warm-800">
           <a href="#offer" onClick={(e) => handleNavigate(e, 'offer')} className="inline-flex items-center text-coffee-400 hover:text-coffee-300 mb-10 transition-colors text-xs font-bold uppercase tracking-widest cursor-pointer group">
              <ArrowLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Wszystkie Oferty
           </a>

           <div className="prose max-w-none">
             <h2 className="font-display text-3xl md:text-4xl text-warm-100 mb-8 font-light [background-clip:unset] [-webkit-background-clip:unset]">{offer.autonomousHeadline}</h2>
             <p className="text-warm-300 text-lg leading-[30px] mb-[15px] font-light">
               {offer.fullDescription}
             </p>

             <div className="bg-warm-900/30 p-10 rounded-2xl border border-warm-800 mb-12">
               <h3 className="font-display text-2xl text-coffee-400 mb-8">{offer.benefitsHeadline}</h3>
               <ul className="space-y-4">
                 {offer.benefits.filter(b => b.trim() !== '').map((benefit, index) => (
                   <li key={index} className="flex items-start">
                     <div className="shrink-0 w-6 h-6 rounded-full bg-coffee-900 flex items-center justify-center mt-1 mr-4 border border-coffee-800">
                       <Check size={12} className="text-coffee-400" />
                     </div>
                     <span className="text-warm-200 font-semibold text-lg">{benefit}</span>
                   </li>
                 ))}
               </ul>
                {offer.additionalInfo && offer.additionalInfo.trim() !== '' && (
                    <h3 className="font-display text-lg font-light text-warm-200 mt-[25px] mb-[25px] w-[640px] max-w-full">
                     {offer.additionalInfo}
                    </h3>
                )}
             </div>

             <div className="text-center pt-0 box-content">
                <p className="text-coffee-400 mb-8 font-serif text-xl font-normal border-0 border-transparent border-none [border-image:none]"></p>
                <a href="#contact" onClick={(e) => handleNavigate(e, 'contact')} className="inline-block px-12 py-5 bg-coffee-700 text-white font-sans text-xs font-bold uppercase tracking-[0.2em] hover:bg-coffee-600 transition-all shadow-lg hover:shadow-coffee-900/30 cursor-pointer rounded-full">
                  ZAREZERWUJ TĘ SESJĘ
                </a>
             </div>
           </div>
         </div>
       </div>
    </div>
  );
};
