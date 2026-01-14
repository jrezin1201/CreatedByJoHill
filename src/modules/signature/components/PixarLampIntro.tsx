"use client";

import React, { useState, useEffect, useRef } from 'react';

const PixarLampIntro = () => {
  const [animationStage, setAnimationStage] = useState(0);
  const [showLetters, setShowLetters] = useState(false);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Sequence the animation stages
    const timeline = [
      { delay: 0, duration: 1000, stage: 1 }, // Black screen
      { delay: 500, duration: 2000, stage: 2 }, // Lamp enters
      { delay: 2500, duration: 1500, stage: 3 }, // Lamp jumps and lands
      { delay: 4000, duration: 2000, stage: 4 }, // Letters appear
    ];

    const timers: NodeJS.Timeout[] = [];

    timeline.forEach((item) => {
      const timer = setTimeout(() => {
        setAnimationStage(item.stage);
        if (item.stage === 4) {
          setShowLetters(true);
        }
      }, item.delay);

      timers.push(timer);
    });

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  const getScaledSize = (desktopSize: number) => {
    if (isMobile) {
      return Math.max(desktopSize * 0.5, 24); // Min 24px
    }
    return desktopSize;
  };

  const lampStandHeight = getScaledSize(200);
  const lampHeadSize = getScaledSize(120);
  const letterSize = getScaledSize(120);

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center min-h-screen bg-black overflow-hidden relative w-full"
    >
      {/* Stage lighting */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Spotlight from above */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2"
          style={{
            width: isMobile ? '400px' : '800px',
            height: isMobile ? '600px' : '1200px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
            filter: 'blur(100px)',
            opacity: animationStage >= 2 ? 1 : 0,
            transition: 'opacity 0.5s ease-out',
          }}
        ></div>

        {/* Warm stage light */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          style={{
            width: isMobile ? '500px' : '1000px',
            height: isMobile ? '300px' : '600px',
            background: 'radial-gradient(circle, rgba(255,200,100,0.2) 0%, transparent 70%)',
            filter: 'blur(120px)',
            opacity: animationStage >= 2 ? 0.6 : 0,
            transition: 'opacity 0.8s ease-out',
          }}
        ></div>
      </div>

      {/* Main container */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-4">
        {/* LAMP */}
        {animationStage >= 2 && (
          <div
            className="absolute left-1/2"
            style={{
              transform: `translateX(-50%) translateY(${
                animationStage === 3
                  ? `calc(-50% - ${getScaledSize(400)}px + 50px)`
                  : `calc(-50% - ${getScaledSize(600)}px)`
              })`,
              transition:
                animationStage === 3
                  ? 'transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)'
                  : 'none',
              animation:
                animationStage === 3
                  ? 'lampSway 1s ease-in-out 1.2s forwards'
                  : 'none',
            }}
          >
            {/* Lamp stand */}
            <div
              style={{
                width: getScaledSize(40),
                height: lampStandHeight,
                background: 'linear-gradient(90deg, #2a2a2a 0%, #4a4a4a 50%, #2a2a2a 100%)',
                margin: '0 auto',
                boxShadow: '0 20px 60px rgba(0,0,0,0.8), inset -2px 0 5px rgba(255,255,255,0.1)',
                position: 'relative',
              }}
            >
              {/* Stand reflection */}
              <div
                style={{
                  position: 'absolute',
                  left: '5px',
                  top: '10px',
                  width: '8px',
                  height: `${lampStandHeight - 20}px`,
                  background: 'linear-gradient(90deg, rgba(255,255,255,0.3) 0%, transparent 100%)',
                }}
              ></div>
            </div>

            {/* Lamp head/bulb assembly */}
            <div
              style={{
                position: 'relative',
                marginTop: `-${getScaledSize(20)}px`,
                width: lampHeadSize,
                height: lampHeadSize,
                margin: `-${getScaledSize(20)}px auto 0`,
                animation:
                  animationStage === 3
                    ? 'lampHeadSquash 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    : 'none',
              }}
            >
              {/* Lamp shade */}
              <div
                style={{
                  width: '100%',
                  height: `${lampHeadSize * 0.67}px`,
                  background:
                    'linear-gradient(135deg, #f5f5f5 0%, #d0d0d0 50%, #b0b0b0 100%)',
                  borderRadius: '50% 50% 45% 45%',
                  position: 'relative',
                  boxShadow:
                    '0 20px 40px rgba(0,0,0,0.4), inset -5px -5px 15px rgba(0,0,0,0.2), inset 5px 5px 15px rgba(255,255,255,0.3)',
                  overflow: 'hidden',
                }}
              >
                {/* Light glow inside shade */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'radial-gradient(circle at 50% 30%, rgba(255,255,200,0.8) 0%, transparent 70%)',
                  }}
                ></div>
              </div>

              {/* Bulb glow */}
              <div
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  background:
                    'radial-gradient(circle, rgba(255,255,100,0.6) 0%, rgba(255,200,0,0.3) 40%, transparent 70%)',
                  filter: 'blur(20px)',
                  opacity: animationStage >= 2 ? 1 : 0,
                  transition: 'opacity 0.5s ease-out',
                  zIndex: -1,
                }}
              ></div>
            </div>

            {/* Lamp light beam */}
            {animationStage >= 2 && (
              <div
                style={{
                  position: 'absolute',
                  bottom: `-${getScaledSize(300)}px`,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: isMobile ? '200px' : '400px',
                  height: isMobile ? '150px' : '300px',
                  background:
                    'radial-gradient(ellipse 400px 300px at 50% 0%, rgba(255,240,100,0.4) 0%, rgba(255,200,0,0.2) 40%, transparent 100%)',
                  filter: 'blur(40px)',
                  pointerEvents: 'none',
                }}
              ></div>
            )}

            {/* Shadow cast by lamp */}
            {animationStage >= 3 && (
              <div
                style={{
                  position: 'absolute',
                  bottom: `-${getScaledSize(280)}px`,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: isMobile ? '75px' : '150px',
                  height: isMobile ? '30px' : '60px',
                  background:
                    'radial-gradient(ellipse 150px 60px, rgba(0,0,0,0.6) 0%, transparent 70%)',
                  filter: 'blur(15px)',
                  animation:
                    animationStage === 3
                      ? 'shadowSquash 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)'
                      : 'none',
                }}
              ></div>
            )}
          </div>
        )}

        {/* LETTERS - "JORDAN HILL" */}
        {showLetters && (
          <div
            className="absolute flex flex-wrap justify-center items-center"
            style={{
              gap: isMobile ? '4px' : '8px',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              maxWidth: '90%',
            }}
          >
            {'JORDAN HILL'.split('').map((letter, idx) => {
              const isI = letter === 'I' && idx === 6;
              const delayMultiplier = isI ? 0 : idx < 6 ? idx : idx - 1;

              return (
                <div
                  key={idx}
                  style={{
                    fontSize: letterSize,
                    fontWeight: '900',
                    fontFamily: "'Playfair Display', serif",
                    color: '#ffffff',
                    textShadow: `
                      0 0 20px rgba(255,255,255,0.8),
                      0 20px 60px rgba(0,0,0,0.8),
                      -5px -5px 30px rgba(255,200,0,0.4),
                      inset -2px -2px 10px rgba(0,0,0,0.3)
                    `,
                    opacity: 0,
                    transform: `translateY(${isI ? 0 : 100}px) scale(${isI ? 1.2 : 1})`,
                    animation: `letterReveal 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.1 + delayMultiplier * 0.08}s forwards`,
                    filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.6))',
                    transformOrigin: 'center bottom',
                    lineHeight: '1',
                    ...(isI && {
                      animation: `stampReveal 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) 1.8s forwards`,
                      textShadow: `
                        0 0 30px rgba(255,255,100,1),
                        0 30px 80px rgba(255,100,0,0.6),
                        -8px -8px 40px rgba(255,200,0,0.5),
                        inset -2px -2px 10px rgba(0,0,0,0.4)
                      `,
                    }),
                  }}
                >
                  {letter}
                </div>
              );
            })}
          </div>
        )}

        {/* Subtitle */}
        {showLetters && (
          <div
            className="absolute"
            style={{
              fontSize: isMobile ? '16px' : '28px',
              fontFamily: "'Playfair Display', serif",
              color: '#ffffff',
              opacity: 0,
              animation: 'fadeInUp 1s ease-out 3.5s forwards',
              letterSpacing: isMobile ? '0.15em' : '0.3em',
              textShadow: '0 10px 30px rgba(0,0,0,0.6)',
              bottom: isMobile ? '40px' : '96px',
            }}
          >
            VISUAL ENGINEER
          </div>
        )}

        {/* Particle system for lamp impact */}
        {animationStage === 3 && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(15)].map((_, i) => {
              const randomColor = 200 + (i * 3.67); // Deterministic color based on index
              const randomDuration = 0.8 + (i * 0.027); // Deterministic duration
              const randomRotation = i * 24; // Deterministic rotation (15 particles * 24deg = 360deg)

              return (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    width: isMobile ? '4px' : '8px',
                    height: isMobile ? '4px' : '8px',
                    background: `rgba(255, ${randomColor}, 0, 0.8)`,
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    animation: `particleShatter ${randomDuration}s ease-out 3.2s forwards`,
                    transform: `
                      translateX(-50%)
                      translateY(-50%)
                      rotate(${randomRotation}deg)
                    `,
                  }}
                ></div>
              );
            })}
          </div>
        )}
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');

        @keyframes lampSway {
          0% {
            transform: translateX(-50%) translateY(calc(-50% - 400px + 50px)) scaleY(0.95);
          }
          50% {
            transform: translateX(-50%) translateY(calc(-50% - 400px + 50px)) scaleY(1.02);
          }
          100% {
            transform: translateX(-50%) translateY(calc(-50% - 400px + 50px)) scaleY(1);
          }
        }

        @keyframes lampHeadSquash {
          0% {
            transform: scaleY(1);
          }
          40% {
            transform: scaleY(1);
          }
          50% {
            transform: scaleY(0.85);
          }
          100% {
            transform: scaleY(1);
          }
        }

        @keyframes shadowSquash {
          0% {
            opacity: 0;
          }
          40% {
            opacity: 0;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            opacity: 0.6;
          }
        }

        @keyframes letterReveal {
          0% {
            opacity: 0;
            transform: translateY(100px) scale(0.8);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes stampReveal {
          0% {
            opacity: 0;
            transform: scale(0.3) scaleY(2);
          }
          30% {
            opacity: 0;
          }
          50% {
            opacity: 1;
            transform: scale(1.2) scaleY(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1) scaleY(1);
          }
        }

        @keyframes particleShatter {
          0% {
            opacity: 1;
            transform: translateX(-50%) translateY(-50%) translate(0, 0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateX(-50%) translateY(-50%) translate(
              calc(cos(var(--angle)) * 200px),
              calc(sin(var(--angle)) * 200px)
            )
            scale(0);
          }
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        * {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default PixarLampIntro;
