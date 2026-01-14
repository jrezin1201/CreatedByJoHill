"use client";

import { useEffect, useState } from 'react';

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
  const [keys, setKeys] = useState<string[]>([]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();

      setKeys((prevKeys) => {
        const newKeys = [...prevKeys, key].slice(-KONAMI_CODE.length);

        // Check if the sequence matches
        const matches = KONAMI_CODE.every((code, index) => {
          const inputKey = newKeys[index]?.toLowerCase();
          const targetKey = code.toLowerCase();
          return inputKey === targetKey;
        });

        if (matches) {
          callback();
          return []; // Reset after successful match
        }

        return newKeys;
      });
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [callback]);
}
