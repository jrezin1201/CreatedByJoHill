"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'purple' | 'blue' | 'pink' | 'cyan';
  hover?: boolean;
}

export function GlassCard({ children, className = '', glowColor = 'purple', hover = true }: GlassCardProps) {
  const glowColors = {
    purple: 'hover:shadow-purple-500/50',
    blue: 'hover:shadow-blue-500/50',
    pink: 'hover:shadow-pink-500/50',
    cyan: 'hover:shadow-cyan-500/50',
  };

  const borderColors = {
    purple: 'border-purple-500/20',
    blue: 'border-blue-500/20',
    pink: 'border-pink-500/20',
    cyan: 'border-cyan-500/20',
  };

  return (
    <motion.div
      whileHover={hover ? { scale: 1.02, y: -5 } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`
        relative overflow-hidden rounded-2xl
        bg-white/10 dark:bg-gray-900/30
        backdrop-blur-xl
        border ${borderColors[glowColor]}
        shadow-lg ${hover ? glowColors[glowColor] : ''}
        transition-all duration-300
        ${className}
      `}
    >
      {/* Neon glow effect on hover */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className={`absolute inset-0 bg-gradient-to-r from-${glowColor}-500/10 to-transparent blur-xl`} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
