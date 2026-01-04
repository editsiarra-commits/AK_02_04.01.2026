import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';

interface SectionProps {
  id?: string;
}

const Contact: React.FC<SectionProps> = ({ id }) => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <section id={id} className="relative py-24 bg-warm-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div className="space-y-10">
            <div>
               <h2 className="font-serif text-4xl text-warm-100 mb-6">Umów Konsultację</h2>
               <p className="text-warm-400 leading-relaxed text-lg font-light">
                 Gotowy, by rozpocząć swoją podróż? Masz pytania dotyczące procesu? Jestem tutaj, aby pomóc. Skontaktuj się za pomocą formularza lub poniższych danych.
               </p>
            </div>

            <div className="space-y-8 pt-6">
               <div className="flex items-start space-x-6">
                 <div className="bg-coffee-900 p-4 rounded-full text-coffee-400 border border-coffee-800">
                   <Phone size={24} />
                 </div>
                 <div>
                   <h3 className="font-serif text-xl text-warm-200">Telefon</h3>
                   <p className="text-warm-400">+48 537 537 277</p>
                   <p className="text-warm-600 text-sm mt-1">Pon-Pt, 9:00 - 18:00</p>
                 </div>
               </div>

               <div className="flex items-start space-x-6">
                 <div className="bg-coffee-900 p-4 rounded-full text-coffee-400 border border-coffee-800">
                   <Mail size={24} />
                 </div>
                 <div>
                   <h3 className="font-serif text-xl text-warm-200">Email</h3>
                   <p className="text-warm-400">agnieszka@hypno-therapy.example</p>
                 </div>
               </div>

               <div className="flex items-start space-x-6">
                 <div className="bg-coffee-900 p-4 rounded-full text-coffee-400 border border-coffee-800">
                   <MapPin size={24} />
                 </div>
                 <div>
                   <h3 className="font-serif text-xl text-warm-200">Gabinet</h3>
                   <p className="text-warm-400">ul. Spokojna 123, Lok. 4</p>
                   <p className="text-warm-400">Warszawa, Polska</p>
                 </div>
               </div>
            </div>
          </div>

          <div className="bg-warm-800 p-8 md:p-10 rounded shadow-xl border border-warm-700">
            {formStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                <div className="w-20 h-20 bg-green-900/30 rounded-full flex items-center justify-center text-green-500 border border-green-800">
                  <Check size={40} />
                </div>
                <h3 className="font-serif text-3xl text-warm-100">Wiadomość Wysłana!</h3>
                <p className="text-warm-400">Dziękuję za kontakt. Odpowiem w ciągu 24 godzin.</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-6 text-coffee-400 hover:text-coffee-300 underline"
                >
                  Wyślij kolejną wiadomość
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs uppercase tracking-wider text-warm-500 mb-2">Imię</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full px-4 py-3 bg-warm-900 border border-warm-700 rounded text-warm-200 focus:outline-none focus:ring-1 focus:ring-coffee-500 focus:border-coffee-500 transition-all placeholder-warm-700"
                      placeholder="Twoje imię"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-wider text-warm-500 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full px-4 py-3 bg-warm-900 border border-warm-700 rounded text-warm-200 focus:outline-none focus:ring-1 focus:ring-coffee-500 focus:border-coffee-500 transition-all placeholder-warm-700"
                      placeholder="twoj@email.com"
                    />
                  </div>
                </div>

                <div>
                   <label htmlFor="subject" className="block text-xs uppercase tracking-wider text-warm-500 mb-2">Temat</label>
                   <select 
                     id="subject"
                     className="w-full px-4 py-3 bg-warm-900 border border-warm-700 rounded text-warm-200 focus:outline-none focus:ring-1 focus:ring-coffee-500 focus:border-coffee-500 transition-all"
                   >
                     <option>Zapytanie Ogólne</option>
                     <option>Umówienie Sesji</option>
                     <option>Pytanie o Cennik</option>
                     <option>Inne</option>
                   </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-wider text-warm-500 mb-2">Wiadomość</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-warm-900 border border-warm-700 rounded text-warm-200 focus:outline-none focus:ring-1 focus:ring-coffee-500 focus:border-coffee-500 transition-all placeholder-warm-700"
                    placeholder="W czym mogę Ci pomóc?"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full py-4 bg-coffee-700 text-white font-sans uppercase tracking-widest hover:bg-coffee-600 transition-colors shadow-md flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed text-xs font-bold"
                >
                  {formStatus === 'submitting' ? (
                    <span>Wysyłanie...</span>
                  ) : (
                    <>
                      <span>Wyślij Wiadomość</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;