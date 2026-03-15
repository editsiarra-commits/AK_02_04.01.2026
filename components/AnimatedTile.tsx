
import React from 'react';

interface AnimatedTileProps {
  offerId: string;
  children: React.ReactNode;
  backgroundImage?: string;
}

const AnimatedTile: React.FC<AnimatedTileProps> = ({ children, backgroundImage }) => {
  return (
    <div className="absolute inset-0">
        {backgroundImage && (
             <div 
             className="absolute inset-0 w-full h-full bg-cover bg-center opacity-70 group-hover:opacity-90 transition-opacity duration-700 bg-no-repeat"
             style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}
           >
                <div className="absolute inset-0 bg-warm-950/60 group-hover:bg-warm-950/80 transition-colors duration-700 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-warm-950 via-warm-950/40 to-transparent opacity-80 pointer-events-none"></div>
           </div>
        )}
        {children}
    </div>
  );
};

export default AnimatedTile;
