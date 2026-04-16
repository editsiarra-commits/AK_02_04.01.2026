import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

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
  },
  {
    id: 6,
    name: "Kasia S.",
    role: "Studentka",
    content: "Przez długi czas bałam się wychodzić sama z domu, bo od razu miałam mega stres. Czułam się przez to strasznie ograniczona. Dzięki sesjom hipnozy zaczęłam lepiej rozumieć, co się ze mną dzieje, i powoli odzyskiwać odwagę. Nadal jestem w procesie, ale już widzę dużą zmianę.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80"
  },
  {
    id: 7,
    name: "Damian O.",
    role: "Twórca internetowy",
    content: "Do Agnieszki trafiłem, kiedy byłem już mocno przeciążony. Źle spałem, byłem cały czas spięty i coraz bardziej zmęczony wszystkim. Dzięki tej pracy zacząłem lepiej rozumieć, co się ze mną dzieje, a pogłębiona praca z oddechem dużo mi pokazała i dała dużą ulgę. Po wizytach u Agnieszki naprawdę czuję się lepiej. Cieszę się, że właśnie do niej trafiłem.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80"
  },
  {
    id: 8,
    name: "Marta M.",
    role: "Dyrektor Marketingu",
    content: "Przyszłam do Agnieszki po rozstaniu, z którym pozornie sobie radziłam, ale dalej w tym tkwiłam. Hipnozy pomogły mi przejść przez ten ból i wrócić do siebie. Dzisiaj czuję, że buduję swoje życie od nowa.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1064&q=80"
  }
];

const Testimonials: React.FC<{ id?: string }> = ({ id }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const activeTestimonial = testimonials[currentIndex];

  return (
    <section id={id} className="py-16 md:py-20 bg-warm-950 relative overflow-hidden scroll-mt-20 border-t border-warm-800">
      <div className="pointer-events-none absolute -left-20 top-24 h-72 w-72 rounded-full bg-coffee-600/15 blur-[80px]" />
      <div className="pointer-events-none absolute -right-16 bottom-20 h-64 w-64 rounded-full bg-warm-800/40 blur-[70px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center md:mb-12">
          <p className="mb-2 font-sans text-xs font-bold uppercase tracking-[0.35em] text-coffee-400">
            Opinie · {testimonials.length} historii
          </p>
          <h2 className="mb-4 font-serif text-4xl text-warm-100 md:text-5xl">Dobre Słowa</h2>
          <p className="mx-auto max-w-xl text-base font-light text-warm-400 md:text-lg">
            Prawdziwe transformacje prawdziwych ludzi.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border border-warm-800/90 bg-gradient-to-br from-warm-900/90 via-warm-950/95 to-warm-950 p-6 shadow-2xl shadow-black/25 md:p-9 lg:p-10">
              <div className="pointer-events-none absolute -right-8 -top-12 font-serif text-[10rem] leading-none text-coffee-400/[0.07] select-none md:text-[12rem]">
                "
              </div>
              <div className="pointer-events-none absolute bottom-0 right-0 h-40 w-40 rounded-tl-[100%] bg-coffee-500/10" />

              <div key={currentIndex} className="relative flex flex-col">
                <div className="mb-3 flex items-start gap-4 md:mb-4">
                  <div className="text-coffee-400 opacity-90">
                    <Quote size={36} className="fill-current opacity-40 md:h-10 md:w-10" />
                  </div>
                  <div className="min-w-0 flex-1 pt-0.5">
                    <blockquote className="text-left">
                      <p className="font-serif text-[0.99rem] font-light italic leading-relaxed text-warm-100 md:text-[1.2375rem] md:leading-relaxed">
                        <span className="text-coffee-400/80">"</span>
                        {activeTestimonial.content}
                        <span className="text-coffee-400/80">"</span>
                      </p>
                    </blockquote>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 border-t border-warm-800/70 pt-4 md:gap-5">
                  <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-coffee-400 shadow-md md:h-16 md:w-16">
                    <img
                      src={activeTestimonial.image}
                      alt={activeTestimonial.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-sans text-base font-medium uppercase tracking-widest text-warm-100 md:text-lg">
                      {activeTestimonial.name}
                    </h4>
                    <p className="mt-0.5 font-sans text-[11px] font-bold uppercase tracking-wide text-coffee-400 md:text-xs">
                      {activeTestimonial.role}
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative mt-5 flex justify-center gap-2 border-t border-warm-800/60 pt-4 md:mt-6 md:pt-5">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentIndex(index)}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      index === currentIndex ? 'w-8 bg-coffee-400' : 'w-2 bg-warm-800 hover:bg-warm-700'
                    }`}
                    aria-label={`Przejdź do opinii ${index + 1}`}
                  />
                ))}
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
