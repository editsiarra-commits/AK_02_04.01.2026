import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Check, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface SectionProps {
  id?: string;
}

const Contact: React.FC<SectionProps> = ({ id }) => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    if (formRef.current) {
      // In EmailJS v4, we use the specific template parameters instead of sending the form directly
      // This is because the form inputs must match the exact variables in the EmailJS template
      const formData = new FormData(formRef.current);
      const templateParams: Record<string, unknown> = {
        user_name: formData.get('user_name'),
        user_email: formData.get('user_email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
        // Add specific recipient mappings if needed by your template
        reply_to: formData.get('user_email'),
        to_name: "Agnieszka" // Or whoever is receiving it
      };

      emailjs.send(
        'service_ysjbvlk',
        'template_xt849sr',
        templateParams,
        'URUpNfhAJLR9oGvKc'
      )
      .then((result) => {
          console.log('Email sent successfully:', result.text);
          setFormStatus('success');
      }, (error) => {
          console.error('Failed to send email:', error);
          setFormStatus('error');
      });
    }
  };

  return (
    <section id={id} className="relative py-24 bg-warm-950 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div className="space-y-10">
            <div>
               <h2 className="font-serif text-4xl text-warm-100 mb-6">Umów Konsultację</h2>
               <p className="text-warm-400 leading-relaxed text-lg font-light">
                 Gotowy, by rozpocząć swoją podróż? Masz pytania dotyczące procesu? Jestem tutaj, aby pomóc. Skontaktuj się za pomocą formularza lub poniższych danych.
               </p>
               <p className="text-warm-500 text-sm leading-relaxed mt-4 max-w-xl">
                 Prowadzę praktykę w <strong className="text-warm-400 font-medium">Białymstoku</strong> i{' '}
                 <strong className="text-warm-400 font-medium">Warszawie</strong>; możliwe są także sesje{' '}
                 <strong className="text-warm-400 font-medium">online</strong> (hipnoterapia, integracja psychodeliczna, sesje oddechowe, praca w nurcie CAT).
               </p>
            </div>

            <div className="space-y-8 pt-6">
               <div className="flex items-start space-x-6">
                 <div className="bg-coffee-900 p-4 rounded-xl text-coffee-400 border border-coffee-800">
                   <Phone size={24} />
                 </div>
                 <div>
                   <h3 className="font-serif text-xl text-warm-200">Telefon</h3>
                   <p className="text-warm-400">+48 537 537 277</p>
                   <p className="text-warm-500 text-sm mt-1">Pon-Pt, 9:00 - 18:00</p>
                 </div>
               </div>

               <div className="flex items-start space-x-6">
                 <div className="bg-coffee-900 p-4 rounded-xl text-coffee-400 border border-coffee-800">
                   <Mail size={24} />
                 </div>
                 <div>
                   <h3 className="font-serif text-xl text-warm-200">Email</h3>
                   <p className="text-warm-400">agnieszka_kochanowska@wp.pl</p>
                 </div>
               </div>

               <div className="flex items-start space-x-6">
                 <div className="bg-coffee-900 p-4 rounded-xl text-coffee-400 border border-coffee-800">
                   <MapPin size={24} />
                 </div>
                 <div>
                   <h3 className="font-serif text-xl text-warm-200">Gabinet</h3>
                   <p className="text-warm-400">Stacjonarnie: Białystok i Warszawa · online: cała Polska</p>
                 </div>
               </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-warm-800">
            {formStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 border border-green-200">
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
            ) : formStatus === 'error' ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-8">
                <div className="w-20 h-20 bg-red-100/10 rounded-full flex items-center justify-center text-red-500 border border-red-500/20">
                  <AlertCircle size={40} />
                </div>
                <h3 className="font-serif text-3xl text-warm-100">Błąd Wysyłania</h3>
                <p className="text-warm-400">Przepraszamy, nie udało się wysłać wiadomości. Spróbuj ponownie później lub skontaktuj się bezpośrednio przez email.</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-6 text-coffee-400 hover:text-coffee-300 underline"
                >
                  Spróbuj ponownie
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="user_name" className="block text-xs uppercase tracking-wider text-warm-400 mb-2">Imię</label>
                    <input 
                      type="text" 
                      id="user_name" 
                      name="user_name"
                      required
                      className="w-full px-4 py-3 bg-warm-900 border border-warm-800 rounded-xl text-warm-200 focus:outline-none focus:ring-1 focus:ring-coffee-400 focus:border-coffee-400 transition-all placeholder-warm-500"
                      placeholder="Twoje imię"
                    />
                  </div>
                  <div>
                    <label htmlFor="user_email" className="block text-xs uppercase tracking-wider text-warm-400 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="user_email" 
                      name="user_email"
                      required
                      className="w-full px-4 py-3 bg-warm-900 border border-warm-800 rounded-xl text-warm-200 focus:outline-none focus:ring-1 focus:ring-coffee-400 focus:border-coffee-400 transition-all placeholder-warm-500"
                      placeholder="twoj@email.com"
                    />
                  </div>
                </div>

                <div>
                   <label htmlFor="subject" className="block text-xs uppercase tracking-wider text-warm-400 mb-2">Temat</label>
                   <select 
                     id="subject"
                     name="subject"
                     className="w-full px-4 py-3 bg-warm-900 border border-warm-800 rounded-xl text-warm-200 focus:outline-none focus:ring-1 focus:ring-coffee-400 focus:border-coffee-400 transition-all"
                   >
                     <option value="Zapytanie Ogólne">Zapytanie Ogólne</option>
                     <option value="Umówienie Sesji">Umówienie Sesji</option>
                     <option value="Inne">Inne</option>
                   </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-wider text-warm-400 mb-2">Wiadomość</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-warm-900 border border-warm-800 rounded-xl text-warm-200 focus:outline-none focus:ring-1 focus:ring-coffee-400 focus:border-coffee-400 transition-all placeholder-warm-500"
                    placeholder="W czym mogę Ci pomóc?"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full py-4 bg-coffee-700 text-white font-sans uppercase tracking-widest hover:bg-coffee-600 transition-colors shadow-md flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed text-xs font-bold rounded-full"
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
