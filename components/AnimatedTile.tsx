
import React, { useEffect, useRef } from 'react';

interface AnimatedTileProps {
  offerId: string;
  children: React.ReactNode;
}

const AnimatedTile: React.FC<AnimatedTileProps> = ({ offerId, children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let t = 0;

    const draw = () => {
      t += 0.01;
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      // Unique animation based on offerId
      switch (offerId) {
        case 'stress-anxiety':
          for (let i = 0; i < 50; i++) {
            ctx.fillStyle = `hsla(${200 + Math.sin(t + i * 0.1) * 20}, 70%, 50%, 0.5)`;
            ctx.beginPath();
            ctx.arc(
              Math.sin(t + i * 0.2) * width * 0.4 + width / 2,
              Math.cos(t + i * 0.3) * height * 0.4 + height / 2,
              5, 0, 2 * Math.PI
            );
            ctx.fill();
          }
          break;
        case 'smoking-cessation':
          for (let i = 0; i < 10; i++) {
            ctx.strokeStyle = `hsla(${30 + Math.cos(t + i * 0.5) * 20}, 80%, 60%, 0.7)`;
            ctx.beginPath();
            ctx.moveTo(0, height / 2 + Math.sin(t + i * 0.2) * 20);
            ctx.lineTo(width, height / 2 + Math.cos(t + i * 0.3) * 20);
            ctx.stroke();
          }
          break;
        case 'regression':
            for (let i = 0; i < 20; i++) {
                ctx.fillStyle = `hsla(${120 + Math.sin(t + i * 0.1) * 30}, 60%, 50%, 0.6)`;
                ctx.fillRect(
                  (width / 20) * i,
                  height / 2 + Math.sin(t + i * 0.3) * 30 - 15,
                  width / 20,
                  30
                );
              }
              break;
        case 'confidence':
            for (let i = 0; i < 15; i++) {
                ctx.beginPath();
                ctx.strokeStyle = `hsla(${240 + Math.cos(t + i * 0.2) * 40}, 70%, 60%, 0.8)`;
                ctx.arc(width / 2, height / 2, 5 + i * 10, t + i * 0.1, t + i * 0.1 + Math.PI / 2);
                ctx.stroke();
              }
              break;
        case 'personal-development':
            for (let i = 0; i < 30; i++) {
                ctx.fillStyle = `hsla(${300 + Math.sin(t + i * 0.05) * 50}, 75%, 55%, 0.7)`;
                ctx.beginPath();
                ctx.arc(
                  (width / 30) * i,
                  height / 2 + Math.cos(t + i * 0.1) * 50,
                  3, 0, 2 * Math.PI
                );
                ctx.fill();
              }
              break;
        case 'procrastination':
            for (let i = 0; i < 5; i++) {
                ctx.fillStyle = `hsla(0, 0%, ${50 + Math.sin(t + i) * 20}%, 0.5)`;
                ctx.fillRect(0, (height / 5) * i, width, height / 5);
              }
              break;
        case 'relationships':
            for (let i = 0; i < 8; i++) {
                ctx.beginPath();
                ctx.moveTo(width / 2, height / 2);
                ctx.lineTo(
                  width / 2 + Math.cos(t + i * Math.PI / 4) * 100,
                  height / 2 + Math.sin(t + i * Math.PI / 4) * 100
                );
                ctx.strokeStyle = `hsla(${60 + i * 30}, 80%, 50%, 0.9)`;
                ctx.stroke();
              }
              break;
        case 'psychedelic-therapy':
            for (let i = 0; i < 25; i++) {
                ctx.fillStyle = `hsla(${180 + Math.random() * 60}, 90%, 70%, 0.4)`;
                ctx.beginPath();
                ctx.arc(Math.random() * width, Math.random() * height, Math.random() * 10, 0, 2 * Math.PI);
                ctx.fill();
              }
              break;
        default:
            ctx.fillStyle = 'rgba(0,0,0,0.1)';
            ctx.fillRect(0, 0, width, height);
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [offerId]);

  return (
    <div className="absolute inset-0">
        <canvas ref={canvasRef} className="w-full h-full opacity-60 group-hover:opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-950 via-warm-950/20 to-transparent opacity-90"></div>
        {children}
    </div>
  );
};

export default AnimatedTile;
