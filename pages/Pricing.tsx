import React from 'react';
import { Check } from 'lucide-react';

interface SectionProps {
  id?: string;
}

const Pricing: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="relative py-24 bg-warm-950 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="font-serif text-4xl md:text-5xl text-warm-100 mb-6">Inwestycja w Twoją zmianę</h2>
        <p className="text-warm-400 max-w-xl mx-auto text-lg font-light">Przed dokonaniem jakiejkolwiek płatności zapraszam Cię na bezpłatną, 15-minutową konsultację telefoniczną.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Basic Card */}
          <div className="bg-warm-900 rounded shadow-lg overflow-hidden border border-warm-800 flex flex-col group hover:border-coffee-700 transition-all duration-300">
            <div className="p-8 text-center border-b border-warm-800 bg-warm-900/50">
              <h3 className="font-serif text-2xl text-warm-200">To spokojna przestrzeń, w której wspólnie:</h3>
              <div className="mt-4 flex justify-center items-baseline">
                <span className="text-4xl font-bold text-warm-100">500 zł</span>
                <span className="ml-1 text-warm-500">/ sesja</span>
              </div>
              <p className="mt-4 text-xs uppercase tracking-wider text-warm-500">Eksploracja</p>
            </div>
            <div className="p-8 flex-1 bg-warm-900/30">
              <ul className="space-y-4">
                <li className="flex items-center text-warm-300 text-sm">
                  <Check size={16} className="text-coffee-500 mr-3" /> Sesja 60-minutowa
                </li>
                <li className="flex items-center text-warm-300 text-sm">
                  <Check size={16} className="text-coffee-500 mr-3" /> Konsultacja wstępna
                </li>
                <li className="flex items-center text-warm-300 text-sm">
                  <Check size={16} className="text-coffee-500 mr-3" /> Spersonalizowany skrypt
                </li>
              </ul>
            </div>
            <div className="p-8 bg-warm-900/50 border-t border-warm-800">
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }} className="block w-full py-3 text-center border border-coffee-800 text-coffee-400 font-medium hover:bg-coffee-800 hover:text-white transition-colors uppercase text-xs tracking-widest">
                Zarezerwuj
              </a>
            </div>
          </div>



          {/* Basic Card */}
          <div className="bg-warm-900 rounded shadow-lg overflow-hidden border border-warm-800 flex flex-col group hover:border-coffee-700 transition-all duration-300">
            <div className="p-8 text-center border-b border-warm-800 bg-warm-900/50">
              <h3 className="font-serif text-2xl text-warm-200">To spokojna przestrzeń, w której wspólnie:</h3>
              <div className="mt-4 flex justify-center items-baseline">
                <span className="text-4xl font-bold text-warm-100">500 zł</span>
                <span className="ml-1 text-warm-500">/ sesja</span>
              </div>
              <p className="mt-4 text-xs uppercase tracking-wider text-warm-500">Eksploracja</p>
            </div>
            <div className="p-8 flex-1 bg-warm-900/30">
              <ul className="space-y-4">
                <li className="flex items-center text-warm-300 text-sm">
                  <Check size={16} className="text-coffee-500 mr-3" /> Sesja 60-minutowa
                </li>
                <li className="flex items-center text-warm-300 text-sm">
                  <Check size={16} className="text-coffee-500 mr-3" /> Konsultacja wstępna
                </li>
                <li className="flex items-center text-warm-300 text-sm">
                  <Check size={16} className="text-coffee-500 mr-3" /> Spersonalizowany skrypt
                </li>
              </ul>
            </div>
            <div className="p-8 bg-warm-900/50 border-t border-warm-800">
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }} className="block w-full py-3 text-center border border-coffee-800 text-coffee-400 font-medium hover:bg-coffee-800 hover:text-white transition-colors uppercase text-xs tracking-widest">
                Zarezerwuj
              </a>
            </div>
          </div>



          {/* Basic Card */}
          <div className="bg-warm-900 rounded shadow-lg overflow-hidden border border-warm-800 flex flex-col group hover:border-coffee-700 transition-all duration-300">
            <div className="p-8 text-center border-b border-warm-800 bg-warm-900/50">
              <h3 className="font-serif text-2xl text-warm-200">To spokojna przestrzeń, w której wspólnie:</h3>
              <div className="mt-4 flex justify-center items-baseline">
                <span className="text-4xl font-bold text-warm-100">500 zł</span>
                <span className="ml-1 text-warm-500">/ sesja</span>
              </div>
              <p className="mt-4 text-xs uppercase tracking-wider text-warm-500">Eksploracja</p>
            </div>
            <div className="p-8 flex-1 bg-warm-900/30">
              <ul className="space-y-4">
                <li className="flex items-center text-warm-300 text-sm">
                  <Check size={16} className="text-coffee-500 mr-3" /> Sesja 60-minutowa
                </li>
                <li className="flex items-center text-warm-300 text-sm">
                  <Check size={16} className="text-coffee-500 mr-3" /> Konsultacja wstępna
                </li>
                <li className="flex items-center text-warm-300 text-sm">
                  <Check size={16} className="text-coffee-500 mr-3" /> Spersonalizowany skrypt
                </li>
              </ul>
            </div>
            <div className="p-8 bg-warm-900/50 border-t border-warm-800">
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }} className="block w-full py-3 text-center border border-coffee-800 text-coffee-400 font-medium hover:bg-coffee-800 hover:text-white transition-colors uppercase text-xs tracking-widest">
                Zarezerwuj
              </a>
            </div>
          </div>





          {/* Popular Card */}
          <div className="bg-warm-800 rounded shadow-2xl overflow-hidden border border-coffee-800 transform md:-translate-y-4 flex flex-col relative">
            <div className="absolute top-0 right-0 bg-coffee-600 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider">Najpopularniejszy</div>
            <div className="p-8 text-center border-b border-warm-700 bg-warm-800">
              <h3 className="font-serif text-3xl text-coffee-200">Transformacja</h3>
              <div className="mt-4 flex justify-center items-baseline">
                <span className="text-5xl font-bold text-white">1400 zł</span>
                <span className="ml-1 text-warm-400">/ 3 sesje</span>
              </div>
              <p className="mt-4 text-xs uppercase tracking-wider text-coffee-400">Rekomendowane</p>
            </div>
            <div className="p-8 flex-1">
              <ul className="space-y-5">
                <li className="flex items-center text-warm-200 text-sm">
                  <Check size={16} className="text-coffee-400 mr-3" /> 3 x Sesja 60-minutowa
                </li>
                <li className="flex items-center text-warm-200 text-sm">
                  <Check size={16} className="text-coffee-400 mr-3" /> Pogłębiona analiza
                </li>
                <li className="flex items-center text-warm-200 text-sm">
                  <Check size={16} className="text-coffee-400 mr-3" /> Nagranie audio w cenie
                </li>
                <li className="flex items-center text-warm-200 text-sm">
                  <Check size={16} className="text-coffee-400 mr-3" /> Wsparcie mailowe
                </li>
              </ul>
            </div>
            <div className="p-8 bg-warm-800 border-t border-warm-700">
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }} className="block w-full py-4 text-center bg-coffee-700 text-white font-medium hover:bg-coffee-600 transition-colors uppercase text-xs tracking-widest shadow-lg">
                Rozpocznij
              </a>
            </div>
          </div>



          {/* Popular Card */}
          <div className="bg-warm-800 rounded shadow-2xl overflow-hidden border border-coffee-800 transform md:-translate-y-4 flex flex-col relative">
            <div className="absolute top-0 right-0 bg-coffee-600 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider">Najpopularniejszy</div>
            <div className="p-8 text-center border-b border-warm-700 bg-warm-800">
              <h3 className="font-serif text-3xl text-coffee-200">Transformacja</h3>
              <div className="mt-4 flex justify-center items-baseline">
                <span className="text-5xl font-bold text-white">1400 zł</span>
                <span className="ml-1 text-warm-400">/ 3 sesje</span>
              </div>
              <p className="mt-4 text-xs uppercase tracking-wider text-coffee-400">Rekomendowane</p>
            </div>
            <div className="p-8 flex-1">
              <ul className="space-y-5">
                <li className="flex items-center text-warm-200 text-sm">
                  <Check size={16} className="text-coffee-400 mr-3" /> 3 x Sesja 60-minutowa
                </li>
                <li className="flex items-center text-warm-200 text-sm">
                  <Check size={16} className="text-coffee-400 mr-3" /> Pogłębiona analiza
                </li>
                <li className="flex items-center text-warm-200 text-sm">
                  <Check size={16} className="text-coffee-400 mr-3" /> Nagranie audio w cenie
                </li>
                <li className="flex items-center text-warm-200 text-sm">
                  <Check size={16} className="text-coffee-400 mr-3" /> Wsparcie mailowe
                </li>
              </ul>
            </div>
            <div className="p-8 bg-warm-800 border-t border-warm-700">
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }} className="block w-full py-4 text-center bg-coffee-700 text-white font-medium hover:bg-coffee-600 transition-colors uppercase text-xs tracking-widest shadow-lg">
                Rozpocznij
              </a>
            </div>
          </div>




          {/* Popular Card */}
          <div className="bg-warm-800 rounded shadow-2xl overflow-hidden border border-coffee-800 transform md:-translate-y-4 flex flex-col relative">
            <div className="absolute top-0 right-0 bg-coffee-600 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider">Najpopularniejszy</div>
            <div className="p-8 text-center border-b border-warm-700 bg-warm-800">
              <h3 className="font-serif text-3xl text-coffee-200">Transformacja</h3>
              <div className="mt-4 flex justify-center items-baseline">
                <span className="text-5xl font-bold text-white">1400 zł</span>
                <span className="ml-1 text-warm-400">/ 3 sesje</span>
              </div>
              <p className="mt-4 text-xs uppercase tracking-wider text-coffee-400">Rekomendowane</p>
            </div>
            <div className="p-8 flex-1">
              <ul className="space-y-5">
                <li className="flex items-center text-warm-200 text-sm">
                  <Check size={16} className="text-coffee-400 mr-3" /> 3 x Sesja 60-minutowa
                </li>
                <li className="flex items-center text-warm-200 text-sm">
                  <Check size={16} className="text-coffee-400 mr-3" /> Pogłębiona analiza
                </li>
                <li className="flex items-center text-warm-200 text-sm">
                  <Check size={16} className="text-coffee-400 mr-3" /> Nagranie audio w cenie
                </li>
                <li className="flex items-center text-warm-200 text-sm">
                  <Check size={16} className="text-coffee-400 mr-3" /> Wsparcie mailowe
                </li>
              </ul>
            </div>
            <div className="p-8 bg-warm-800 border-t border-warm-700">
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }} className="block w-full py-4 text-center bg-coffee-700 text-white font-medium hover:bg-coffee-600 transition-colors uppercase text-xs tracking-widest shadow-lg">
                Rozpocznij
              </a>
            </div>
          </div>




          {/* Premium Card */}
          <div className="bg-warm-900 rounded shadow-lg overflow-hidden border border-warm-800 flex flex-col group hover:border-coffee-700 transition-all duration-300">
            <div className="p-8 text-center border-b border-warm-800 bg-warm-900/50">
              <h3 className="font-serif text-2xl text-warm-200">Głębokie Uzdrowienie</h3>
              <div className="mt-4 flex justify-center items-baseline">
                <span className="text-4xl font-bold text-warm-100">2000 zł</span>
                <span className="ml-1 text-warm-500">/ 5 sesji</span>
              </div>
              <p className="mt-4 text-xs uppercase tracking-wider text-warm-500">Kompleksowe</p>
            </div>
            <div className="p-8 flex-1 bg-warm-900/30">
              <ul className="space-y-4">
                <li className="flex items-center text-warm-300 text-sm">
                  <Check size={16} className="text-coffee-500 mr-3" /> 5 x Sesja 60-minutowa
                </li>
                <li className="flex items-center text-warm-300 text-sm">
                  <Check size={16} className="text-coffee-500 mr-3" /> Pełna praca regresyjna
                </li>
                <li className="flex items-center text-warm-300 text-sm">
                  <Check size={16} className="text-coffee-500 mr-3" /> Trening autohipnozy
                </li>
                <li className="flex items-center text-warm-300 text-sm">
                  <Check size={16} className="text-coffee-500 mr-3" /> Priorytetowe terminy
                </li>
              </ul>
            </div>

            <div className="p-8 bg-warm-900/50 border-t border-warm-800">
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }} className="block w-full py-3 text-center border border-coffee-800 text-coffee-400 font-medium hover:bg-coffee-800 hover:text-white transition-colors uppercase text-xs tracking-widest">
                Zarezerwuj
              </a>
            </div>
          </div>


          {/* Premium Card */}
          <div className="bg-warm-900 rounded shadow-lg overflow-hidden border border-warm-800 flex flex-col group hover:border-coffee-700 transition-all duration-300">
            <div className="p-8 text-center border-b border-warm-800 bg-warm-900/50">
              <h3 className="font-serif text-2xl text-warm-200">Głębokie Uzdrowienie</h3>
              <div className="mt-4 flex justify-center items-baseline">
                <span className="text-4xl font-bold text-warm-100">2000 zł</span>
                <span className="ml-1 text-warm-500">/ 5 sesji</span>
              </div>
              <p className="mt-4 text-xs uppercase tracking-wider text-warm-500">Kompleksowe</p>
            </div>
            <div className="p-8 flex-1 bg-warm-900/30">
              <ul className="space-y-4">
                <li className="flex items-center text-warm-300 text-sm">
                  <Check size={16} className="text-coffee-500 mr-3" /> 5 x Sesja 60-minutowa
                </li>
                <li className="flex items-center text-warm-300 text-sm">
                  <Check size={16} className="text-coffee-500 mr-3" /> Pełna praca regresyjna
                </li>
                <li className="flex items-center text-warm-300 text-sm">
                  <Check size={16} className="text-coffee-500 mr-3" /> Trening autohipnozy
                </li>
                <li className="flex items-center text-warm-300 text-sm">
                  <Check size={16} className="text-coffee-500 mr-3" /> Priorytetowe terminy
                </li>
              </ul>
            </div>

            <div className="p-8 bg-warm-900/50 border-t border-warm-800">
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }} className="block w-full py-3 text-center border border-coffee-800 text-coffee-400 font-medium hover:bg-coffee-800 hover:text-white transition-colors uppercase text-xs tracking-widest">
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