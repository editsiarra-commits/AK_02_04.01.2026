import { Brain, ChevronDown, Pause, Play, ShieldCheck, Sparkles, Volume2, VolumeX } from 'lucide-react';
import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import LazyLoad from '../components/LazyLoad';

const About = lazy(() => import('./About'));
const Contact = lazy(() => import('./Contact'));
const FAQ = lazy(() => import('./FAQ'));
const OfferSection = lazy(() => import('./Offer').then(module => ({ default: module.OfferSection })));
const Pricing = lazy(() => import('./Pricing'));
const Testimonials = lazy(() => import('./Testimonials'));

const Home: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      // Small delay to allow potential lazy loading to initiate
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
           element.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Retry logic in case component is not yet mounted
            const interval = setInterval(() => {
                const el = document.getElementById(location.state.scrollTo);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                    clearInterval(interval);
                }
            }, 100);
            
            // Clear interval after 3 seconds
            setTimeout(() => clearInterval(interval), 3000);
        }
      }, 100);
    }
  }, [location.state]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Attempt to play the video
      video.play().then(() => {
        // Autoplay started
        setIsPlaying(true);
      }).catch(error => {
        // Autoplay was prevented.
        console.error("Autoplay was prevented: ", error);
        setIsPlaying(false);
      });

      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);

      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);

      // Set initial state
      setIsPlaying(!video.paused);
      setIsMuted(video.muted);

      return () => {
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
      };
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      // The state will be updated by the event listeners
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <div className="absolute top-0 left-0 w-full h-full">
          <video
            ref={videoRef}
            className="w-full h-full object-cover opacity-80"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/assets/Video_background_00.mp4" type="video/mp4" />
            Twoja przeglądarka nie obsługuje znacznika wideo.
          </video>
          {/* Overlay - Darker for the warm dark grey theme */}
          <div className="absolute inset-0 bg-warm-900/60 backdrop-blur-[1px]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end items-center text-center px-4 max-w-4xl mx-auto pb-10">
          {/* Video Controls - Centered below buttons */}
          <div className="mb-4 flex space-x-4">
            <button
              onClick={togglePlay}
              className="group p-4 rounded-full bg-warm-950/40 border border-warm-200/20 backdrop-blur-md text-warm-200 hover:bg-coffee-600 hover:border-coffee-500 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-coffee-900/50 focus:outline-none focus:ring-2 focus:ring-coffee-400"
              aria-label={isPlaying ? "Zatrzymaj wideo" : "Odtwórz wideo"}
            >
              {isPlaying ? (
                <Pause size={20} strokeWidth={2} className="fill-current opacity-90" />
              ) : (
                <Play size={20} strokeWidth={2} className="fill-current opacity-90 ml-1" />
              )}
            </button>
            <button
              onClick={toggleMute}
              className="group p-4 rounded-full bg-warm-950/40 border border-warm-200/20 backdrop-blur-md text-warm-200 hover:bg-coffee-600 hover:border-coffee-500 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-coffee-900/50 focus:outline-none focus:ring-2 focus:ring-coffee-400"
              aria-label={isMuted ? "Włącz dźwięk" : "Wycisz"}
            >
              {isMuted ? (
                <VolumeX size={20} strokeWidth={2} className="opacity-90" />
              ) : (
                <Volume2 size={20} strokeWidth={2} className="opacity-90" />
              )}
            </button>
          </div>
          <span className="text-coffee-300 uppercase tracking-[0.3em] mb-6 text-sm md:text-base animate-fade-in-up font-medium" style={{ animationFillMode: 'both' }}>
            Certyfikowana Hipnoterapeutka
          </span>
          <h1
            className="font-serif text-5xl md:text-7xl text-warm-50 mb-8 leading-tight drop-shadow-2xl animate-fade-in-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
          >
            Przestrzeń Integracji  <br/> Świadomości <br/> i Rozwoju
          </h1>
          <p
            className="font-sans text-warm-200 text-lg md:text-xl max-w-2xl mb-12 font-light leading-relaxed tracking-wide animate-fade-in-up"
            style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
          >
            Zapraszam Cię do spotkania z Tym, co w Tobie jest źródłem Mocy <br/>  <br/> 
          </p>
          <div
            className="flex flex-col sm:flex-row gap-6 animate-fade-in-up"
            style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
          >
             <button
              onClick={scrollToAbout}
              className="px-10 py-4 bg-transparent border border-warm-200 text-warm-100 font-sans text-xs uppercase tracking-widest hover:bg-warm-200 hover:text-warm-900 transition-all duration-300"
            >
              Dowiedz się Więcej
            </button>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}}
              className="px-10 py-4 bg-coffee-700 text-white font-sans text-xs uppercase tracking-widest hover:bg-coffee-600 transition-all duration-300 shadow-2xl shadow-coffee-900/20"
            >
              Umów Konsultację
            </a>
          </div>
          
          <button
            onClick={scrollToAbout}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-warm-400 hover:text-white transition-colors animate-bounce"
            style={{ animationDelay: '1s' }}
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* Sections */}
      <Suspense fallback={<div>Loading...</div>}>
        <LazyLoad id="about">
          <About id="about" />
        </LazyLoad>
        <LazyLoad id="offer">
          <OfferSection id="offer" />
        </LazyLoad>

        <LazyLoad id="contact" forceVisible={location.state?.scrollTo === 'contact'}>
          <Contact id="contact" />
        </LazyLoad>

        {/* Why Hypnotherapy Section */}
        <section className="py-24 bg-warm-900 relative overflow-hidden border-t border-warm-800">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-coffee-600 to-transparent opacity-20"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-coffee-900/10 to-transparent pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <span className="text-coffee-400 font-sans text-xs font-bold uppercase tracking-[0.3em] mb-3 block">Zrozumienie Metody</span>
              <h2 className="font-serif text-4xl md:text-5xl text-warm-100 mb-6">Dlaczego Hipnoterapia?</h2>
              <p className="text-warm-300 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                Naukowo udowodniona ścieżka do przeprogramowania podświadomych wzorców i odblokowania Twojego prawdziwego potencjału.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {/* Card 1 */}
               <div className="bg-warm-950/50 p-8 rounded-sm border border-warm-800 hover:border-coffee-600 transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-coffee-900/20">
                  <Brain className="text-coffee-500 mb-6 group-hover:scale-110 transition-transform duration-300" size={40} strokeWidth={1.5} />
                  <h3 className="font-serif text-2xl text-warm-100 mb-4">Nurt Holistyczny</h3>
                  <p className="text-warm-400 font-light leading-relaxed">
                  W Nurcie Holistycznym korzystam z metod, które pozwalają dotrzeć głębiej niż sama rozmowa: łączę hipnoterapię, techniki oddechowe, pracę z ciałem i wizualizację. Takie podejście umożliwia dotarcie do źródła napięć, emocji i przekonań, które wpływają na nasze samopoczucie i życiowe wybory.
                  </p>
               </div>
               {/* Card 2 */}
               <div className="bg-warm-950/50 p-8 rounded-sm border border-warm-800 hover:border-coffee-600 transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-coffee-900/20">
                  <Sparkles className="text-coffee-500 mb-6 group-hover:scale-110 transition-transform duration-300" size={40} strokeWidth={1.5} />
                  <h3 className="font-serif text-2xl text-warm-100 mb-4">Nurt Integratywny</h3>
                  <p className="text-warm-400 font-light leading-relaxed">
                  W Nurcie Integratywnym nie ograniczam się do jednego sposobu pracy — dopasowuję metody do Ciebie i Twojego procesu. Czasem będzie to głęboka praca z podświadomością, czasem łagodna eksploracja poprzez ciało, oddech lub obraz. Zawsze w atmosferze bezpieczeństwa, uważności i zaufania.
                  </p>
               </div>
               {/* Card 3 */}
               <div className="bg-warm-950/50 p-8 rounded-sm border border-warm-800 hover:border-coffee-600 transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-coffee-900/20">
                  <ShieldCheck className="text-coffee-500 mb-6 group-hover:scale-110 transition-transform duration-300" size={40} strokeWidth={1.5} />
                  <h3 className="font-serif text-2xl text-warm-100 mb-4">Naturalne i Bezpieczne</h3>
                  <p className="text-warm-400 font-light leading-relaxed">
                  Celem mojej pracy jest wspieranie świadomej transformacji - takiej, w której odzyskujesz kontakt ze sobą, zaufanie do wewnętrznej mądrości i poczucie równowagi w życiu.
                  </p>
               </div>
            </div>

            {/* Quote/Stat */}
            <div className="mt-16 text-center">
               <div className="inline-block p-8 border-y border-warm-800 bg-warm-950/30 backdrop-blur-sm max-w-4xl">
                 <p className="font-serif text-xl md:text-2xl text-warm-200 italic leading-relaxed">
                   "Hipnoza ma 93% wskaźnik skuteczności po zaledwie 6 sesjach, w porównaniu do 38% skuteczności po 600 sesjach psychoanalizy."
                 </p>
                 <p className="text-coffee-400 text-xs font-bold uppercase tracking-widest mt-4">— American Health Magazine</p>
               </div>
            </div>
          </div>
        </section>

        <LazyLoad id="faq">
          <FAQ id="faq" />
        </LazyLoad>
        <LazyLoad id="testimonials">
          <Testimonials id="testimonials" />
        </LazyLoad>
        <LazyLoad id="pricing">
          <Pricing id="pricing" />
        </LazyLoad>
        
      </Suspense>
    </div>
  );
};

export default Home;
