"use client";

import React, { useState, useEffect } from 'react';

type EffectType = 'explosion' | 'videoClip' | 'swordSlice' | 'droneSwarm' | 'construction' | 'characterCutout' | 'graveyardRise';
type GlobalEventType = 'massExplosion' | 'electricShock' | 'vacuumCannon' | null;

interface LetterAnimation {
  effect: EffectType;
}

const CinematicSignatureWithEvents = () => {
  const name = 'Jordan Hill';
  const [letterAnimations, setLetterAnimations] = useState<Record<number, LetterAnimation>>({});
  const [globalEvent, setGlobalEvent] = useState<GlobalEventType>(null);
  const [eventTimer, setEventTimer] = useState(0);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Initialize animations on mount
  useEffect(() => {
    const effectKeys: EffectType[] = [
      'explosion',
      'videoClip',
      'swordSlice',
      'droneSwarm',
      'construction',
      'characterCutout',
      'graveyardRise',
    ];

    const newAnimations: Record<number, LetterAnimation> = {};
    name.split('').forEach((letter, idx) => {
      if (letter !== ' ') {
        newAnimations[idx] = {
          effect: effectKeys[Math.floor(Math.random() * effectKeys.length)],
        };
      }
    });
    setLetterAnimations(newAnimations);
  }, []);

  // Rotate effects every 3-5 seconds for each letter independently
  useEffect(() => {
    const effectKeys: EffectType[] = [
      'explosion',
      'videoClip',
      'swordSlice',
      'droneSwarm',
      'construction',
      'characterCutout',
      'graveyardRise',
    ];

    const intervals: NodeJS.Timeout[] = [];

    name.split('').forEach((letter, idx) => {
      if (letter !== ' ') {
        const randomDelay = Math.random() * 2000 + 500;
        const randomSpeed = 3000 + Math.random() * 2000;

        const timeoutId = setTimeout(() => {
          const intervalId = setInterval(() => {
            // Only update if no global event is active
            setLetterAnimations((prev) => {
              return {
                ...prev,
                [idx]: {
                  effect: effectKeys[Math.floor(Math.random() * effectKeys.length)],
                },
              };
            });
          }, randomSpeed);
          intervals.push(intervalId);
        }, randomDelay);

        intervals.push(timeoutId);
      }
    });

    return () => {
      intervals.forEach((id) => {
        clearInterval(id);
        clearTimeout(id);
      });
    };
  }, []);

  // Global events cycle - trigger them in sequence so they're predictable
  useEffect(() => {
    const eventSequence: Array<'massExplosion' | 'electricShock' | 'vacuumCannon'> = ['massExplosion', 'electricShock', 'vacuumCannon'];
    let eventIndex = 0;

    const triggerNextEvent = () => {
      const event = eventSequence[eventIndex % 3];
      setGlobalEvent(event);
      setEventTimer(0);
      eventIndex++;
    };

    // Trigger first event after 3 seconds
    const initialTimer = setTimeout(triggerNextEvent, 3000);

    // Then trigger every 10 seconds (8s event duration + 2s break)
    const eventCycle = setInterval(triggerNextEvent, 10000);

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
        const newTime = prev + 50;
        
        // Reset after event duration
        if (globalEvent === 'massExplosion' && newTime > 2500) {
          setGlobalEvent(null);
          return 0;
        }
        if (globalEvent === 'electricShock' && newTime > 3500) {
          setGlobalEvent(null);
          return 0;
        }
        if (globalEvent === 'vacuumCannon' && newTime > 4500) {
          setGlobalEvent(null);
          return 0;
        }
        
        return newTime;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [globalEvent]);

  const getEffectStyle = (effect: EffectType) => {
    const baseStyles = {
      transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
      fontSize: isMobile ? '2.5rem' : '7rem',
      fontWeight: '900',
      display: 'inline-block',
    };

    switch (effect) {
      case 'explosion':
        return {
          ...baseStyles,
          background: 'linear-gradient(135deg, #FF0000, #FF6B00, #FFFF00)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0 0 20px #FF0000) drop-shadow(0 0 40px #FF6B00)',
          textShadow: '0 0 30px #FF6B00',
        };

      case 'videoClip':
        return {
          ...baseStyles,
          background: 'linear-gradient(135deg, #00FFFF, #0099FF)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0 0 20px #00FFFF) drop-shadow(0 0 40px #0099FF)',
          border: '8px double #00FFFF',
          padding: '8px 16px',
          borderRadius: '8px',
        };

      case 'swordSlice':
        return {
          ...baseStyles,
          background: 'linear-gradient(90deg, #FFD700, #FFA500)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0 0 15px #FFD700)',
          textDecoration: 'line-through',
          textDecorationColor: '#FFD700',
          textDecorationThickness: '3px',
        };

      case 'droneSwarm':
        return {
          ...baseStyles,
          background: 'linear-gradient(45deg, #00FF00, #00FFAA)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0 0 20px #00FF00) drop-shadow(0 0 40px #00FFAA)',
          border: '3px dotted #00FF00',
          padding: '8px 12px',
          borderRadius: '4px',
        };

      case 'construction':
        return {
          ...baseStyles,
          background: 'linear-gradient(135deg, #FF8C00, #FFB347)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0 0 15px #FF8C00)',
          border: '4px dashed #FF8C00',
          padding: '8px 12px',
          borderRadius: '4px',
        };

      case 'characterCutout':
        return {
          ...baseStyles,
          background: 'linear-gradient(90deg, #FF1493, #FF69B4)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0 0 15px #FF1493)',
          border: '4px solid #FF1493',
          padding: '8px 12px',
          borderRadius: '8px',
          position: 'relative',
        };

      case 'graveyardRise':
        return {
          ...baseStyles,
          background: 'linear-gradient(180deg, #228B22, #006400)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0 0 20px #228B22) drop-shadow(0 0 40px #006400)',
          border: '4px solid #228B22',
          padding: '8px 12px',
          borderRadius: '4px',
        };

      default:
        return baseStyles;
    }
  };

  const getAnimationName = (effect: EffectType) => {
    switch (effect) {
      case 'explosion':
        return 'explode';
      case 'swordSlice':
        return 'slash';
      case 'droneSwarm':
        return 'swarm';
      case 'construction':
        return 'build';
      case 'characterCutout':
        return 'scissor';
      case 'graveyardRise':
        return 'rise';
      case 'videoClip':
        return 'bounce';
      default:
        return 'explode';
    }
  };

  const getGlobalEventStyle = (idx: number) => {
    if (!globalEvent) return {};

    if (globalEvent === 'massExplosion') {
      const delay = idx * 40;
      const elapsed = Math.max(0, eventTimer - delay);
      const progress = Math.min(1, elapsed / 1500);
      
      // Explosive outward motion
      const angle = (idx / 11) * Math.PI * 2;
      const distance = Math.pow(progress, 0.7) * 300; // Accelerates outward strongly
      const offsetX = Math.cos(angle) * distance;
      const offsetY = Math.sin(angle) * distance;
      
      // Scale: grow then shrink slightly
      const scalePhase = Math.min(1, progress * 2);
      const scale = 1 + Math.max(0, (1 - scalePhase) * 0.5) + Math.pow(progress, 1.5) * 0.8;
      
      // Rotation: fast spinning
      const rotate = progress * 1080;
      
      // Glow intensity
      const glowIntensity = Math.max(0, 1 - Math.pow(progress - 0.5, 2) * 2);
      
      // Fade at very end
      const opacity = progress < 0.9 ? 1 : (1 - (progress - 0.9) / 0.1);
      
      return {
        transform: `scale(${scale}) rotate(${rotate}deg) translate(${offsetX}px, ${offsetY}px)`,
        opacity: opacity,
        filter: `drop-shadow(0 0 ${30 * glowIntensity}px #FF6B00) drop-shadow(0 0 ${60 * glowIntensity}px #FF0000)`,
      };
    }

    if (globalEvent === 'electricShock') {
      const blueIntensity = eventTimer < 1500 ? 1 : Math.max(0, (3500 - eventTimer) / 2000);
      
      if (eventTimer < 1500) {
        // Freeze in blue
        return {
          background: 'linear-gradient(135deg, #0099FF, #00FFFF)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: `drop-shadow(0 0 ${30 * blueIntensity}px #00FFFF) drop-shadow(0 0 ${60 * blueIntensity}px #0099FF)`,
          transform: 'scaleX(1) scaleY(1)',
        };
      } else {
        // Return to normal
        const returnProgress = (eventTimer - 1500) / 2000;
        return {
          opacity: Math.max(0.3, 1 - returnProgress * 0.7),
        };
      }
    }

    if (globalEvent === 'vacuumCannon') {
      const phase1End = 2500; // Vacuum phase
      const phase2Start = 2500;
      const eventEnd = 5000;
      
      if (eventTimer < phase1End) {
        // Being sucked to left - DRAMATIC
        const vacuumProgress = Math.min(1, eventTimer / phase1End);
        const angle = (idx / 11) * Math.PI * 2;
        
        // Strong acceleration toward left
        const radiusDistance = 250 * Math.pow(vacuumProgress, 0.6);
        const leftPull = 450 * Math.pow(vacuumProgress, 1.3);
        
        const x = Math.cos(angle) * radiusDistance - leftPull;
        const y = Math.sin(angle) * radiusDistance * 0.8;
        const scale = Math.max(0.1, 1 - vacuumProgress * 0.8);
        
        return {
          transform: `translate(${x}px, ${y}px) scale(${scale}) rotate(${vacuumProgress * 1080}deg)`,
          opacity: Math.max(0.2, 1 - vacuumProgress * 0.7),
          filter: `drop-shadow(0 0 ${25 * vacuumProgress}px #00FFFF)`,
        };
      } else {
        // Being shot from right - EXTREMELY DRAMATIC
        const shootProgress = Math.min(1, (eventTimer - phase2Start) / (eventEnd - phase2Start));
        
        // Start from far right, accelerate across screen
        const easeProgress = shootProgress < 0.2 ? shootProgress / 0.2 : 1;
        const x = -800 + easeProgress * 1600; // Comes from far right, goes far left
        const y = (idx % 2 === 0 ? 1 : -1) * Math.sin(shootProgress * Math.PI * 4) * 80;
        const rotation = shootProgress * 1440;
        const scale = 0.5 + easeProgress * 0.5;
        
        return {
          transform: `translate(${x}px, ${y}px) scale(${scale}) rotate(${rotation}deg)`,
          opacity: Math.max(0, 1 - Math.pow(Math.max(0, shootProgress - 0.75), 2) * 4),
          filter: `drop-shadow(0 0 ${40 * easeProgress}px #FF00FF) drop-shadow(0 0 ${80 * easeProgress}px #FF1493)`,
        };
      }
    }

    return {};
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-4 md:p-8 overflow-hidden relative w-full">
      {/* Ultra Intense Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/50 via-purple-950/50 to-blue-950/50"></div>

        {/* Animated blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
        <div
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute -bottom-32 left-1/3 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"
          style={{ animationDelay: '4s' }}
        ></div>

        {/* Scanlines */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent animate-pulse"></div>
        </div>

        {/* Global Event Visual Effects */}
        {globalEvent === 'massExplosion' && (
          <>
            {/* Explosion shockwave */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(circle, rgba(255, 107, 53, ${0.6 * (1 - eventTimer / 2500)}) 0%, transparent 70%)`,
              }}
            ></div>
            {/* Light flash */}
            <div
              className="absolute inset-0 pointer-events-none bg-yellow-300"
              style={{
                opacity: Math.max(0, 0.8 - eventTimer / 300),
              }}
            ></div>
          </>
        )}

        {globalEvent === 'electricShock' && (
          <>
            {/* Electric field */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(circle, rgba(0, 255, 255, ${0.3 * (eventTimer < 1500 ? 1 : 0)}) 0%, transparent 80%)`,
              }}
            ></div>
            {/* Blue flash */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundColor: `rgba(0, 150, 255, ${Math.max(0, 0.4 - eventTimer / 4000)})`,
              }}
            ></div>
          </>
        )}

        {globalEvent === 'vacuumCannon' && (
          <>
            {/* Vacuum vortex on left */}
            {eventTimer < 2000 && (
              <>
                <div
                  className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none"
                  style={{
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: `radial-gradient(circle, rgba(0, 200, 255, ${0.6 * (1 - eventTimer / 2000)}) 0%, rgba(100, 200, 255, ${0.3 * (1 - eventTimer / 2000)}) 40%, transparent 70%)`,
                    boxShadow: `inset 0 0 60px rgba(0, 150, 255, ${0.9 * (1 - eventTimer / 2000)}), 0 0 80px rgba(0, 200, 255, ${0.6 * (1 - eventTimer / 2000)})`,
                    filter: `blur(${5 * (1 - eventTimer / 2000)}px)`,
                  }}
                ></div>
                {/* Vacuum spiral effect */}
                <div
                  className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none"
                  style={{
                    width: '250px',
                    height: '250px',
                    borderRadius: '50%',
                    border: `3px solid rgba(0, 255, 255, ${0.7 * (1 - eventTimer / 2000)})`,
                    animation: `spin 2s linear infinite`,
                    marginLeft: '25px',
                    marginTop: '-125px',
                  }}
                ></div>
              </>
            )}
            
            {/* Cannon on right - ABSOLUTELY MASSIVE */}
            {eventTimer > 2500 && (
              <>
                <div
                  className="absolute right-0 top-1/2 pointer-events-none select-none"
                  style={{
                    fontSize: '180px',
                    lineHeight: '1',
                    opacity: 1,
                    marginRight: '-60px',
                    marginTop: '-90px',
                    filter: 'drop-shadow(0 0 30px #FF00FF)',
                    animation: eventTimer < 3200 ? 'pulse 0.3s ease-in-out infinite' : 'none',
                    zIndex: 100,
                  }}
                >
                  🔫
                </div>
                {/* Massive cannon glow */}
                <div
                  className="absolute right-0 top-1/2 pointer-events-none"
                  style={{
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: `radial-gradient(circle, rgba(255, 0, 255, ${0.8}) 0%, rgba(255, 20, 147, ${0.4}) 40%, transparent 70%)`,
                    boxShadow: `0 0 150px rgba(255, 0, 255, 1), inset 0 0 80px rgba(255, 0, 255, 0.6)`,
                    marginRight: '-120px',
                    marginTop: '-150px',
                  }}
                ></div>
              </>
            )}
          </>
        )}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-2xl md:max-w-6xl">
        {/* Signature Display */}
        <div className="mb-20 text-center">
          <div className="inline-block relative">
            {/* Thick Border Container */}
            <div className="bg-gradient-to-br from-red-900 via-purple-900 to-blue-900 p-3 rounded-3xl border-4 border-yellow-500/60 shadow-2xl">
              {/* Inner container */}
              <div className="bg-black/90 backdrop-blur-xl rounded-2xl p-20 relative overflow-visible">
                {/* Letters Container */}
                <div className="flex justify-center items-center gap-0 min-h-40 flex-wrap">
                  {name.split('').map((letter, idx) => {
                    const anim = letterAnimations[idx];
                    if (!anim && letter === ' ') return <span key={idx}>{'\u00A0'}</span>;
                    if (!anim) return null;

                    const effectStyle = globalEvent ? { fontSize: '7rem', fontWeight: '900', display: 'inline-block' } : getEffectStyle(anim.effect);
                    const globalStyle = getGlobalEventStyle(idx);
                    const animName = getAnimationName(anim.effect);

                    return (
                      <div
                        key={idx}
                        className="relative group"
                        style={{
                          animation: globalEvent ? 'none' : `${animName} 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) infinite`,
                          animationDelay: globalEvent ? '0s' : `${idx * 0.08}s`,
                          ...globalStyle,
                        }}
                      >
                        {/* Effect Decoration */}
                        {anim.effect === 'explosion' && !globalEvent && (
                          <>
                            <div className="absolute -top-4 -left-2 w-2 h-2 bg-orange-500 rounded-full animate-ping"></div>
                            <div className="absolute -bottom-4 -right-2 w-2 h-2 bg-red-500 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
                          </>
                        )}

                        {anim.effect === 'droneSwarm' && !globalEvent && (
                          <>
                            <div className="absolute -top-3 -left-2 w-1.5 h-1.5 bg-lime-400 rounded-full animate-bounce"></div>
                            <div className="absolute -bottom-3 -right-2 w-1.5 h-1.5 bg-lime-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            <div className="absolute top-1/2 -left-4 w-1.5 h-1.5 bg-lime-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                          </>
                        )}

                        {anim.effect === 'swordSlice' && !globalEvent && (
                          <div className="absolute -inset-6 border-l-4 border-yellow-400 opacity-50 animate-pulse pointer-events-none"></div>
                        )}

                        {anim.effect === 'characterCutout' && !globalEvent && (
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-2xl animate-bounce">✂️</div>
                        )}

                        {anim.effect === 'graveyardRise' && !globalEvent && (
                          <>
                            <div className="absolute -top-4 left-0 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <div className="absolute -top-2 right-0 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                          </>
                        )}

                        {anim.effect === 'construction' && !globalEvent && (
                          <div className="absolute inset-0 border-2 border-dashed border-orange-500/50 rounded animate-spin" style={{ animationDuration: '3s' }}></div>
                        )}

                        {/* Letter */}
                        <span
                          style={{
                            ...effectStyle,
                            ...globalStyle,
                          }}
                        >
                          {letter}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-red-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent animate-pulse">
              JORDAN HILL
            </span>
          </h2>
          <p className="text-white/70 text-base md:text-xl font-bold mb-2">Cinematic Portfolio System</p>
          <p className="text-white/50 text-sm md:text-base">7 Individual Effects + 3 Global Events Every 12 Seconds</p>
        </div>

        {/* Event Indicators */}
        <div className="text-center mb-12">
          <div className="inline-flex gap-4 bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/10">
            <div className={`px-4 py-2 rounded transition-all ${globalEvent === 'massExplosion' ? 'bg-orange-500/60 border border-orange-400' : 'opacity-50'}`}>
              <span className="text-lg">💥 EXPLOSION</span>
            </div>
            <div className={`px-4 py-2 rounded transition-all ${globalEvent === 'electricShock' ? 'bg-cyan-500/60 border border-cyan-400' : 'opacity-50'}`}>
              <span className="text-lg">⚡ SHOCK</span>
            </div>
            <div className={`px-4 py-2 rounded transition-all ${globalEvent === 'vacuumCannon' ? 'bg-purple-500/60 border border-purple-400' : 'opacity-50'}`}>
              <span className="text-lg">🌪️ CANNON</span>
            </div>
          </div>
        </div>

        {/* Effect Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-gradient-to-br from-orange-900/40 to-red-900/20 backdrop-blur-lg rounded-lg p-4 border border-orange-500/40">
            <p className="text-orange-400 font-bold text-center text-sm">💥 Explosion</p>
            <p className="text-white/40 text-xs text-center mt-1">Individual effect</p>
          </div>
          <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/20 backdrop-blur-lg rounded-lg p-4 border border-cyan-500/40">
            <p className="text-cyan-400 font-bold text-center text-sm">🎬 Video Border</p>
            <p className="text-white/40 text-xs text-center mt-1">Individual effect</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-900/40 to-orange-900/20 backdrop-blur-lg rounded-lg p-4 border border-yellow-500/40">
            <p className="text-yellow-400 font-bold text-center text-sm">⚔️ Samurai</p>
            <p className="text-white/40 text-xs text-center mt-1">Individual effect</p>
          </div>
          <div className="bg-gradient-to-br from-lime-900/40 to-green-900/20 backdrop-blur-lg rounded-lg p-4 border border-lime-500/40">
            <p className="text-lime-400 font-bold text-center text-sm">🚁 Drones</p>
            <p className="text-white/40 text-xs text-center mt-1">Individual effect</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 text-center">
          <div className="bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/10">
            <p className="text-3xl font-black text-red-400">11</p>
            <p className="text-white/50 text-xs mt-1">Independent</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/10">
            <p className="text-3xl font-black text-purple-400">7</p>
            <p className="text-white/50 text-xs mt-1">Effects</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/10">
            <p className="text-3xl font-black text-cyan-400">3</p>
            <p className="text-white/50 text-xs mt-1">Global Events</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/10">
            <p className="text-3xl font-black text-pink-400">12s</p>
            <p className="text-white/50 text-xs mt-1">Cycle</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes explode {
          0% {
            transform: scale(0.3) rotateZ(-180deg);
            opacity: 0;
            filter: brightness(2);
          }
          60% {
            transform: scale(1.15) rotateZ(0deg);
            opacity: 1;
            filter: brightness(1.2);
          }
          100% {
            transform: scale(1) rotateZ(0deg);
            opacity: 1;
            filter: brightness(1);
          }
        }

        @keyframes slash {
          0%, 100% {
            transform: scaleX(1) skewX(0deg);
            opacity: 1;
          }
          50% {
            transform: scaleX(0.95) skewX(-8deg);
            opacity: 0.9;
          }
        }

        @keyframes swarm {
          0%, 100% {
            transform: scale(1) translateX(0);
            opacity: 1;
          }
          25% {
            transform: scale(1.12) translateX(8px) rotateZ(8deg);
            opacity: 0.95;
          }
          50% {
            transform: scale(0.95) translateX(-8px) rotateZ(-8deg);
            opacity: 0.9;
          }
          75% {
            transform: scale(1.08) translateX(5px) rotateZ(4deg);
            opacity: 0.95;
          }
        }

        @keyframes build {
          0%, 100% {
            transform: rotateZ(0deg) scaleY(1);
            opacity: 1;
          }
          25% {
            transform: rotateZ(1deg) scaleY(0.98);
            opacity: 0.95;
          }
          50% {
            transform: rotateZ(-1deg) scaleY(0.96);
            opacity: 0.9;
          }
          75% {
            transform: rotateZ(0.5deg) scaleY(0.99);
            opacity: 0.95;
          }
        }

        @keyframes scissor {
          0%, 100% {
            transform: scaleX(1) rotateZ(0deg);
            opacity: 1;
          }
          50% {
            transform: scaleX(0.92) rotateZ(12deg);
            opacity: 0.95;
          }
        }

        @keyframes rise {
          0% {
            transform: translateY(40px) rotateZ(180deg);
            opacity: 0;
            filter: brightness(0.5);
          }
          60% {
            transform: translateY(-8px) rotateZ(0deg);
            opacity: 1;
            filter: brightness(1.1);
          }
          100% {
            transform: translateY(0) rotateZ(0deg);
            opacity: 1;
            filter: brightness(1);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: scale(1) translateY(0);
            opacity: 1;
          }
          50% {
            transform: scale(1.08) translateY(-8px);
            opacity: 0.95;
          }
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -50px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(50px, 50px) scale(1.05);
          }
        }

        .animate-blob {
          animation: blob 8s infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            filter: brightness(1);
          }
          50% {
            transform: scale(1.1);
            filter: brightness(1.3);
          }
        }
      `}</style>
    </div>
  );
};

export default CinematicSignatureWithEvents;
