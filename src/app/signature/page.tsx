"use client";

import { useState } from 'react';
import { PixarLampIntro, CinematicSignature, PixarStyleSignature } from '@/modules/signature';
import { Button } from '@/components/ui/Button';

export default function SignaturePage() {
  const [activeSignature, setActiveSignature] = useState<'lamp' | 'cinematic' | 'pixar'>('lamp');
  const [key, setKey] = useState(0);

  const handleSignatureChange = (type: 'lamp' | 'cinematic' | 'pixar') => {
    setActiveSignature(type);
    setKey(prev => prev + 1); // Force re-render and animation restart
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-white">Jordan Hill - Signature Showcase</h1>
            <div className="flex gap-3">
              <Button
                size="sm"
                variant={activeSignature === 'lamp' ? 'primary' : 'secondary'}
                onClick={() => handleSignatureChange('lamp')}
              >
                Pixar Lamp
              </Button>
              <Button
                size="sm"
                variant={activeSignature === 'cinematic' ? 'primary' : 'secondary'}
                onClick={() => handleSignatureChange('cinematic')}
              >
                Cinematic
              </Button>
              <Button
                size="sm"
                variant={activeSignature === 'pixar' ? 'primary' : 'secondary'}
                onClick={() => handleSignatureChange('pixar')}
              >
                Pixar Style
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Signature Display */}
      <div className="pt-20">
        {activeSignature === 'lamp' && <PixarLampIntro key={key} />}
        {activeSignature === 'cinematic' && <CinematicSignature key={key} />}
        {activeSignature === 'pixar' && <PixarStyleSignature key={key} />}
      </div>

      {/* Info Panel */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-lg border-t border-white/10 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-white/70 text-sm">
            {activeSignature === 'lamp' && (
              <p>Pixar Lamp Intro - The iconic Pixar opening with lamp impact effect (8 second animation)</p>
            )}
            {activeSignature === 'cinematic' && (
              <p>Cinematic Signature - 7 individual effects + 3 global events cycling every 10 seconds</p>
            )}
            {activeSignature === 'pixar' && (
              <p>Pixar Style Signature - Photorealistic 3D rendering with cinema-grade lighting</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
