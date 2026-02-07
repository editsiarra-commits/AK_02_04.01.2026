
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

      // Light theme gradient mesh - soft pastels
      
      // Background Gradient: Soft lavender / warm white
      const gradient1 = ctx.createLinearGradient(0, 0, width, height);
      gradient1.addColorStop(0, `hsla(${260 + Math.sin(t * 0.05) * 5}, 20%, 94%, 1)`); 
      gradient1.addColorStop(1, `hsla(${30 + Math.cos(t * 0.05) * 5}, 15%, 96%, 1)`); 
      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, width, height);
      
      // Soft moving blobs for the mesh effect
      ctx.filter = 'blur(60px)'; 
      
      // Blob 1: Soft coral tint
      ctx.fillStyle = `hsla(${15 + Math.sin(t * 0.2) * 10}, 60%, 88%, 0.3)`;
      ctx.beginPath();
      ctx.arc(
        width * 0.3 + Math.sin(t * 0.2) * width * 0.2,
        height * 0.3 + Math.cos(t * 0.3) * height * 0.2,
        width * 0.5, 0, Math.PI * 2
      );
      ctx.fill();

      // Blob 2: Soft lavender
      ctx.fillStyle = `hsla(${260 + Math.cos(t * 0.15) * 10}, 30%, 86%, 0.3)`;
      ctx.beginPath();
      ctx.arc(
        width * 0.7 - Math.sin(t * 0.25) * width * 0.2,
        height * 0.7 - Math.cos(t * 0.2) * height * 0.2,
        width * 0.6, 0, Math.PI * 2
      );
      ctx.fill();

      // Blob 3: Soft warm peach
      ctx.fillStyle = `hsla(${30 + Math.sin(t * 0.1) * 10}, 40%, 90%, 0.25)`;
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
        <div className="absolute inset-0 bg-warm-950/60 group-hover:bg-warm-950/80 transition-colors duration-700"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-warm-950 via-warm-950/40 to-transparent opacity-80"></div>
        {children}
    </div>
  );
};

export default AnimatedTile;
