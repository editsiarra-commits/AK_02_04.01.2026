import React, { useState, useEffect } from 'react';
import { Quote, Share2, Check } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Elena R.",
    role: "Dyrektor Marketingu",
    content: "Byłam sceptyczna wobec hipnoterapii, ale ciepłe podejście Agnieszki natychmiast mnie uspokoiło. Po zaledwie trzech sesjach mój lęk przed wystąpieniami publicznymi całkowicie zniknął.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 2,
    name: "Marek T.",
    role: "Przedsiębiorca",
    content: "Sesja regresji do poprzednich wcieleń była otwierającym oczy doświadczeniem. Pomogła mi zrozumieć wzorce w moim życiu, których wcześniej nie potrafiłem wyjaśnić. Agnieszka to prawdziwa profesjonalistka.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80"
  },
  {
    id: 3,
    name: "Sara Jankowska",
    role: "Artystka",
    content: "Palenie było dla mnie podporą kreatywności, a przynajmniej tak mi się wydawało. Agnieszka pomogła mi zmienić to przekonanie. Nie tknęłam papierosa od 6 miesięcy, a moja sztuka nigdy nie była lepsza.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=988&q=80"
  },
  {
    id: 4,
    name: "Dawid C.",
    role: "Programista",
    content: "Przez lata zmagałem się z bezsennością. Techniki relaksacyjne i nagrania audio, które otrzymałem, zmieniły wszystko. W końcu przesypiam całe noce.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80"
  },
  {
    id: 5,
    name: "Ewa W.",
    role: "Nauczycielka",
    content: "Znalezienie równowagi w moim chaotycznym życiu wydawało się niemożliwe. Dzięki naszym sesjom odnalazłam spokojne centrum, do którego mogę wrócić, kiedy tylko potrzebuję. Gorąco polecam.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1064&q=80"
  }
];

const Testimonials: React.FC<{ id?: string }> = ({ id }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  useEffect(() => {
    // Auto-advance logic
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setCopiedId(null);
    }, 5000); // Increased slightly to give time to click button
    return () => clearInterval(interval);
  }, []);

  const handleCopy = (content: string, id: number) => {
    navigator.clipboard.writeText(`"${content}"`);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id={id} className="py-24 bg-warm-900 relative overflow-hidden scroll-mt-20 border-t border-warm-800">
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.05]"></div>
       
       {/* Decorative blob */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-coffee-900/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-warm-100 mb-6">Dobre Słowa</h2>
          <p className="text-warm-400 max-w-xl mx-auto text-lg font-light">
            Prawdziwe transformacje prawdziwych ludzi.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
            <div className="relative min-h-[450px] flex items-center justify-center">
                {testimonials.map((testimonial, index) => {
                    const isActive = index === currentIndex;
                    return (
                        <div 
                            key={testimonial.id}
                            className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ease-in-out px-4 ${
                                isActive ? 'opacity-100 translate-x-0 z-20' : 
                                index === (currentIndex + 1) % testimonials.length ? 'opacity-0 translate-x-8 z-10' : 
                                'opacity-0 -translate-x-8 z-10'
                            }`}
                        >
                            <div className="text-coffee-600 mb-6 transform scale-125">
                                <Quote size={40} className="fill-current opacity-30" />
                            </div>
                            
                            <blockquote className="text-center mb-6 max-w-2xl">
                                <p className="font-serif text-2xl md:text-3xl text-warm-200 leading-relaxed italic font-light">
                                    "{testimonial.content}"
                                </p>
                            </blockquote>

                            <button 
                                onClick={() => handleCopy(testimonial.content, testimonial.id)}
                                className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-coffee-500 hover:text-coffee-300 transition-colors mb-8 group py-2 px-4 rounded-full hover:bg-warm-950/50"
                                aria-label="Skopiuj cytat do schowka"
                            >
                                {copiedId === testimonial.id ? (
                                    <>
                                        <Check size={14} className="text-green-500" />
                                        <span className="text-green-500">Skopiowano</span>
                                    </>
                                ) : (
                                    <>
                                        <Share2 size={14} className="group-hover:scale-110 transition-transform" />
                                        <span>Udostępnij</span>
                                    </>
                                )}
                            </button>

                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 rounded-full overflow-hidden border border-coffee-700 mb-4 shadow-lg shadow-black/30">
                                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                                </div>
                                <h4 className="font-sans text-lg font-medium text-warm-100 uppercase tracking-widest">{testimonial.name}</h4>
                                <span className="text-coffee-500 text-xs font-bold uppercase tracking-wide mt-1">{testimonial.role}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
            
            {/* Indicators */}
            <div className="flex justify-center space-x-3 mt-4">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-1 rounded-full transition-all duration-500 ${index === currentIndex ? 'bg-coffee-600 w-8' : 'bg-warm-800 w-2 hover:bg-warm-700'}`}
                        aria-label={`Przejdź do opinii ${index + 1}`}
                    />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;