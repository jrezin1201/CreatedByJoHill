"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ParticleBackground, CursorTrail } from '@/components/effects';
import { useKonamiCode } from '@/hooks/useKonamiCode';

export function ClientEffects() {
  const router = useRouter();
  const [easterEggTriggered, setEasterEggTriggered] = useState(false);

  useKonamiCode(() => {
    if (!easterEggTriggered) {
      setEasterEggTriggered(true);
      // Redirect to signature showcase
      router.push('/signature');
    }
  });

  return (
    <>
      <ParticleBackground />
      <CursorTrail />
    </>
  );
}
