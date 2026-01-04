import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Jakie to uczucie być w hipnozie?",
    answer: "Hipnoza przypomina stan marzeń na jawie lub moment tuż przed zaśnięciem. Jesteś fizycznie zrelaksowany, ale mentalnie czujny. To przyjemny, naturalny stan skupionej uwagi, w którym świat zewnętrzny schodzi na dalszy plan."
  },
  {
    question: "Czy stracę kontrolę podczas sesji?",
    answer: "Absolutnie nie. Przez cały czas zachowujesz pełną kontrolę. Nie można zmusić Cię do zrobienia czegokolwiek wbrew Twojej woli, wartościom czy moralności. Hipnoza to proces współpracy, w którym ja Cię prowadzę, ale to Ty decydujesz się podążać."
  },
  {
    question: "Ile sesji będę potrzebować?",
    answer: "To zależy od osoby i problemu. Niektóre nawyki, jak palenie, często można rozwiązać podczas jednej sesji. Głębsze problemy, takie jak lęk, trauma czy budowanie pewności siebie, zazwyczaj wymagają od 3 do 6 sesji dla trwałej, wzmocnionej zmiany."
  },
  {
    question: "Czy hipnoterapia online jest tak samo skuteczna jak osobista?",
    answer: "Tak, hipnoterapia online jest tak samo skuteczna jak sesje osobiste. W rzeczywistości wielu klientów woli ją, ponieważ mogą zrelaksować się głębiej w komforcie i bezpieczeństwie własnego domu, co może nawet wzmocnić rezultaty."
  },
  {
    question: "Co się stanie, jeśli się nie obudzę?",
    answer: "Nie można 'utknąć' w hipnozie. Ponieważ jest to naturalny stan podobny do snu lub głębokiego skupienia, gdyby sesja nagle się zakończyła (np. utrata połączenia internetowego), po prostu zapadłbyś w naturalny sen lub ocknął się i otworzył oczy."
  }
];

interface FAQProps {
  id?: string;
}

const FAQ: React.FC<FAQProps> = ({ id }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id={id} className="py-24 bg-warm-950 border-t border-warm-800 relative scroll-mt-20">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]"></div>
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-coffee-400 font-sans text-xs font-bold uppercase tracking-[0.3em] mb-3 block">Wyjaśnienie</span>
          <h2 className="font-serif text-4xl md:text-5xl text-warm-100 mb-6">Często Zadawane Pytania</h2>
          <p className="text-warm-400 font-light">Wszystko, co musisz wiedzieć, zanim zaczniemy.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border transition-all duration-300 rounded-sm overflow-hidden ${
                openIndex === index 
                  ? 'border-coffee-600 bg-warm-900/50 shadow-lg shadow-black/20' 
                  : 'border-warm-800 bg-warm-900/20 hover:border-warm-700 hover:bg-warm-900/40'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                aria-expanded={openIndex === index}
              >
                <span className={`font-serif text-lg md:text-xl transition-colors pr-4 ${
                  openIndex === index ? 'text-coffee-300' : 'text-warm-200'
                }`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 p-1 rounded-full border transition-all duration-300 ${
                   openIndex === index ? 'border-coffee-500 text-coffee-500 rotate-180 bg-coffee-950/30' : 'border-warm-700 text-warm-500'
                }`}>
                  {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-warm-400 font-light leading-relaxed border-t border-warm-800/50 pt-4 mt-2 mx-6">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;