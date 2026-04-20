import { ArrowLeft, Check } from 'lucide-react';
import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import AnimatedTile from '../components/AnimatedTile';
import { offers } from '../data/offers';

export { offers };

interface OfferSectionProps {
  id?: string;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ id }) => (
  <section id={id} className="relative py-[45px] bg-warm-900 scroll-mt-20 border-t border-warm-800">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <span className="text-coffee-400 font-sans text-s font-bold uppercase tracking-[0.3em] mb-3 block"> </span>
            <h2 className="font-display text-4xl md:text-4xl text-warm-100 tracking-wide py-0 -mt-[25px] -mb-[25px]">OTO W CZYM MOGĘ CI POMÓC:</h2>
        </div>

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
         {Object.values(offers).map((offer) => (
           <Link to={`/offer/${offer.id}`} key={offer.id} className="group relative flex flex-col h-full overflow-hidden bg-warm-800 rounded-2xl">
             <AnimatedTile offerId={offer.id} backgroundImage={offer.tileBackgroundImage} alt={`Sesja: ${offer.title}`} />
             
             <div className="relative z-10 p-4 pt-6 flex flex-col justify-start text-center items-center grow">
                 {/* Frame Effect */}
                 <div className="absolute inset-2 border border-warm-950/10 group-hover:border-coffee-400/40 transition-colors duration-700 pointer-events-none rounded-xl"></div>
                 
                 <div className="transform transition-transform duration-500 group-hover:-translate-y-2 w-full flex flex-col items-center">
                    <h3 className="font-display text-[26px] text-white mb-2 tracking-wide drop-shadow-lg leading-tight px-2 font-normal">{offer.title}</h3>
                    
                    {/* Animated Line */}
                    <div className="w-0 h-px bg-coffee-400 mx-auto mb-3 transition-all duration-500 group-hover:w-12 opacity-80"></div>
                    
                    <p className="text-white font-sans text-xs font-medium leading-relaxed max-w-[240px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0 delay-75 mb-4">
                        {offer.description}
                    </p>
                 </div>
                 
                 <div className="mt-auto pt-2 pb-2">
                    <span className="inline-flex items-center justify-center px-5 py-2 border border-warm-700/30 rounded-full text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-warm-300 group-hover:text-coffee-300 group-hover:border-coffee-400/40 transition-all duration-500 bg-warm-950/40 backdrop-blur-sm">
                      Dowiedz się więcej
                    </span>
                 </div>
             </div>
           </Link>
         ))}
       </div>
     </div>
  </section>
);

export const OfferDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const offer = id ? offers[id] : null;

  const handleNavigate = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    navigate('/', { state: { scrollTo: sectionId } });
  };

  if (!offer) {
    return (
        <div className="min-h-dvh flex items-center justify-center bg-warm-900">
            <div className="text-center">
                <h2 className="text-2xl font-display text-warm-100">Oferta nie znaleziona</h2>
                <a href="#offer" onClick={(e) => handleNavigate(e, 'offer')} className="text-coffee-400 underline mt-4 block cursor-pointer">Powrót do Ofert</a>
            </div>
        </div>
    );
  }

  return (
    <div className="min-h-dvh bg-warm-900 pb-20">
       {/* Hero for Detail */}
       <div className="h-[30vh] relative overflow-hidden bg-warm-950">
         <video
           className="absolute inset-0 w-full h-full object-cover"
           autoPlay
           loop
           muted
           playsInline
           aria-hidden="true"
         >
           <source src="/assets/video4.mp4" type="video/mp4" />
         </video>
         <div className="absolute inset-0 bg-warm-950/75 flex items-center justify-center">
            <div className="text-center px-4 max-w-4xl z-10">
              <span className="block text-coffee-400 uppercase tracking-widest text-sm mb-4 font-bold">Szczegóły Usługi</span>
              <h1 className="font-display text-4xl md:text-5xl text-warm-100 tracking-wide mb-2">{offer.title}</h1>
            </div>
         </div>
       </div>

       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
         <div className="bg-white p-8 md:p-16 rounded-2xl shadow-2xl border border-warm-800">
           <a href="#offer" onClick={(e) => handleNavigate(e, 'offer')} className="inline-flex items-center text-coffee-400 hover:text-coffee-300 mb-10 transition-colors text-xs font-bold uppercase tracking-widest cursor-pointer group">
              <ArrowLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Wszystkie Oferty
           </a>

           <div className="prose max-w-none">
             <h2 className="font-display text-3xl md:text-4xl text-warm-100 mb-8 font-light [background-clip:unset] [-webkit-background-clip:unset]">{offer.autonomousHeadline}</h2>
             <p className="text-warm-300 text-lg leading-[30px] mb-[15px] font-light">
               {offer.fullDescription}
             </p>

             <div className="bg-warm-900/30 p-10 rounded-2xl border border-warm-800 mb-12">
               <h3 className="font-display text-2xl text-coffee-400 mb-8">{offer.benefitsHeadline}</h3>
               <ul className="space-y-4">
                 {offer.benefits.filter(b => b.trim() !== '').map((benefit, index) => (
                   <li key={index} className="flex items-start">
                     <div className="shrink-0 w-6 h-6 rounded-full bg-coffee-900 flex items-center justify-center mt-1 mr-4 border border-coffee-800">
                       <Check size={12} className="text-coffee-400" />
                     </div>
                     <span className="text-warm-200 font-semibold text-lg">{benefit}</span>
                   </li>
                 ))}
               </ul>
                {offer.additionalInfo && offer.additionalInfo.trim() !== '' && (
                    <h3 className="font-display text-lg font-light text-warm-200 mt-[25px] mb-[25px] w-[640px] max-w-full">
                     {offer.additionalInfo}
                    </h3>
                )}
             </div>

             <div className="text-center pt-0 box-content">
                <p className="text-coffee-400 mb-8 font-serif text-xl font-normal border-0 border-transparent border-none [border-image:none]"></p>
                <a href="#contact" onClick={(e) => handleNavigate(e, 'contact')} className="inline-block px-12 py-5 bg-coffee-700 text-white font-sans text-xs font-bold uppercase tracking-[0.2em] hover:bg-coffee-600 transition-all shadow-lg hover:shadow-coffee-900/30 cursor-pointer rounded-full">
                  ZAREZERWUJ TĘ SESJĘ
                </a>
             </div>
           </div>
         </div>
       </div>
    </div>
  );
};
