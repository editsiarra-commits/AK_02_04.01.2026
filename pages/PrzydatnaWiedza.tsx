import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrzydatnaWiedza: React.FC = () => {
  const navigate = useNavigate();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/', { state: { scrollTo: 'contact' } });
  };

  return (
    <div className="bg-warm-900 text-warm-200">
      {/* Hero Section */}
      <section className="relative pt-24 pb-4 md:pt-32 md:pb-6 border-b border-warm-800 overflow-hidden">
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
          <div className="absolute inset-0 bg-linear-to-t from-warm-900 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="text-coffee-400 font-sans text-xl font-bold uppercase tracking-[0.3em] mb-2">
            Czytaj, Odkrywaj, Rozwijaj się
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-warm-100 mb-2">
            Przydatna Wiedza
          </h1>
          <h2 className="text-xl md:text-2xl text-coffee-400 block mt-1 opacity-90 font-serif font-light tracking-wider mb-4">
            Baza artykułów i publikacji
          </h2>
          <p className="text-xl md:text-2xl text-warm-300 font-serif italic max-w-3xl mx-auto">
            Zrozum mechanizmy swojej psychiki i poznaj najnowsze doniesienia ze świata nauki i psychoterapii.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-4 pb-16 lg:pt-6 lg:pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <Link to="/" className="inline-flex items-center text-coffee-400 hover:text-coffee-300 transition-colors">
              <ArrowLeft size={20} className="mr-2" />
              <span>Powrót do strony głównej</span>
            </Link>
          </div>

          <div className="space-y-24">
            
            {/* KATEGORIA 1: HIPNOTERAPIA */}
            <section>
              <h2 className="font-serif text-4xl text-coffee-400 border-b border-coffee-900/50 pb-4 mb-10 text-center tracking-wider">
                HIPNOTERAPIA
              </h2>
              
              <article className="mb-16 bg-warm-800/30 p-8 md:p-10 rounded-2xl border border-warm-800">
                <h3 className="font-serif text-3xl text-warm-100 mb-6 leading-tight">
                  Wahadełko, sen i utrata woli? Zapomnij. Czym naprawdę jest i jak działa hipnoterapia ?
                </h3>
                <div className="prose prose-lg prose-invert max-w-none text-warm-300 font-light leading-relaxed">
                  <p>
                  Wyobraź sobie klasyczną scenę z filmu: tajemniczy człowiek z przenikliwym spojrzeniem kołysze przed twoimi oczami błyszczącym zegarkiem. Twoje powieki stają się ciężkie, zapadasz w sen, a po chwili, na pstryknięcie palców, robisz wszystko, co ci każe – szczekasz jak pies albo zdradzasz najgłębsze sekrety.

Brzmi znajomo? Niestety, popkultura wyrządziła hipnozie ogromną krzywdę. Czas obalić mity, bo to, co nauka wie o hipnozie i hipnoterapii, jest o wiele bardziej fascynujące niż jakakolwiek filmowa fikcja.
                  </p>
                  <p>
                  Największy mit? Hipnotyzer może przejąć kontrolę nad twoim umysłem. Prawda jest taka, że w stanie hipnozy nie zrobisz niczego, co byłoby całkowicie sprzeczne z twoim systemem wartości czy wewnętrznymi granicami. Gdyby pojawiła się sugestia budząca silny sprzeciw, najprawdopodobniej zostałaby odrzucona lub doprowadziłaby do przerwania procesu.

Nie jest to też sen. To szczególny stan skupienia uwagi i zwiększonego zaangażowania wyobraźni. W badaniach EEG u części osób obserwuje się zmiany aktywności fal mózgowych, między innymi w zakresie alfa i theta, choć nie istnieje jeden uniwersalny wzorzec aktywności charakterystyczny dla hipnozy.
                  </p>
                  <p>
                  Paradoksalnie, na hipnozę wcale nie są bardziej podatne osoby „słabe psychicznie” czy naiwne. Wręcz przeciwnie – badania sugerują, że łatwiej wchodzą w ten stan osoby o rozwiniętej wyobraźni, zdolności koncentracji oraz większej otwartości na doświadczenie.

Zastanawiasz się, po co w ogóle wchodzić w taki stan? Jedną z odpowiedzi może być neuroplastyczność mózgu – jego naturalna zdolność do uczenia się, adaptacji i tworzenia nowych wzorców reagowania.

Niektóre modele hipnoterapii opisują ten proces poprzez koncepcję tzw. filtra krytycznego – metaforycznego mechanizmu, który może utrudniać zmianę utrwalonych schematów myślenia i reagowania. W stanie hipnozy część osób doświadcza większej łatwości w przyglądaniu się emocjom, wspomnieniom i wewnętrznym przekonaniom z nowej perspektywy.

Przykładem może być osoba, która przez lata bezskutecznie próbowała zmienić swoje nawyki związane z jedzeniem. W niektórych przypadkach praca z doświadczeniami z przeszłości pozwala lepiej zrozumieć emocjonalne i behawioralne czynniki wpływające na relację z jedzeniem. Dla części osób takie zrozumienie może ułatwiać wprowadzanie zmian związanych z odżywianiem i stylem życia.

To nie magia. Jedną z hipotez wyjaśniających skuteczność niektórych interwencji psychologicznych, w tym hipnoterapii, jest zdolność mózgu do tworzenia nowych wzorców uczenia się i adaptacji, określana mianem neuroplastyczności.
                  </p>
                </div>
              </article>

              <article className="mb-16 bg-warm-800/30 p-8 md:p-10 rounded-2xl border border-warm-800">
                <h3 className="font-serif text-3xl text-warm-100 mb-6 leading-tight">
                  Prawo lustra i paradoks wysiłku. Zaskakujące mechanizmy naszej psychiki
                </h3>
                <div className="prose prose-lg prose-invert max-w-none text-warm-300 font-light leading-relaxed">
                  <p>
                  Ludzka psychika uwielbia płatać nam figle, a wiele zjawisk, które obserwujemy w sobie i innych, opiera się na wewnętrznych paradoksach. Zastanawiałeś się kiedyś, dlaczego tak bardzo irytują cię określone cechy u innych ludzi? Dlaczego czyjaś arogancja, spóźnialstwo czy głośny śmiech wywołują w tobie tak silne emocje?

Psychologia podpowiada, że nasze reakcje na innych często mówią coś również o nas samych. Silna irytacja może czasami skłaniać do refleksji nad własnymi doświadczeniami, przekonaniami lub cechami, których w sobie nie lubimy albo których nie chcemy dostrzegać. W psychologii psychodynamicznej jednym z mechanizmów wyjaśniających takie zjawiska jest projekcja – tendencja do przypisywania innym własnych uczuć, impulsów lub cech.

To jednak dopiero początek fascynującej listy życiowych paradoksów.

Weźmy na przykład zaufanie. Sposób, w jaki postrzegamy innych ludzi, często jest kształtowany przez nasze wcześniejsze doświadczenia, styl przywiązania i historię relacji. Osoby, które doświadczyły zranienia lub zawodów, mogą mieć większą trudność z obdarzaniem innych zaufaniem, nawet jeśli bardzo tego pragną.

Kolejnym ciekawym zjawiskiem jest „paradoks wysiłku”. Widzisz mistrza sportu, wybitnego mówcę lub genialnego artystę i myślisz: „Przychodzi mu to tak naturalnie, bez żadnego wysiłku”. Tymczasem za tą pozorną lekkością bardzo często stoją lata praktyki, tysiące godzin ćwiczeń i niezliczone próby. Im większa biegłość, tym mniej widoczny staje się wysiłek, który do niej doprowadził.

Zrozumienie takich mechanizmów potrafi działać uwalniająco. Przestajemy walczyć z wiatrakami i zaczynamy z większą ciekawością przyglądać się sobie. Odkrywamy, że nadmierna koncentracja na tym, jak jesteśmy postrzegani przez innych, często utrudnia autentyczny kontakt i zwiększa napięcie.

Podobnie jest w komunikacji. Badania pokazują, że ludzie częściej zmieniają zdanie w kontakcie z osobami, które potrafią słuchać, okazują ciekawość i zadają pytania, niż pod wpływem agresywnej argumentacji czy prób przekonywania za wszelką cenę.

Rozwój osobisty rzadko przebiega w linii prostej. Błędy, potknięcia i niepowodzenia są naturalną częścią procesu uczenia się. To właśnie gotowość do wyciągania wniosków i podejmowania kolejnych prób często staje się jednym z najważniejszych czynników rozwoju i osiągania długoterminowych celów.
                  </p>
                </div>
              </article>

              <article className="bg-warm-800/30 p-8 md:p-10 rounded-2xl border border-warm-800">
                <h3 className="font-serif text-3xl text-warm-100 mb-6 leading-tight">
                  Smartfon, "cichy sabotażysta" mózgu i powrót do prawdy w erze AI
                </h3>
                <div className="prose prose-lg prose-invert max-w-none text-warm-300 font-light leading-relaxed">
                  <p>
                  Żyjemy w erze informacyjnego paradoksu. Jesteśmy w stałym kontakcie z niemal całym światem, a jednocześnie coraz więcej badań wskazuje na wzrost poczucia samotności, przeciążenia informacyjnego i trudności z koncentracją.

Neuropsychologia już od dawna zwraca uwagę na to, że sposób korzystania ze smartfonów i mediów cyfrowych może wpływać na uwagę, pamięć roboczą oraz zdolność do samoregulacji. Coraz częściej mówi się również o kosztach nieustannego rozproszenia i nadmiaru bodźców.

Do tego dochodzi zjawisko określane jako „AI Backlash” – rosnące zmęczenie masowo generowanymi treściami, idealnymi, ale często powierzchownymi obrazami i automatycznie tworzonymi odpowiedziami, określanymi czasem mianem „AI Slop”. Wiele osób doświadcza dziś przesytu informacyjnego i coraz bardziej poszukuje autentyczności, empatii oraz prawdziwego kontaktu z drugim człowiekiem.

Dlatego rola profesjonalnej pomocy psychologicznej, rzetelnej wiedzy i bezpiecznych relacji staje się dziś szczególnie ważna. W świecie pełnym bodźców i szybkich odpowiedzi spotkanie z drugim człowiekiem – stacjonarnie lub online – może stać się przestrzenią zatrzymania, refleksji i budowania prawdziwej więzi.

Treści publikowane w mediach społecznościowych czy odpowiedzi generowane przez sztuczną inteligencję mogą być źródłem informacji i inspiracji, ale nie zastępują indywidualnej diagnozy, profesjonalnej pomocy ani relacji terapeutycznej. Mimo dynamicznego rozwoju technologii wiele osób nadal potrzebuje tego, czego żaden algorytm nie potrafi w pełni odtworzyć – poczucia bycia zobaczonym, wysłuchanym i autentycznie spotkanym przez drugiego człowieka.
                  </p>
                </div>
              </article>
            </section>

            {/* KATEGORIA 2: POSZERZONE STANY ŚWIADOMOŚCI */}
            <section>
              <h2 className="font-serif text-4xl text-coffee-400 border-b border-coffee-900/50 pb-4 mb-10 text-center tracking-wider">
              POSZERZONE STANY ŚWIADOMOŚCI
              </h2>
              
              <article className="bg-warm-800/30 p-8 md:p-10 rounded-2xl border border-warm-800">
                <h3 className="font-serif text-3xl text-warm-100 mb-6 leading-tight">
                Powrót z Drugiej Strony. Dlaczego samo doświadczenie psychodeliczne nie wystarcza?
                </h3>
                <div className="prose prose-lg prose-invert max-w-none text-warm-300 font-light leading-relaxed">
                  <p>
                  Renesans psychodeliczny trwa w najlepsze. Setki artykułów opisują obiecujące wyniki badań dotyczących depresji lekoopornej, PTSD czy lęku egzystencjalnego, a kultura masowa ponownie zafascynowała się substancjami poszerzającymi świadomość.

Coraz więcej specjalistów podkreśla jednak, że samo doświadczenie psychodeliczne nie jest równoznaczne z trwałą zmianą. To trochę tak, jakby samo wejście na szczyt góry miało uczynić cię alpinistą. Prawdziwa praca często zaczyna się dopiero po zakończeniu doświadczenia. To właśnie ten etap nazywamy integracją.

Polskie Towarzystwo Integracji Psychodelicznej (PTIP), które prowadzi grupy wsparcia w różnych miastach Polski oraz online, zwraca uwagę, że doświadczenia poszerzonej świadomości mogą być głębokie i intensywne. Niektórzy konfrontują się z długo tłumionymi emocjami, inni doświadczają poczucia jedności, głębokich wglądów lub trudnych, dezorientujących przeżyć.

Niezależnie od charakteru doświadczenia wiele osób potrzebuje czasu i przestrzeni, aby nadać mu znaczenie i odnaleźć jego miejsce w codziennym życiu. Bez procesu integracji część przeżyć może z czasem wyblaknąć lub pozostawić po sobie poczucie dezorientacji i niepokoju.

Integracja to proces rozumienia i osadzania tego, co zostało przeżyte. Niektórzy specjaliści korzystają między innymi z modelu IFS (System Wewnętrznej Rodziny), aby lepiej zrozumieć wewnętrzne konflikty, emocje i różne „części” naszej psychiki, które mogły ujawnić się podczas doświadczenia.

Jeśli ktoś doświadczył intensywnego lęku lub tzw. bad tripu, proces integracji może pomóc przyjrzeć się temu doświadczeniu z większą ciekawością i zrozumieniem oraz zastanowić się, czy wiąże się ono z ważnymi wydarzeniami, przekonaniami lub nierozwiązanymi doświadczeniami z przeszłości.

Integrację można rozumieć jako proces wydobywania znaczenia z intensywnych doświadczeń i przekładania wglądów na codzienne życie – tak, aby nie pozostały jedynie niezwykłym wspomnieniem, ale mogły stać się źródłem refleksji i świadomych zmian. Tarcza ochronna mózgu czy zagrożenie? Dwa oblicza medycznej marihuany

Przez dekady wmawiano nam, że marihuana bezpowrotnie niszczy pamięć i degeneruje komórki nerwowe. Tymczasem ostatnie lata przyniosły wyniki badań, które pokazały, że wpływ konopi na mózg jest znacznie bardziej złożony i może zależeć między innymi od wieku, dawki, składu preparatu oraz indywidualnych predyspozycji.

Jednym z bardziej zaskakujących odkryć były analizy danych z UK Biobank, które wykazały, że u części osób w średnim i starszym wieku historia używania konopi wiązała się z większą objętością niektórych struktur mózgu oraz lepszymi wynikami w wybranych testach poznawczych. Wyniki te nie oznaczają jednak, że konopie „chronią mózg” ani nie dowodzą związku przyczynowo-skutkowego. Pokazują raczej, że zależność między konopiami a funkcjonowaniem mózgu może być bardziej złożona, niż przez lata sądzono.

Nauka rzuca jednak równie ważne ostrzeżenie. W przypadku osób młodych, których mózg nadal intensywnie się rozwija, używanie konopi – szczególnie preparatów o wysokiej zawartości THC – wiąże się ze zwiększonym ryzykiem wystąpienia zaburzeń psychotycznych, zwłaszcza u osób posiadających indywidualne predyspozycje.

Badania pokazują również, że wbrew powszechnym opiniom sama marihuana nie jest uniwersalnym sposobem leczenia depresji czy lęku. U części osób może przynosić subiektywną ulgę, podczas gdy u innych nasilać objawy niepokoju, obniżenia nastroju lub dezorganizacji.

Coraz większe zainteresowanie budzą natomiast badania nad wykorzystaniem konopi w połączeniu z psychoterapią i pracą integracyjną. Pojawiają się pojedyncze opisy przypadków oraz wstępne wyniki sugerujące, że w określonych warunkach medycznych i terapeutycznych konopie mogą wspierać pogłębianie kontaktu z emocjami i doświadczeniami wewnętrznymi. Obszar ten nadal wymaga jednak dalszych badań i dużej ostrożności w wyciąganiu wniosków.

Konopie nie są „magiczną pigułką” ani rozwiązaniem dla każdego. Ich wpływ na psychikę i mózg okazuje się znacznie bardziej złożony, niż przez lata sądzono. Dlatego coraz więcej specjalistów podkreśla znaczenie odpowiedniej kwalifikacji, uwzględnienia przeciwwskazań oraz świadomego podejścia do integracji doświadczeń związanych z ich stosowaniem.
                  </p>
                </div>
              </article>
            </section>

            {/* KATEGORIA 3: SESJE ODDECHOWE */}
            <section>
              <h2 className="font-serif text-4xl text-coffee-400 border-b border-coffee-900/50 pb-4 mb-10 text-center tracking-wider">
                SESJE ODDECHOWE
              </h2>

              <article className="bg-warm-800/30 p-8 md:p-10 rounded-2xl border border-warm-800">
                <h3 className="font-serif text-3xl text-warm-100 mb-6 leading-tight">
                  "Umrzeć za życia", by odzyskać spokój. Niezwykły świat oddychania holotropowego
                </h3>
                <div className="prose prose-lg prose-invert max-w-none text-warm-300 font-light leading-relaxed">
                  <p>
                  Co byś powiedział, gdyby ktoś zaproponował ci podróż do głębokich warstw własnego doświadczenia wewnętrznego – bez użycia substancji psychoaktywnych? Brzmi niezwykle, ale właśnie na tym opiera się oddychanie holotropowe – metoda wywodząca się z psychologii transpersonalnej, rozwijana od lat 70. przez psychiatrę Stanislava Grofa i jego żonę Christinę Grof, współtwórczynię tej metody oraz pionierkę pracy z poszerzonymi stanami świadomości.

Słowo „holotropowy” pochodzi z greki i oznacza „zmierzający ku całości”. Metoda wykorzystuje pogłębiony i intensywniejszy oddech, połączony ze specjalnie dobraną muzyką oraz wspierającą obecnością facylitatorów. Celem jest stworzenie warunków sprzyjających pogłębionemu kontaktowi z własnym doświadczeniem, emocjami i wewnętrznym światem.

Doświadczenia podczas takich sesji bywają bardzo intensywne. Uczestnicy opisują między innymi silne emocje, obrazy, odczucia płynące z ciała, doświadczenia symboliczne czy poczucie głębokiego wglądu. Niektórzy interpretują część tych przeżyć jako związane z bardzo wczesnym okresem życia, a nawet z własnymi narodzinami.

Stanislav Grof zaproponował teorię matryc perinatalnych, zakładającą, że doświadczenia związane z okresem narodzin mogą pozostawiać ślad w psychice człowieka i ujawniać się w poszerzonych stanach świadomości. Koncepcja ta pozostaje jednak elementem teorii psychologii transpersonalnej i nie została jednoznacznie potwierdzona empirycznie.

Część uczestników opisuje swoje doświadczenia jako symboliczne „umieranie za życia” – głęboki proces konfrontacji z własnymi lękami, stratami lub starymi sposobami funkcjonowania. Niektóre osoby po sesjach mówią o poczuciu ulgi, większego spokoju i rozluźnienia.

Ze względu na intensywność procesu metoda posiada wyraźne przeciwwskazania, między innymi dotyczące niektórych chorób układu krążenia, padaczki, ciąży czy części schorzeń oddechowych. Dlatego przed udziałem w sesji zawsze konieczna jest odpowiednia kwalifikacja i uwzględnienie stanu zdrowia uczestnika.

Dla wielu osób oddychanie holotropowe staje się ważnym doświadczeniem samopoznania i okazją do głębszego kontaktu z własnym światem wewnętrznym.
                  </p>
                </div>
              </article>
            </section>

           

          </div>

          <div className="mt-20 text-center">
            <button
              onClick={handleContactClick}
              className="px-10 py-4 bg-coffee-700 text-white font-sans text-xs uppercase tracking-widest hover:bg-coffee-600 transition-all duration-300 shadow-2xl shadow-coffee-900/20 inline-block cursor-pointer rounded-full"
            >
              SKONTAKTUJ SIĘ ZE MNĄ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrzydatnaWiedza;
