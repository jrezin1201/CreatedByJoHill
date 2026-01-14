"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  Zap,
  Calendar,
  Trophy,
  Target,
  Github,
  Linkedin,
  Twitter,
  Activity,
} from "lucide-react";

interface CyberpunkHeroProps {
  totalProjects: number;
  completedDays: number;
  targetDays?: number;
}

export function CyberpunkHero({
  totalProjects,
  completedDays,
  targetDays = 30,
}: CyberpunkHeroProps) {
  const progressPercentage = Math.round((completedDays / targetDays) * 100);
  const [displayText, setDisplayText] = useState("");
  const fullText = `Building ${targetDays} projects, one day at a time`;

  // Typing effect for headline
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20 pb-20">
      {/* Scanline Overlay */}
      <div className="scanline-overlay"></div>

      {/* Data Stream Background */}
      <div className="data-stream">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="data-stream-column"
            style={{
              left: `${i * 5}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Cyber Grid Background Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-cyber-grid bg-grid"></div>
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0, 240, 255, 0.15), transparent 70%)",
            filter: "blur(80px)",
          }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 0, 170, 0.15), transparent 70%)",
            filter: "blur(80px)",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* System Status Badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8 justify-center sm:justify-start"
        >
          <div className="flex items-center gap-2 px-4 py-2 border border-cyber-cyan/30 rounded bg-cyber-cyan/5 backdrop-blur-sm neon-glow-cyan">
            <Terminal className="w-5 h-5 text-cyber-cyan animate-pulse" />
            <span className="text-sm font-mono text-cyber-cyan uppercase tracking-wider">
              System Online
            </span>
            <div className="w-2 h-2 rounded-full bg-cyber-lime animate-pulse shadow-neon-lime"></div>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 border border-cyber-magenta/30 rounded bg-cyber-magenta/5 backdrop-blur-sm">
            <Activity className="w-4 h-4 text-cyber-magenta" />
            <span className="text-xs font-mono text-cyber-magenta">
              Project a Day Challenge
            </span>
          </div>
        </motion.div>

        {/* Main Headline with Glitch + Typing Effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-10"
        >
          <h1
            className="text-5xl sm:text-6xl lg:text-8xl font-black mb-6 text-cyber-cyan glitch relative"
            data-text={fullText}
          >
            <span className="inline-block">
              {displayText}
              <span className="inline-block w-1 h-12 sm:h-16 lg:h-24 bg-cyber-cyan ml-2 animate-pulse"></span>
            </span>
          </h1>

          {/* Subtitle with Neon Glow */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-cyber-textMuted max-w-4xl mb-4 leading-relaxed">
            <span className="text-cyber-textAlt text-shadow-neon-cyan">
              Full-stack developer
            </span>{" "}
            documenting the journey of building{" "}
            <span className="text-cyber-magenta font-bold text-shadow-neon-magenta">
              {targetDays} production-ready projects
            </span>{" "}
            in {targetDays} days.
          </p>

          <p className="text-base sm:text-lg text-cyber-textMuted font-mono">
            <span className="text-cyber-lime">&gt;_</span> Each project showcases
            different tech stacks, patterns, and problem-solving approaches.
          </p>
        </motion.div>

        {/* HUD Stats Grid - Holographic Panels */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-4xl"
        >
          {/* Days Completed - Cyan Theme */}
          <div className="hud-card rounded-lg p-6 group cursor-pointer">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 rounded bg-cyber-cyan/10 border border-cyber-cyan/30 group-hover:shadow-neon-cyan transition-all">
                <Calendar className="w-6 h-6 text-cyber-cyan" />
              </div>
              <div>
                <h3 className="text-sm font-mono text-cyber-textMuted uppercase tracking-wider">
                  Days Complete
                </h3>
              </div>
            </div>
            <p className="text-5xl font-black text-cyber-cyan text-shadow-neon-cyan mb-1 glitch-number">
              {completedDays}
              <span className="text-2xl text-cyber-textMuted">/{targetDays}</span>
            </p>
            <div className="w-full h-1 bg-cyber-cyan/20 rounded-full mt-2 overflow-hidden">
              <div
                className="h-full bg-cyber-cyan shadow-neon-cyan transition-all duration-1000"
                style={{ width: `${(completedDays / targetDays) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Total Projects - Magenta Theme */}
          <div className="hud-card rounded-lg p-6 group cursor-pointer">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 rounded bg-cyber-magenta/10 border border-cyber-magenta/30 group-hover:shadow-neon-magenta transition-all">
                <Trophy className="w-6 h-6 text-cyber-magenta" />
              </div>
              <div>
                <h3 className="text-sm font-mono text-cyber-textMuted uppercase tracking-wider">
                  Total Projects
                </h3>
              </div>
            </div>
            <p className="text-5xl font-black text-cyber-magenta text-shadow-neon-magenta glitch-number">
              {totalProjects}
            </p>
            <div className="w-full h-1 bg-cyber-magenta/20 rounded-full mt-2 overflow-hidden">
              <div className="h-full bg-cyber-magenta shadow-neon-magenta w-full"></div>
            </div>
          </div>

          {/* Progress % - Lime Theme */}
          <div className="hud-card rounded-lg p-6 group cursor-pointer">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 rounded bg-cyber-lime/10 border border-cyber-lime/30 group-hover:shadow-neon-lime transition-all">
                <Target className="w-6 h-6 text-cyber-lime" />
              </div>
              <div>
                <h3 className="text-sm font-mono text-cyber-textMuted uppercase tracking-wider">
                  Progress
                </h3>
              </div>
            </div>
            <p className="text-5xl font-black text-cyber-lime text-shadow-neon-lime glitch-number">
              {progressPercentage}
              <span className="text-2xl">%</span>
            </p>
            <div className="w-full h-1 bg-cyber-lime/20 rounded-full mt-2 overflow-hidden">
              <div
                className="h-full bg-cyber-lime shadow-neon-lime transition-all duration-1000"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </motion.div>

        {/* Cyber Progress Bar with Energy Pulse */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12 max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-2">
            <Zap className="w-5 h-5 text-cyber-lime animate-pulse" />
            <span className="text-sm font-mono text-cyber-textMuted uppercase">
              Mission Progress
            </span>
          </div>
          <div className="cyber-progress-container">
            <div
              className="cyber-progress-fill"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-xs font-mono text-cyber-textMuted">
            <span>START</span>
            <span className="text-cyber-lime">{progressPercentage}% COMPLETE</span>
            <span>TARGET</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap gap-6 mb-12"
        >
          <a href="#projects" className="cyber-btn rounded-lg">
            <span className="relative z-10 flex items-center gap-2">
              <Terminal className="w-5 h-5" />
              View All Projects
            </span>
          </a>

          <a
            href="#contact"
            className="cyber-btn rounded-lg"
            style={{
              borderColor: "var(--cyber-magenta)",
              color: "var(--cyber-magenta)",
              boxShadow: "0 0 10px var(--glow-magenta)",
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Get in Touch
            </span>
          </a>
        </motion.div>

        {/* Social Icons with Neon Hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex gap-6"
        >
          {[
            { icon: Github, href: "https://github.com" },
            { icon: Linkedin, href: "https://linkedin.com" },
            { icon: Twitter, href: "https://twitter.com" },
          ].map(({ icon: Icon, href }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded border border-cyber-cyan/30 hover:border-cyber-cyan bg-cyber-cyan/5 hover:bg-cyber-cyan/10 transition-all neon-glow-cyan group"
            >
              <Icon className="w-6 h-6 text-cyber-cyan group-hover:scale-110 transition-transform" />
            </a>
          ))}
        </motion.div>

        {/* Footer Credits */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20 pt-8 border-t border-cyber-cyan/20"
        >
          <p className="text-sm font-mono text-cyber-textMuted text-center">
            <span className="text-cyber-cyan">&lt;/&gt;</span> Built with Next.js 15,
            TypeScript, Tailwind CSS, and Framer Motion{" "}
            <span className="text-cyber-lime">█</span>
          </p>
          <p className="text-xs font-mono text-cyber-textMuted/60 text-center mt-2">
            &copy; {new Date().getFullYear()} Electric Cyberpunk Portfolio
          </p>
        </motion.div>
      </div>
    </section>
  );
}
