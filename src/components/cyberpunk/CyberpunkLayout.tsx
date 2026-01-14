"use client";

import { useEffect } from 'react';
import '../../styles/cyberpunk.css';

interface CyberpunkLayoutProps {
  children: React.ReactNode;
}

export function CyberpunkLayout({ children }: CyberpunkLayoutProps) {
  useEffect(() => {
    // Add cyberpunk-theme class to body
    document.body.classList.add('cyberpunk-theme');

    return () => {
      // Cleanup on unmount
      document.body.classList.remove('cyberpunk-theme');
    };
  }, []);

  return <>{children}</>;
}
