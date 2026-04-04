
import React from 'react';

interface AnimatedTileProps {
  offerId: string;
  children: React.ReactNode;
  backgroundImage?: string;
  alt?: string;
}

const AnimatedTile: React.FC<AnimatedTileProps> = ({ children, backgroundImage, alt }) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
        {backgroundImage && (
           <div className="absolute inset-0 w-full h-full">
             <img 
               src={backgroundImage} 
               alt={alt || ""} 
               className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-700"
               loading="lazy"
             />
             <div className="absolute inset-0 bg-warm-950/10 group-hover:bg-warm-950/10 transition-colors duration-700 pointer-events-none"></div>
           </div>
        )}
        {children}
    </div>
  );
};

export default AnimatedTile;
