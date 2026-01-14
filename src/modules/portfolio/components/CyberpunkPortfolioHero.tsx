"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Calendar, Trophy, Target, Github, Linkedin, Twitter } from "lucide-react";
import type { PortfolioHeroProps } from "../lib/types";

/**
 * ELECTRIC CYBERPUNK PORTFOLIO HERO
 * High-energy neon theme with:
 * - Scanline CRT overlay
 * - Glitch effects on headline
 * - Holographic HUD cards with 3D tilt
 * - Neon glow pulse animations
 * - Lime green progress bar with energy pulse
 * - Cyber buttons with color shift
 * - Terminal typing effect
 * - Matrix-style background particles
 */

export function CyberpunkPortfolioHero({
  totalProjects,
  completedDays,
  targetDays = 30,
}: PortfolioHeroProps) {
  const progressPercentage = Math.round((completedDays / targetDays) * 100);
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Featured Projects";

  // Typing effect on load
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // Stop cursor blink after typing completes
        setTimeout(() => setShowCursor(false), 500);
      }
    }, 80); // 80ms per character

    return () => clearInterval(typingInterval);
  }, []);

  // Cursor blink effect
  useEffect(() => {
    if (!showCursor) return;
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, [showCursor]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-cyber-bg">
      {/* Global Scanline Overlay */}
      <div className="scanline-overlay" />

      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-20" />

      {/* Glowing Particles / Data Streams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Vertical data streams (Matrix-style) */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 w-px h-full opacity-20"
            style={{
              left: `${i * 5}%`,
              background: 'linear-gradient(to bottom, transparent, rgba(0, 240, 255, 0.5), transparent)',
              animation: `float-down ${10 + i * 0.5}s linear infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-cyan rounded-full blur-3xl opacity-10 animate-cyber-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-magenta rounded-full blur-3xl opacity-10 animate-cyber-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-8 justify-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-mono uppercase tracking-widest border-2 border-cyber-cyan/50 rounded bg-cyber-bg/80 backdrop-blur-sm neon-glow-cyan text-cyber-cyan">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-lime opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-lime"></span>
            </span>
            ✦ Production-Ready Applications
          </span>
        </motion.div>

        {/* Main Headline with Glitch Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 text-center"
        >
          <h1
            className="glitch text-6xl sm:text-7xl lg:text-8xl font-black mb-6 text-cyber-cyan text-glow-cyan flicker"
            data-text={fullText}
            style={{ fontFamily: 'var(--font-mono), monospace' }}
          >
            {displayText}
            {showCursor && <span className="text-cyber-magenta animate-pulse">█</span>}
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl mb-12 max-w-4xl mx-auto text-center text-cyber-text font-light leading-relaxed"
        >
          I build <span className="text-cyber-cyan font-semibold">production-ready web applications</span> that solve
          real business problems. From <span className="text-cyber-magenta">financial analytics</span> to{" "}
          <span className="text-cyber-lime">enterprise operations</span>, each project combines modern tech stacks,
          clean architecture, and exceptional UX. All projects below are{" "}
          <span className="text-cyber-cyan font-bold text-shadow-glow-cyan">live and fully functional</span>.
        </motion.p>

        {/* HUD Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto"
        >
          {/* Days Complete */}
          <div className="hud-card glitch-hover rounded-lg p-6 group">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 rounded bg-cyber-cyan/10 border border-cyber-cyan/30 group-hover:shadow-neon-cyan transition-all">
                <Calendar className="w-6 h-6 text-cyber-cyan" />
              </div>
              <h3 className="text-sm font-mono uppercase tracking-wider text-cyber-textMuted">
                Days Complete
              </h3>
            </div>
            <p className="text-5xl font-black text-cyber-cyan text-shadow-glow-cyan">
              {completedDays}
              <span className="text-3xl text-cyber-textMuted">/{targetDays}</span>
            </p>
            <div className="mt-2 h-1 bg-cyber-cyan/20 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(completedDays / targetDays) * 100}%` }}
                transition={{ duration: 1.5, delay: 1 }}
                className="h-full bg-cyber-cyan shadow-neon-cyan"
              />
            </div>
          </div>

          {/* Total Projects */}
          <div className="hud-card glitch-hover rounded-lg p-6 group">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 rounded bg-cyber-magenta/10 border border-cyber-magenta/30 group-hover:shadow-neon-magenta transition-all">
                <Trophy className="w-6 h-6 text-cyber-magenta" />
              </div>
              <h3 className="text-sm font-mono uppercase tracking-wider text-cyber-textMuted">
                Total Projects
              </h3>
            </div>
            <p className="text-5xl font-black text-cyber-magenta text-shadow-glow-magenta">
              {totalProjects}
            </p>
            <div className="mt-2 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full ${
                    i < totalProjects ? 'bg-cyber-magenta shadow-neon-magenta' : 'bg-cyber-magenta/20'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Progress */}
          <div className="hud-card glitch-hover rounded-lg p-6 group">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 rounded bg-cyber-lime/10 border border-cyber-lime/30 group-hover:shadow-neon-lime transition-all">
                <Target className="w-6 h-6 text-cyber-lime" />
              </div>
              <h3 className="text-sm font-mono uppercase tracking-wider text-cyber-textMuted">
                Progress
              </h3>
            </div>
            <p className="text-5xl font-black text-cyber-lime text-shadow-glow-lime">
              {progressPercentage}
              <span className="text-2xl">%</span>
            </p>
            <div className="mt-2 text-xs font-mono text-cyber-textMuted flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-lime opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-lime"></span>
              </span>
              SYSTEM ONLINE
            </div>
          </div>
        </motion.div>

        {/* Cyber Progress Bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-12 max-w-4xl mx-auto"
        >
          <div className="cyber-progress-container">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 2, delay: 1.2, ease: "easeOut" }}
              className="cyber-progress-fill"
            />
          </div>
          <div className="flex justify-between mt-2 text-xs font-mono text-cyber-textMuted">
            <span>LOADING...</span>
            <span className="text-cyber-lime">{progressPercentage}% COMPLETE</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row justify-center gap-6 mb-12"
        >
          <a
            href="#projects"
            className="cyber-btn-filled rounded-lg inline-flex items-center justify-center"
          >
            <span className="relative z-10">View All Projects</span>
          </a>
          <a
            href="#contact"
            className="cyber-btn rounded-lg inline-flex items-center justify-center"
          >
            <span className="relative z-10">Get in Touch</span>
          </a>
        </motion.div>

        {/* Social Links with Neon Glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex justify-center gap-6"
        >
          {[
            { icon: Github, href: "https://github.com", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded border-2 border-cyber-cyan/30 hover:border-cyber-cyan neon-glow-cyan bg-cyber-bg/50 backdrop-blur-sm transition-all hover:scale-110 group"
              aria-label={label}
            >
              <Icon className="w-6 h-6 text-cyber-cyan group-hover:text-cyber-magenta transition-colors" />
            </a>
          ))}
        </motion.div>

        {/* Bottom Terminal Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-16 text-center"
        >
          <p className="text-xs font-mono text-cyber-textMuted mb-2">
            <span className="text-cyber-cyan">&gt;_</span> CYBERNETIC PORTFOLIO v2.0.26{" "}
            <span className="animate-pulse text-cyber-lime">█</span>
          </p>
          <p className="text-xs font-mono text-cyber-textMuted/60">
            SYSTEM STATUS: <span className="text-cyber-lime">OPERATIONAL</span> | PROJECTS LOADED:{" "}
            <span className="text-cyber-cyan">{totalProjects}</span> | UPTIME:{" "}
            <span className="text-cyber-magenta">{completedDays}D</span>
          </p>
        </motion.div>
      </div>

      {/* Custom CSS for data stream animation */}
      <style jsx>{`
        @keyframes float-down {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
