"use client";

import { useEffect } from 'react';

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

export function useKonamiCode(callback: () => void) {
  useEffect(() => {
    let keys: string[] = [];

    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();

      keys = [...keys, key].slice(-KONAMI_CODE.length);

      // Check if the sequence matches
      const matches = KONAMI_CODE.every((code, index) => {
        const inputKey = keys[index]?.toLowerCase();
        const targetKey = code.toLowerCase();
        return inputKey === targetKey;
      });

      if (matches) {
        callback();
        keys = []; // Reset after successful match
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [callback]);
}
