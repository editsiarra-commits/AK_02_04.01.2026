import React from 'react';
import { Check } from 'lucide-react';

interface SectionProps {
  id?: string;
}

const Pricing: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="relative py-24 bg-surface-100 scroll-mt-20 border-t border-surface-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <span className="text-coral-500 font-sans text-xs font-bold uppercase tracking-[0.3em] mb-3 block">Cennik</span>
        <h2 className="font-serif text-4xl md:text-5xl text-navy-900 mb-6">Inwestycja w Siebie</h2>
        <p className="text-gray-500 max-w-xl mx-auto text-lg font-light">Przejrzysty cennik Twojej drogi do dobrostanu.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Basic Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-surface-300 flex flex-col group hover:border-coral-300 hover:shadow-xl transition-all duration-300">
            <div className="p-8 text-center border-b border-surface-300">
              <h3 className="font-serif text-2xl text-navy-900">Pojedyncza Sesja</h3>
              <div className="mt-4 flex justify-center items-baseline">
                <span className="text-4xl font-bold text-navy-900">500 zł</span>
                <span className="ml-1 text-gray-400">/ sesja</span>
              </div>
              <p className="mt-4 text-xs uppercase tracking-wider text-gray-400">Eksploracja</p>
            </div>
            <div className="p-8 flex-1">
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600 text-sm">
                  <Check size={16} className="text-teal-500 mr-3 flex-shrink-0" /> Sesja 60-minutowa
                </li>
                <li className="flex items-center text-gray-600 text-sm">
                  <Check size={16} className="text-teal-500 mr-3 flex-shrink-0" /> Konsultacja wstępna
                </li>
                <li className="flex items-center text-gray-600 text-sm">
                  <Check size={16} className="text-teal-500 mr-3 flex-shrink-0" /> Spersonalizowany skrypt
                </li>
              </ul>
            </div>
            <div className="p-8 border-t border-surface-300">
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }} className="block w-full py-3 text-center border border-coral-500 text-coral-500 font-medium hover:bg-coral-500 hover:text-white transition-colors uppercase text-xs tracking-widest rounded-lg">
                Zarezerwuj
              </a>
            </div>
          </div>

          {/* Popular Card */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-coral-500 transform md:-translate-y-4 flex flex-col relative">
            <div className="absolute top-0 right-0 bg-coral-500 text-white text-[10px] font-bold px-4 py-1.5 uppercase tracking-wider rounded-bl-lg">Najpopularniejszy</div>
            <div className="p-8 text-center border-b border-surface-300">
              <h3 className="font-serif text-3xl text-navy-900">Transformacja</h3>
              <div className="mt-4 flex justify-center items-baseline">
                <span className="text-5xl font-bold text-navy-900">1400 zł</span>
                <span className="ml-1 text-gray-400">/ 3 sesje</span>
              </div>
              <p className="mt-4 text-xs uppercase tracking-wider text-coral-500 font-bold">Rekomendowane</p>
            </div>
            <div className="p-8 flex-1">
              <ul className="space-y-5">
                <li className="flex items-center text-gray-600 text-sm">
                  <Check size={16} className="text-teal-500 mr-3 flex-shrink-0" /> 3 x Sesja 60-minutowa
                </li>
                <li className="flex items-center text-gray-600 text-sm">
                  <Check size={16} className="text-teal-500 mr-3 flex-shrink-0" /> Pogłębiona analiza
                </li>
                <li className="flex items-center text-gray-600 text-sm">
                  <Check size={16} className="text-teal-500 mr-3 flex-shrink-0" /> Nagranie audio w cenie
                </li>
                <li className="flex items-center text-gray-600 text-sm">
                  <Check size={16} className="text-teal-500 mr-3 flex-shrink-0" /> Wsparcie mailowe
                </li>
              </ul>
            </div>
            <div className="p-8 border-t border-surface-300">
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }} className="block w-full py-4 text-center bg-coral-500 text-white font-medium hover:bg-coral-600 transition-colors uppercase text-xs tracking-widest shadow-lg rounded-lg">
                Rozpocznij
              </a>
            </div>
          </div>

          {/* Premium Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-surface-300 flex flex-col group hover:border-coral-300 hover:shadow-xl transition-all duration-300">
            <div className="p-8 text-center border-b border-surface-300">
              <h3 className="font-serif text-2xl text-navy-900">Głębokie Uzdrowienie</h3>
              <div className="mt-4 flex justify-center items-baseline">
                <span className="text-4xl font-bold text-navy-900">2000 zł</span>
                <span className="ml-1 text-gray-400">/ 5 sesji</span>
              </div>
              <p className="mt-4 text-xs uppercase tracking-wider text-gray-400">Kompleksowe</p>
            </div>
            <div className="p-8 flex-1">
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600 text-sm">
                  <Check size={16} className="text-teal-500 mr-3 flex-shrink-0" /> 5 x Sesja 60-minutowa
                </li>
                <li className="flex items-center text-gray-600 text-sm">
                  <Check size={16} className="text-teal-500 mr-3 flex-shrink-0" /> Pełna praca regresyjna
                </li>
                <li className="flex items-center text-gray-600 text-sm">
                  <Check size={16} className="text-teal-500 mr-3 flex-shrink-0" /> Trening autohipnozy
                </li>
                <li className="flex items-center text-gray-600 text-sm">
                  <Check size={16} className="text-teal-500 mr-3 flex-shrink-0" /> Priorytetowe terminy
                </li>
              </ul>
            </div>
            <div className="p-8 border-t border-surface-300">
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }} className="block w-full py-3 text-center border border-coral-500 text-coral-500 font-medium hover:bg-coral-500 hover:text-white transition-colors uppercase text-xs tracking-widest rounded-lg">
                Zarezerwuj
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;