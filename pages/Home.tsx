import { Brain, ChevronDown, Pause, Play, ShieldCheck, Sparkles, Volume2, VolumeX } from 'lucide-react';
import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  // Determine the target section from state or hash
  const scrollToSection = location.state?.scrollTo || (location.hash ? location.hash.substring(1) : null);

  useEffect(() => {
    if (scrollToSection) {
      const timer = setTimeout(() => {
        const element = document.getElementById(scrollToSection);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });

          if (location.state?.scrollTo) {
            navigate(location.pathname, { replace: true, state: {} });
          }
        } else {
          let attempts = 0;
          const interval = setInterval(() => {
            const el = document.getElementById(scrollToSection);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
              clearInterval(interval);
              if (location.state?.scrollTo) {
                navigate(location.pathname, { replace: true, state: {} });
              }
            }
            attempts++;
            if (attempts > 20) clearInterval(interval);
          }, 100);
        }
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [scrollToSection, location.state, location.pathname, navigate]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().then(() => {
        setIsPlaying(true);
      }).catch(error => {
        console.error("Autoplay was prevented: ", error);
        setIsPlaying(false);
      });

      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);

      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);

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
      {/* Hero Section — stays dark/immersive */}
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
          {/* Dark overlay for hero readability */}
          <div className="absolute inset-0 bg-navy-900/60 backdrop-blur-[1px]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end items-center text-center px-4 max-w-4xl mx-auto pb-10">

          <span className="text-coral-300 uppercase tracking-[0.3em] mb-6 text-sm md:text-base animate-fade-in-up font-medium" style={{ animationFillMode: 'both' }}>
            Certyfikowana Hipnoterapeutka
          </span>
          <h1
            className="font-serif text-5xl md:text-7xl text-white mb-8 leading-tight drop-shadow-2xl animate-fade-in-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
          >
            Przestrzeń Integracji  <br /> Świadomości <br /> i Rozwoju
          </h1>
          <p
            className="font-sans text-gray-200 text-lg md:text-xl max-w-2xl mb-4 font-light leading-relaxed tracking-wide animate-fade-in-up"
            style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
          >
            Zapraszam Cię do spotkania z Tym, co w Tobie jest źródłem Mocy <br />  <br />
          </p>

          {/* Video Controls */}
          <div className="mb-8 flex space-x-2 animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
            <button
              onClick={togglePlay}
              className="group p-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white hover:bg-coral-500 hover:border-coral-500 transition-all duration-300 hover:scale-110 shadow-lg focus:outline-none focus:ring-2 focus:ring-coral-400"
              aria-label={isPlaying ? "Zatrzymaj wideo" : "Odtwórz wideo"}
            >
              {isPlaying ? (
                <Pause size={10} strokeWidth={2} className="fill-current opacity-90" />
              ) : (
                <Play size={10} strokeWidth={2} className="fill-current opacity-90 ml-0.5" />
              )}
            </button>
            <button
              onClick={toggleMute}
              className="group p-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white hover:bg-coral-500 hover:border-coral-500 transition-all duration-300 hover:scale-110 shadow-lg focus:outline-none focus:ring-2 focus:ring-coral-400"
              aria-label={isMuted ? "Włącz dźwięk" : "Wycisz"}
            >
              {isMuted ? (
                <VolumeX size={10} strokeWidth={2} className="opacity-90" />
              ) : (
                <Volume2 size={10} strokeWidth={2} className="opacity-90" />
              )}
            </button>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-6 animate-fade-in-up"
            style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
          >
            <button
              onClick={scrollToAbout}
              className="px-10 py-4 bg-transparent border border-white/60 text-white font-sans text-xs uppercase tracking-widest hover:bg-white hover:text-navy-900 transition-all duration-300"
            >
              Dowiedz się Więcej
            </button>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="px-10 py-4 bg-coral-500 text-white font-sans text-xs uppercase tracking-widest hover:bg-coral-600 transition-all duration-300 shadow-2xl"
            >
              ZAREZERWUJ TĘ SESJĘ
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
            style={{ animationDelay: '1s' }}
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* Sections */}
      <Suspense fallback={<div>Loading...</div>}>
        <LazyLoad id="about" forceVisible={scrollToSection === 'about'} className="scroll-mt-20">
          <About />
        </LazyLoad>
        <LazyLoad id="offer" forceVisible={scrollToSection === 'offer'} className="scroll-mt-20">
          <OfferSection />
        </LazyLoad>

        <LazyLoad id="contact" forceVisible={scrollToSection === 'contact'} className="scroll-mt-20">
          <Contact />
        </LazyLoad>
        <LazyLoad id="pricing" forceVisible={scrollToSection === 'pricing'} className="scroll-mt-20">
          <Pricing />
        </LazyLoad>

        {/* Why Hypnotherapy Section — NOW LIGHT */}
        <section className="py-24 bg-white relative overflow-hidden border-t border-surface-300">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-coral-500 to-transparent opacity-20"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <span className="text-coral-500 font-sans text-xs font-bold uppercase tracking-[0.3em] mb-3 block">Zrozumienie Metody</span>
              <h2 className="font-serif text-4xl md:text-5xl text-navy-900 mb-6">Dlaczego Hipnoterapia?</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                Naukowo udowodniona ścieżka do przeprogramowania podświadomych wzorców i odblokowania Twojego prawdziwego potencjału.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white p-8 rounded-xl border border-surface-300 hover:border-coral-300 transition-all duration-300 group hover:scale-105 hover:shadow-xl">
                <div className="w-14 h-14 bg-coral-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-coral-100 transition-colors duration-300">
                  <Brain className="text-coral-500" size={28} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl text-navy-900 mb-4">Nurt Holistyczny</h3>
                <p className="text-gray-500 font-light leading-relaxed">
                  W Nurcie Holistycznym korzystam z metod, które pozwalają dotrzeć głębiej niż sama rozmowa: łączę hipnoterapię, techniki oddechowe, pracę z ciałem i wizualizację. Takie podejście umożliwia dotarcie do źródła napięć, emocji i przekonań, które wpływają na nasze samopoczucie i życiowe wybory.
                </p>
              </div>
              {/* Card 2 */}
              <div className="bg-white p-8 rounded-xl border border-surface-300 hover:border-coral-300 transition-all duration-300 group hover:scale-105 hover:shadow-xl">
                <div className="w-14 h-14 bg-coral-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-coral-100 transition-colors duration-300">
                  <Sparkles className="text-coral-500" size={28} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl text-navy-900 mb-4">Nurt Integratywny</h3>
                <p className="text-gray-500 font-light leading-relaxed">
                  W Nurcie Integratywnym nie ograniczam się do jednego sposobu pracy — dopasowuję metody do Ciebie i Twojego procesu. Czasem będzie to głęboka praca z podświadomością, czasem łagodna eksploracja poprzez ciało, oddech lub obraz. Zawsze w atmosferze bezpieczeństwa, uważności i zaufania.
                </p>
              </div>
              {/* Card 3 */}
              <div className="bg-white p-8 rounded-xl border border-surface-300 hover:border-coral-300 transition-all duration-300 group hover:scale-105 hover:shadow-xl">
                <div className="w-14 h-14 bg-coral-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-coral-100 transition-colors duration-300">
                  <ShieldCheck className="text-coral-500" size={28} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl text-navy-900 mb-4">Naturalne i Bezpieczne</h3>
                <p className="text-gray-500 font-light leading-relaxed">
                  Celem mojej pracy jest wspieranie świadomej transformacji - takiej, w której odzyskujesz kontakt ze sobą, zaufanie do wewnętrznej mądrości i poczucie równowagi w życiu.
                </p>
              </div>
            </div>

            {/* Quote/Stat */}
            <div className="mt-16 text-center">
              <div className="inline-block p-8 border-y border-surface-300 bg-surface-100 rounded-xl max-w-4xl">
                <p className="font-serif text-xl md:text-2xl text-navy-900 italic leading-relaxed">
                  "Hipnoza ma 93% wskaźnik skuteczności po zaledwie 6 sesjach, w porównaniu do 38% skuteczności po 600 sesjach psychoanalizy."
                </p>
                <p className="text-coral-500 text-xs font-bold uppercase tracking-widest mt-4">— American Health Magazine</p>
              </div>
            </div>
          </div>
        </section>

        <LazyLoad id="faq" forceVisible={scrollToSection === 'faq'} className="scroll-mt-20">
          <FAQ />
        </LazyLoad>
        <LazyLoad id="testimonials" forceVisible={scrollToSection === 'testimonials'} className="scroll-mt-20">
          <Testimonials />
        </LazyLoad>

      </Suspense>
    </div>
  );
};

export default Home;