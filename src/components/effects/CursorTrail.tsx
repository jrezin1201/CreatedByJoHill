"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TrailPoint {
  id: number;
  x: number;
  y: number;
}

export function CursorTrail() {
  const [trail, setTrail] = useState<TrailPoint[]>([]);

  useEffect(() => {
    let frameId: number | undefined;
    let lastTime = Date.now();
    const throttleDelay = 50; // ms

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime < throttleDelay) return;
      lastTime = now;

      setTrail((prev) => {
        const newTrail = [
          ...prev,
          {
            id: Date.now(),
            x: e.clientX,
            y: e.clientY,
          },
        ].slice(-10); // Keep only last 10 points

        return newTrail;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Clean up old trail points
    const cleanup = setInterval(() => {
      setTrail((prev) => prev.slice(-5));
    }, 100);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(cleanup);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      <AnimatePresence>
        {trail.map((point, index) => (
          <motion.div
            key={point.id}
            initial={{ opacity: 0.6, scale: 1 }}
            animate={{ opacity: 0, scale: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: 'absolute',
              left: point.x,
              top: point.y,
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: `linear-gradient(135deg, rgba(139, 92, 246, ${0.6 - index * 0.06}), rgba(59, 130, 246, ${0.6 - index * 0.06}))`,
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
