"use client";

import React, { useState, useEffect, useRef } from 'react';

type GlobalEventType = 'cinematicZoom' | 'lightingStrike' | 'materialTransform' | null;

const PixarStyleSignature = () => {
  const name = 'Jordan Hill';
  const containerRef = useRef(null);
  const [globalEvent, setGlobalEvent] = useState<GlobalEventType>(null);
  const [eventTimer, setEventTimer] = useState(0);

  // Global cinematic events
  useEffect(() => {
    const eventSequence: Array<'cinematicZoom' | 'lightingStrike' | 'materialTransform'> = ['cinematicZoom', 'lightingStrike', 'materialTransform'];
    let eventIndex = 0;

    const triggerNextEvent = () => {
      const event = eventSequence[eventIndex % 3];
      setGlobalEvent(event);
      setEventTimer(0);
      eventIndex++;
    };

    const initialTimer = setTimeout(triggerNextEvent, 4000);
    const eventCycle = setInterval(triggerNextEvent, 12000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(eventCycle);
    };
  }, []);

  // Event timer
  useEffect(() => {
    if (!globalEvent) return;

    const timer = setInterval(() => {
      setEventTimer((prev) => {
        const newTime = prev + 30;

        if (globalEvent === 'cinematicZoom' && newTime > 3000) {
          setGlobalEvent(null);
          return 0;
        }
        if (globalEvent === 'lightingStrike' && newTime > 2500) {
          setGlobalEvent(null);
          return 0;
        }
        if (globalEvent === 'materialTransform' && newTime > 3500) {
          setGlobalEvent(null);
          return 0;
        }

        return newTime;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [globalEvent]);

  const getLetterStyle = (idx: number) => {
    // Cinematic zoom event
    if (globalEvent === 'cinematicZoom') {
      const progress = eventTimer / 3000;
      const zoomAmount = 1 - progress * 0.3;
      const rotate3D = progress * 45;

      return {
        fontSize: '8rem',
        fontWeight: '900',
        fontFamily: "'Playfair Display', serif",
        color: '#1a1a1a',
        textShadow: `
          -5px -5px 20px rgba(255,255,255,0.8),
          -10px -10px 30px rgba(200,200,200,0.6),
          5px 5px 20px rgba(0,0,0,0.3),
          10px 10px 40px rgba(100,100,100,0.4),
          inset -2px -2px 5px rgba(255,255,255,0.5),
          inset 2px 2px 5px rgba(0,0,0,0.2)
        `,
        transform: `perspective(1500px) rotateX(${rotate3D}deg) rotateY(${rotate3D}deg) scale(${zoomAmount}) translateZ(100px)`,
        filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.3))',
        display: 'inline-block',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,240,240,0.7) 50%, rgba(220,220,220,0.8) 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      };
    }

    // Lighting strike event
    if (globalEvent === 'lightingStrike') {
      const progress = Math.min(1, eventTimer / 2500);
      const flashIntensity = Math.max(0, Math.sin(progress * Math.PI * 4) * (1 - progress));

      return {
        fontSize: '8rem',
        fontWeight: '900',
        fontFamily: "'Playfair Display', serif",
        background: `linear-gradient(135deg, 
          rgba(255,255,${Math.floor(100 + flashIntensity * 155)},0.95) 0%, 
          rgba(240,250,${Math.floor(100 + flashIntensity * 155)},0.8) 50%, 
          rgba(200,230,${Math.floor(100 + flashIntensity * 155)},0.9) 100%)`,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textShadow: `
          0 0 ${30 + flashIntensity * 50}px rgba(0, 200, 255, ${0.6 + flashIntensity * 0.4}),
          0 0 ${60 + flashIntensity * 100}px rgba(100, 220, 255, ${0.4 + flashIntensity * 0.3}),
          -8px -8px 25px rgba(255,255,255,${0.7 + flashIntensity * 0.3}),
          8px 8px 35px rgba(0,0,0,${0.4 + flashIntensity * 0.1})
        `,
        filter: `drop-shadow(0 40px 80px rgba(0, 200, 255, ${0.5 + flashIntensity * 0.3}))`,
        transform: `perspective(1200px) translateZ(50px) scale(${1 + flashIntensity * 0.1})`,
        display: 'inline-block',
      };
    }

    // Material transform event
    if (globalEvent === 'materialTransform') {
      const progress = eventTimer / 3500;
      const angle = (idx / 11) * Math.PI * 2;
      const distance = Math.sin(progress * Math.PI) * 100;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;

      return {
        fontSize: '8rem',
        fontWeight: '900',
        fontFamily: "'Playfair Display', serif",
        background: `linear-gradient(135deg, 
          hsl(${progress * 360}, 100%, 50%) 0%,
          hsl(${progress * 360 + 60}, 100%, 60%) 50%,
          hsl(${progress * 360 + 120}, 100%, 70%) 100%)`,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textShadow: `
          ${x}px ${y}px 40px rgba(100,100,100,0.4),
          -5px -5px 20px rgba(255,255,255,0.6),
          5px 5px 20px rgba(0,0,0,0.2)
        `,
        filter: `drop-shadow(0 ${30 + y * 0.5}px ${60 + Math.abs(x) * 0.5}px rgba(0,0,0,0.3))`,
        transform: `perspective(1500px) translateZ(50px) rotateX(${progress * 180}deg) rotateY(${progress * 180}deg)`,
        display: 'inline-block',
      };
    }

    // Default photorealistic style
    return {
      fontSize: '8rem',
      fontWeight: '900',
      fontFamily: "'Playfair Display', serif",
      color: '#1a1a1a',
      textShadow: `
        -5px -5px 20px rgba(255,255,255,0.8),
        -10px -10px 30px rgba(200,200,200,0.6),
        5px 5px 20px rgba(0,0,0,0.3),
        10px 10px 40px rgba(100,100,100,0.4),
        inset -2px -2px 5px rgba(255,255,255,0.5),
        inset 2px 2px 5px rgba(0,0,0,0.2)
      `,
      transform: `perspective(1500px) rotateX(${Math.sin(Date.now() / 5000) * 5}deg) rotateY(${Math.sin(Date.now() / 7000) * 5}deg) translateZ(100px)`,
      filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.3))',
      display: 'inline-block',
      background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,240,240,0.7) 50%, rgba(220,220,220,0.8) 100%)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
    };
  };

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-gray-150 p-8 overflow-hidden perspective relative"
      style={{
        background: `
          radial-gradient(circle at 20% 50%, rgba(255,255,255,0.8) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(200,220,240,0.4) 0%, transparent 50%),
          linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 50%, #d0d0d0 100%)
        `,
      }}
    >
      {/* Cinematic lighting rig */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Key light - top left */}
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20"
          style={{
            background:
              'radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        ></div>

        {/* Fill light - bottom right */}
        <div
          className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-15"
          style={{
            background:
              'radial-gradient(circle, rgba(200,220,255,0.6) 0%, transparent 70%)',
            filter: 'blur(70px)',
          }}
        ></div>

        {/* Back light - top right */}
        <div
          className="absolute -top-32 right-0 w-96 h-96 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,200,0.5) 0%, transparent 70%)',
            filter: 'blur(90px)',
          }}
        ></div>

        {/* Ambient occlusion - subtle shadows */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-5"></div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 w-full max-w-5xl">
        {/* Signature container with realistic depth */}
        <div className="mb-24 text-center">
          <div
            className="inline-block relative"
            style={{
              perspective: '2000px',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Base shadow (volumetric) */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-full h-32 rounded-full opacity-30"
              style={{
                background:
                  'radial-gradient(circle, rgba(0,0,0,0.4) 0%, transparent 70%)',
                filter: 'blur(40px)',
                width: '120%',
              }}
            ></div>

            {/* Main signature text */}
            <div className="flex justify-center items-center gap-2 relative">
              {name.split('').map((letter, idx) => {
                if (letter === ' ') return <span key={idx}>{'\u00A0'}</span>;

                const style = getLetterStyle(idx);

                return (
                  <div
                    key={idx}
                    style={{
                      ...style,
                      animation: globalEvent ? 'none' : `float 3s ease-in-out ${idx * 0.1}s infinite`,
                    }}
                  >
                    {letter}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Cinematic text below signature */}
        <div className="text-center mb-16">
          <h1
            className="text-6xl font-black mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
              background: 'linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '-3px -3px 8px rgba(255,255,255,0.6), 3px 3px 15px rgba(0,0,0,0.2)',
              filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))',
            }}
          >
            JORDAN HILL
          </h1>
          <p
            className="text-2xl font-light tracking-widest mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: '#4a4a4a',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)',
              letterSpacing: '0.2em',
            }}
          >
            VISUAL ENGINEER
          </p>
          <p
            className="text-lg font-light"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: '#6a6a6a',
            }}
          >
            Photorealistic 3D Cinematography • Pixar-Quality Rendering
          </p>
        </div>

        {/* Event status */}
        {globalEvent && (
          <div className="text-center mb-12">
            <div
              className="inline-block px-8 py-4 rounded-lg backdrop-blur-md"
              style={{
                background: 'rgba(255,255,255,0.7)',
                border: '1px solid rgba(200,200,200,0.5)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              }}
            >
              {globalEvent === 'cinematicZoom' && (
                <p className="text-gray-800 font-semibold">🎬 CINEMATIC ZOOM</p>
              )}
              {globalEvent === 'lightingStrike' && (
                <p className="text-blue-800 font-semibold">⚡ LIGHTING STRIKE</p>
              )}
              {globalEvent === 'materialTransform' && (
                <p className="text-purple-800 font-semibold">🌈 MATERIAL TRANSFORM</p>
              )}
            </div>
          </div>
        )}

        {/* Cinematic specifications */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { label: 'Render Engine', value: 'Cinema 4D Quality' },
            { label: 'Lighting', value: '3-Point Cinematic' },
            { label: 'Depth', value: 'Volumetric Shadows' },
            { label: 'Animation', value: 'Keyframe Precision' },
          ].map((item, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-lg backdrop-blur-sm"
              style={{
                background: 'rgba(255,255,255,0.5)',
                border: '1px solid rgba(200,200,200,0.3)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
              }}
            >
              <p
                className="text-xs font-semibold tracking-widest mb-2 opacity-60"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {item.label}
              </p>
              <p
                className="text-lg font-light"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#2a2a2a',
                }}
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        * {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default PixarStyleSignature;
