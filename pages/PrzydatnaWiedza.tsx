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
                  Wahadełko, sen i utrata woli? Zapomnij. Czym naprawdę jest i jak działa hipnoterapia
                </h3>
                <div className="prose prose-lg prose-invert max-w-none text-warm-300 font-light leading-relaxed">
                  <p>
                    Wyobraź sobie klasyczną scenę z filmu: tajemniczy człowiek z przenikliwym spojrzeniem kołysze przed twoimi oczami błyszczącym zegarkiem. Twoje powieki stają się ciężkie, zapadasz w sen, a po chwili na pstryknięcie palców robisz wszystko, co ci każe – szczekasz jak pies albo zdradzasz najgłębsze sekrety. Brzmi znajomo? Niestety, popkultura wyrządziła hipnozie ogromną krzywdę. Czas obalić mity, bo to, co nauka wie o hipnoterapii w 2026 roku, jest o wiele bardziej fascynujące niż jakakolwiek filmowa fikcja.
                  </p>
                  <p>
                    Największy mit? Hipnotyzer może przejąć kontrolę nad twoim umysłem. Prawda jest taka, że w stanie hipnozy <strong>nie zrobisz absolutnie niczego, czego nie zaakceptowałbyś w swoim zwyczajnym stanie świadomości</strong>. Nawet w najgłębszym transie twój system wartości pozostaje nienaruszony – gdyby ktoś zasugerował ci coś, co budzi twój wewnętrzny sprzeciw, natychmiast byś się wybudził. Nie jest to też wcale sen. To zawężony, ale niezwykle ostry stan hiperkoncentracji świadomości, w którym twój mózg operuje na falach alfa i theta. Paradoksalnie, na hipnozę wcale nie są podatne osoby "słabe psychicznie" czy naiwne. Wręcz przeciwnie – w trans najszybciej i najgłębiej zapadają osoby o ponadprzeciętnej wyobraźni i zdolności do silnej koncentracji.
                  </p>
                  <p>
                    Zastanawiasz się, po co w ogóle wchodzić w taki stan? Odpowiedzią jest potęga neuroplastyczności mózgu. W normalnym stanie nasz umysł chroni się tzw. filtrem krytycznym, który często blokuje pozytywne zmiany. Hipnoterapia omija ten filtr. Wyobraź sobie pacjentkę, która przez lata bezskutecznie walczyła z otyłością za pomocą restrykcyjnych diet. Dopiero hipnoza regresyjna – pozwalająca przywołać wspomnienia, o których świadomy umysł dawno "zapomniał" – ujawniła, że nadwaga była jedynie psychologiczną tarczą ochronną zbudowaną po wczesnodziecięcej traumie. Gdy podświadomość na nowo uczy się odróżniać autentyczny głód fizjologiczny od głodu emocjonalnego (jedzenia z powodu stresu, lęku czy nudy), waga spada całkowicie naturalnie, bez oporu silnej woli. To nie magia, to czysta nauka o restrukturyzacji ścieżek neuronowych.
                  </p>
                </div>
              </article>

              <article className="mb-16 bg-warm-800/30 p-8 md:p-10 rounded-2xl border border-warm-800">
                <h3 className="font-serif text-3xl text-warm-100 mb-6 leading-tight">
                  Prawo lustra i paradoks wysiłku. Zaskakujące mechanizmy naszej psychiki
                </h3>
                <div className="prose prose-lg prose-invert max-w-none text-warm-300 font-light leading-relaxed">
                  <p>
                    Ludzka psychika uwielbia płatać nam figle, a najskuteczniejsza psychoterapia często opiera się na zrozumieniu wewnętrznych paradoksów. Zastanawiałeś się kiedyś, dlaczego tak bardzo irytują cię określone cechy u innych ludzi? Dlaczego czyjaś arogancja, spóźnialstwo czy głośny śmiech doprowadzają cię do szału?
                  </p>
                  <p>
                    Psychologia określa to zjawisko bezlitośnie: im bardziej nienawidzisz jakiejś cechy u kogoś innego, tym większe jest prawdopodobieństwo, że w rzeczywistości unikasz konfrontacji z tą samą cechą u siebie. To tak zwane zjawisko projekcji. Widzimy w innych to, czego nie potrafimy zaakceptować we własnym wnętrzu. To jednak tylko początek fascynującej listy życiowych paradoksów.
                  </p>
                  <p>
                    Weźmy na przykład zaufanie. Badania i obserwacje kliniczne potwierdzają stary truizm: ludzie, którzy sami nie potrafią ufać innym, najczęściej sami nie są godni zaufania. Dlaczego? Ponieważ oceniają intencje świata przez pryzmat własnych, ukrytych motywacji. Kolejnym fascynującym zjawiskiem jest "paradoks wysiłku". Widzisz mistrza sportu, wybitnego mówcę lub genialnego artystę i myślisz: "Przychodzi mu to tak naturalnie, bez żadnego wysiłku". Prawda jest taka, że trzeba włożyć gigantyczny wysiłek i tysiące godzin brutalnej pracy, aby ostateczny efekt wydawał się lekki i niewymagający starań.
                  </p>
                  <p>
                    Zrozumienie tych mechanizmów w gabinecie psychoterapeutycznym działa uwalniająco. Przestajemy walczyć z wiatrakami. Odkrywamy, że im bardziej próbujemy zaimponować otoczeniu, tym mniejsze wrażenie robimy na ludziach. Zauważamy też w komunikacji "paradoks perswazji": najbardziej kłótliwe osoby rzadko kogoś przekonują; ci najbardziej wpływowi nie krzyczą – oni obserwują, słuchają i zadają pytania. Rozwój osobisty to nie ciągłe pasmo sukcesów, lecz uświadomienie sobie, że im więcej razy poniesiemy porażkę, tym większe mamy szanse na ostateczny triumf.
                  </p>
                </div>
              </article>

              <article className="bg-warm-800/30 p-8 md:p-10 rounded-2xl border border-warm-800">
                <h3 className="font-serif text-3xl text-warm-100 mb-6 leading-tight">
                  Smartfon, "cichy sabotażysta" mózgu i powrót do prawdy w erze AI
                </h3>
                <div className="prose prose-lg prose-invert max-w-none text-warm-300 font-light leading-relaxed">
                  <p>
                    Żyjemy w erze informacyjnego paradoksu. Jesteśmy w stałym, nieustannym kontakcie z całym światem, a jednocześnie statystyki dotyczące samotności, depresji i deficytów uwagi biją w 2026 roku niechlubne rekordy. Neuropsychologia kliniczna już dawno przestała traktować telefony jak niewinne narzędzia ułatwiające życie. Na wielu konferencjach naukowych smartfon bywa wprost określany mianem "cichego sabotażysty mózgu", ze względu na to, w jak radykalny sposób ingeruje on w nasze procesy uwagi, głębokiej pamięci i kontroli impulsów.
                  </p>
                  <p>
                    Do tego dołącza zjawisko, które specjaliści od technologii nazywają "AI Backlash" (bunt przeciwko AI). Ostatnie lata to zalew sieci masowo generowanymi tekstami, idealnymi, ale pustymi obrazami i sztucznymi odpowiedziami (tzw. "AI Slop"). Ludzka psychika jest jednak ewolucyjnie zaprogramowana na poszukiwanie autentyczności. Społeczeństwo jest tym po prostu przebodźcowane i potwornie zmęczone. Dziś to autentyczność, empatia i realny kontakt stają się najcenniejszym dobrem luksusowym.
                  </p>
                  <p>
                    Dlatego rola profesjonalnej psychoterapii i rzetelnej wiedzy jest dziś tak ogromna. W dobie iluzji wirtualnego świata, spotkanie ze specjalistą – stacjonarnie lub podczas starannie przygotowanej sesji online – stanowi bezpieczną przystań, "Zacisze Dobrych Myśli", wolne od algorytmów i ocen. Jeśli zmagasz się z prokrastynacją, kryzysem relacji czy przewlekłym stresem, pamiętaj, że diagnozy na tiktoku i porady ChatGPT to tylko cyfrowe złudzenie wsparcia. Prawdziwa zmiana zaczyna się tam, gdzie odkładamy na bok elektronikę, a naprzeciwko nas zasiada drugi, prawdziwy człowiek. To przestrzeń na budowanie więzi, której żaden cyfrowy asystent nigdy nie zastąpi.
                  </p>
                </div>
              </article>
            </section>

            {/* KATEGORIA 2: INTEGRACJA PSYCHODELICZNA */}
            <section>
              <h2 className="font-serif text-4xl text-coffee-400 border-b border-coffee-900/50 pb-4 mb-10 text-center tracking-wider">
                INTEGRACJA PSYCHODELICZNA
              </h2>
              
              <article className="bg-warm-800/30 p-8 md:p-10 rounded-2xl border border-warm-800">
                <h3 className="font-serif text-3xl text-warm-100 mb-6 leading-tight">
                  Powrót z Drugiej Strony. Dlaczego samo zażycie psychodelików nie leczy?
                </h3>
                <div className="prose prose-lg prose-invert max-w-none text-warm-300 font-light leading-relaxed">
                  <p>
                    Renesans psychodeliczny trwa w najlepsze. Setki artykułów zachwalają zbawienny wpływ na depresję lekooporną i PTSD, a kultura masowa ponownie zafascynowała się substancjami poszerzającymi świadomość. Ale psychologia stawia sprawę jasno: <strong>samo zażycie psychodeliku nie jest terapią</strong>. To tak, jakby samo wejście na szczyt góry miało uczynić cię alpinistą. Prawdziwa praca – i prawdziwe leczenie – zaczyna się dopiero po zejściu na ziemię. Zjawisko to nazywamy integracją.
                  </p>
                  <p>
                    Polskie Towarzystwo Integracji Psychodelicznej (PTIP), które w ostatnich latach uruchomiło darmowe grupy wsparcia w największych polskich miastach (od Warszawy, przez Białystok i Szczecin, aż po grupy online), alarmuje: doświadczenie poszerzonej świadomości może być wstrząsające. Użytkownik konfrontuje się z tłumionym latami bólem, przerażającymi wizjami z nieświadomości lub przeciwnie – z poczuciem kosmicznej jedności. Niezależnie od charakteru przeżycia, bez odpowiedniego przełożenia tego na język codzienności (narrację), doświadczenie to szybko wyblaknie lub wręcz stanie się zarzewiem lęku.
                  </p>
                  <p>
                    Integracja to proces, w którym pozornie abstrakcyjne wglądy i emocje są rozkodowywane. W profesjonalnym gabinecie często wykorzystuje się tu na przykład model IFS (System Wewnętrznej Rodziny), by zrozumieć zantagonizowane "części" naszej psychiki, które nagle doszły do głosu. Chodzi o to, by przeformułować opowieść pacjenta o traumie. Jeśli doświadczyłeś ataku paniki pod wpływem substancji (tzw. bad trip), specjalista pomoże ci zdekodować, z jakim wypartym lękiem z dzieciństwa próbowałaś się skonfrontować. Integracja to sztuka wyciągania mądrości z chaosu nieświadomości i przekuwania jej w zdrowe, trzeźwe nawyki w poniedziałkowy poranek.
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
                    Co byś powiedział, gdyby ktoś zaproponował ci podróż do najgłębszych zakamarków twojej podświadomości, dostęp do wypartych wspomnień, a nawet doświadczeń mistycznych – bez użycia jakichkolwiek substancji psychoaktywnych? Brzmi jak obietnica szamana, ale to naukowa metoda wywodząca się z psychologii transpersonalnej, stworzona w latach 70. przez psychiatrę, dr. Stanislava Grofa. Mowa o oddychaniu holotropowym.
                  </p>
                  <p>
                    Słowo "holotropowy" pochodzi z greki i oznacza "zmierzający ku całości". Grof odkrył, że odpowiednio zintensyfikowane, pogłębione i przyspieszone oddychanie, w połączeniu ze specyficzną, ewokatywną muzyką, prowadzi do aktywacji głębokiego, limbicznego systemu emocjonalnego. Zdejmuje ono blokady i filtry, które na co dzień chronią nasz umysł, ale też więzią w nim dawne traumy.
                  </p>
                  <p>
                    Doświadczenia podczas takich sesji (prowadzonych wyłącznie przez wykwalifikowanych facylitatorów) bywają wstrząsające. Uczestnicy mogą doświadczyć fizycznych wibracji, zmian temperatury, a nierzadko odzyskują wspomnienia z wczesnego dzieciństwa, a nawet... z własnych narodzin. Grof opracował teorię matryc perinatalnych, dowodząc, że bolesne przeżycia fizyczne i emocjonalne z momentu utknięcia w kanale rodnym zostają zakodowane w najgłębszych strukturach naszej psychiki. Doświadczenie tej traumy ponownie w bezpiecznych warunkach bywa opisywane przez pacjentów jako symboliczne "umieranie za życia". Prowadzi to do potężnego uwolnienia przewlekłych napięć w ciele i umyśle, przynosząc uczucie błogiego rozluźnienia i wewnętrznej harmonii. Ze względu na ekstremalną intensywność procesu, metoda ta ma jasne przeciwwskazania (m.in. ciąża, padaczka, astma, choroby układu krążenia), jednak dla wielu poszukujących głębokiej transformacji jest to jedno z najpotężniejszych narzędzi poznania samego siebie.
                  </p>
                </div>
              </article>
            </section>

            {/* KATEGORIA 4: CAT Cannabis Assisted Therapy */}
            <section>
              <h2 className="font-serif text-4xl text-coffee-400 border-b border-coffee-900/50 pb-4 mb-10 text-center tracking-wider">
                CAT CANNABIS ASSISTED THERAPY
              </h2>

              <article className="bg-warm-800/30 p-8 md:p-10 rounded-2xl border border-warm-800">
                <h3 className="font-serif text-3xl text-warm-100 mb-6 leading-tight">
                  Tarcza ochronna mózgu czy zagrożenie? Dwa oblicza medycznej marihuany w psychoterapii
                </h3>
                <div className="prose prose-lg prose-invert max-w-none text-warm-300 font-light leading-relaxed">
                  <p>
                    Przez dekady wmawiano nam, że marihuana bezpowrotnie niszczy pamięć i degeneruje komórki nerwowe. Tymczasem rok 2026 przyniósł wyniki badań, które wprawiły w osłupienie nawet doświadczonych neurologów i psychologów. Prawda o wpływie konopi na mózg okazała się niezwykle złożona i... mocno zależna od wieku.
                  </p>
                  <p>
                    Zacznijmy od odkryć, które budzą największe zdumienie: analiza danych z UK Biobank wykazała, że u pacjentów w średnim i starszym wieku (powyżej 40. roku życia) umiarkowany kontakt z konopiami może działać jak biologiczna tarcza. Użytkownicy konopi po czterdziestce często wykazują sprawniejsze umysły i większą objętość tkanki mózgowej w rejonach bogatych w receptory CB1 niż ich rówieśnicy, którzy nigdy nie mieli kontaktu z tą rośliną.
                  </p>
                  <p>
                    Zanim jednak uznamy to za cudowny lek na wszystko, nauka rzuca równie potężne ostrzeżenie. W przypadku osób młodych, których mózgi wciąż się rozwijają, ryzyko wystąpienia poważnych zaburzeń psychotycznych (w tym schizofrenii) jest drastycznie wyższe. Co więcej, potężne metaanalizy z 2026 roku wykazały, że wbrew powszechnym opiniom, sama marihuana często jest nieskuteczna w samodzielnym leczeniu depresji, a w stanach lękowych może te objawy wręcz nasilać.
                  </p>
                  <p>
                    Gdzie leży złoty środek? W innowacyjnych protokołach CAPT (Cannabis-Assisted Psychotherapy). Badania nad klinicznym wykorzystaniem konopi jako katalizatora dla terapii u osób z najcięższymi formami dysocjacyjnego PTSD przyniosły spektakularne rezultaty. W jednym z udokumentowanych przypadków pacjentka po 10 sesjach psychoterapii wspomaganej medyczną marihuaną zanotowała redukcję patologicznej dysocjacji aż o 98,5%, całkowicie wychodząc z kryteriów diagnostycznych D-PTSD. Konopie, podawane pod ścisłą kontrolą lekarza (np. w optymalnych, przeciwlękowych proporcjach CBD do THC wynoszących 4:1), nie są magiczną pigułką, ale mogą otwierać zamknięte drzwi do uleczenia najgłębszych traum.
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
