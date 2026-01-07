
import React, { useEffect, useRef } from 'react';

interface AnimatedTileProps {
  offerId: string;
  children: React.ReactNode;
  backgroundImage?: string;
}

const AnimatedTile: React.FC<AnimatedTileProps> = ({ offerId, children, backgroundImage }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // If there is a background image, we don't need the canvas animation
    if (backgroundImage) {
        return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    // Seed time based on offerId to desynchronize animations slightly
    let t = 0;
    for (let i = 0; i < offerId.length; i++) {
        t += offerId.charCodeAt(i) * 0.1;
    }

    const draw = () => {
      t += 0.005; // Slower, more relaxing movement
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      // Consistent Dark Cafe Gradient Mesh for all tiles
      
      // Background Gradient: Deep Espresso / Dark Chocolate
      const gradient1 = ctx.createLinearGradient(0, 0, width, height);
      gradient1.addColorStop(0, `hsla(${25 + Math.sin(t * 0.05) * 5}, 30%, 12%, 1)`); 
      gradient1.addColorStop(1, `hsla(${35 + Math.cos(t * 0.05) * 5}, 25%, 8%, 1)`); 
      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, width, height);
      
      // Soft moving blobs for the mesh effect
      ctx.filter = 'blur(60px)'; 
      
      // Blob 1: Warm Coffee/Mocha
      ctx.fillStyle = `hsla(${28 + Math.sin(t * 0.2) * 10}, 40%, 22%, 0.4)`;
      ctx.beginPath();
      ctx.arc(
        width * 0.3 + Math.sin(t * 0.2) * width * 0.2,
        height * 0.3 + Math.cos(t * 0.3) * height * 0.2,
        width * 0.5, 0, Math.PI * 2
      );
      ctx.fill();

      // Blob 2: Deep Brown
      ctx.fillStyle = `hsla(${18 + Math.cos(t * 0.15) * 10}, 35%, 18%, 0.4)`;
      ctx.beginPath();
      ctx.arc(
        width * 0.7 - Math.sin(t * 0.25) * width * 0.2,
        height * 0.7 - Math.cos(t * 0.2) * height * 0.2,
        width * 0.6, 0, Math.PI * 2
      );
      ctx.fill();

      // Blob 3: Subtle Caramel/Gold Accent
      ctx.fillStyle = `hsla(${38 + Math.sin(t * 0.1) * 10}, 45%, 25%, 0.3)`;
      ctx.beginPath();
      ctx.arc(
        width * 0.5 + Math.cos(t * 0.4) * width * 0.2,
        height * 0.5 + Math.sin(t * 0.3) * height * 0.2,
        width * 0.4, 0, Math.PI * 2
      );
      ctx.fill();

      ctx.filter = 'none';

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [offerId, backgroundImage]);

  return (
    <div className="absolute inset-0">
        {backgroundImage ? (
             <div 
             className="w-full h-full bg-cover bg-center opacity-70 group-hover:opacity-90 transition-opacity duration-700"
             style={{ backgroundImage: `url(${backgroundImage})` }}
           />
        ) : (
            <canvas ref={canvasRef} className="w-full h-full opacity-70 group-hover:opacity-90 transition-opacity duration-700" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-warm-950 via-warm-950/20 to-transparent opacity-80"></div>
        {children}
    </div>
  );
};

export default AnimatedTile;
