import React from 'react';
import { Award, FileCheck, GraduationCap, Globe } from 'lucide-react';

interface SectionProps {
  id?: string;
}

const logos = [
  { src: "/assets/Layer 1.png", alt: "Partner 1" },
  { src: "/assets/Layer 2.png", alt: "Partner 2" },
  { src: "/assets/Layer 3.png", alt: "Partner 3" },
  { src: "/assets/Layer 4.png", alt: "Partner 4" },
  { src: "/assets/Layer 5.png", alt: "Partner 5" },
];

const credentials = [
  {
    title: "Certyfikowana i Rekomendowana Hipnoterapeutka",
    org: "przez Profesjonalną Szkołę Hipnoterapii w Warszawie",
    desc: "Jestem Członkiem Renomowanej Organizacji Hipnoterapeutów - International Hypnosis Association ( IHA Certified Hypnotherapist ) ",
    icon: GraduationCap
  },
  {
    title: "Facilitator Certification Program",
    org: "Grof Transpersonal Training",
    desc: "Od 2024 r uczestniczę w programie „ Facilitator Certification Program”, gdzie doskonalę swoje umiejętności terapeutyczne w nurcie transpersonalnym i przygotowuję się do uzyskania certyfikacji facylitatora GTT",
    icon: Award
  },
  {
    title: "Studia Psychologiczne",
    org: "Akademia Humanistyczno- Ekonomiczna w Warszawie- w trakcie",
    desc: "   ",
    icon: FileCheck
  },
  {
    title: "Tripsitting & Integracja Psychodeliczna",
    org: "Psychedelic Guide Training - Lucid States Development Piotr Matejuk",
    desc: "Prowadzę sesje terapii psychodelicznej wspieranej medyczną marihuaną oraz sesje integracji psychodelicznej Metodą Mindfulness Based Psychodelic Therapy",
    icon: Globe
  }
];

const About: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="relative py-24 bg-warm-950 scroll-mt-20 overflow-hidden">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
           <h2 className="font-serif text-4xl md:text-5xl tracking-wide mb-6 text-warm-100">O Mnie</h2>
           <p className="font-sans text-warm-400 max-w-2xl mx-auto tracking-wider uppercase text-sm">Poznaj osobę stojącą za głosem</p>
        </div>

        <div className="flex flex-col md:flex-row gap-16 items-start mb-20">
           <div className="w-full md:w-5/12">
              <div className="aspect-[3/4] bg-warm-900 overflow-hidden shadow-2xl relative group sticky top-24">
                <div className="absolute inset-0 border border-white/10 z-10 m-4 transition-all duration-500 group-hover:m-0"></div>
                <img
                  src="/assets/aboutme.jpg"
                  alt="Agnieszka Kochanowska"
                  className="absolute inset-0 w-full h-full object-cover filter sepia-[0.2] contrast-100 brightness-90 group-hover:sepia-0 transition-all duration-1000 opacity-100"
                />
              </div>
           </div>
           <div className="w-full md:w-7/12 space-y-8">
              <h3 className="font-serif text-3xl text-coffee-300 italic">Moja Podróż</h3>
              <p className="text-warm-300 leading-relaxed font-light text-lg">
                Zawsze fascynowała mnie potęga ludzkiego umysłu. Moja przygoda z hipnoterapią rozpoczęła się ponad 6 lat temu, kiedy byłam świadkiem głębokich zmian, jakie może ona przynieść w życiu ludzi — zmian, na które tradycyjne terapie często potrzebowały lat.
              </p>
              <p className="text-warm-300 leading-relaxed font-light text-lg">
                Po intensywnym szkoleniu i certyfikacji w zaawansowanych technikach hipnoterapii, otworzyłam swoją praktykę z prostą misją: by wzmacniać innych w procesie samouzdrawiania. Wierzę, że każdy człowiek posiada klucz do własnego dobrostanu w swojej podświadomości.
              </p>

              <p className="text-warm-300 leading-relaxed font-light text-lg">
              Jestem Hipnoterapeutką w nurcie integratywnym. Moją pracę opieram na holistycznym podejściu, łączę różne narzędzia terapeutyczne: pracę z oddechem, ciałem, techniki wizualizacyjne oraz hipnozę terapeutyczną i rozwojową, która doskonale sprawdza się zarówno podczas sesji przygotowujących do podróży psychodelicznych, jak i podczas integracji.
              </p>
              
              <div className="py-8">
                <blockquote className="border-l-2 border-coffee-600 pl-8 italic text-warm-100 text-xl font-serif leading-relaxed">
                  "Przestrzeń świadomej przemiany. Hipnoterapia, oddech, integracja doświadczeń."
                </blockquote>
              </div>
           </div>
        </div>

        {/* Dedicated Credentials Section */}
        <div className="mb-20">
           <div className="flex items-center space-x-4 mb-10">
              <div className="h-px bg-warm-800 flex-grow"></div>
              <h3 className="font-serif text-2xl text-warm-200 uppercase tracking-widest text-center px-4">Kwalifikacje i Edukacja</h3>
              <div className="h-px bg-warm-800 flex-grow"></div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {credentials.map((cred, index) => (
                <div key={index} className="bg-warm-900/40 p-6 border border-warm-800/60 rounded-sm hover:border-coffee-700/50 transition-colors flex items-start space-x-4 group">
                    <div className="flex-shrink-0 bg-warm-950 p-3 rounded-full text-coffee-500 group-hover:text-coffee-400 border border-warm-800 group-hover:border-coffee-900 transition-colors">
                        <cred.icon size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                        <h4 className="text-warm-100 font-serif text-xl mb-1">{cred.title}</h4>
                        <p className="text-coffee-400 text-xs font-bold uppercase tracking-wider mb-2">{cred.org}</p>
                        <p className="text-warm-400 text-sm font-light leading-relaxed">{cred.desc}</p>
                    </div>
                </div>
              ))}
           </div>
        </div>

        {/* Logo Slider Section */}
        <div className="border-t border-warm-800 pt-16">
           <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-coffee-500 mb-10">       </p>
           <div className="relative w-full overflow-hidden group/slider">
              {/* Fade edges */}
              <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-warm-950 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-warm-950 to-transparent z-10 pointer-events-none"></div>
              
              <div className="flex animate-scroll w-max">
                 {[...logos, ...logos, ...logos].map((logo, index) => (
                    <div key={index} className="mx-6 md:mx-10 w-48 h-24 flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                       <img src={logo.src} alt={logo.alt} className="max-h-full max-w-full object-contain"/>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default About;