# ⚡ Cyberpunk Theme - Quick Reference Card

## 🎨 Color Classes

```html
<!-- Backgrounds -->
<div class="bg-cyber-bg">           Deep charcoal black (#0A0A0F)
<div class="bg-cyber-cyan/10">      Electric cyan 10% opacity
<div class="bg-cyber-magenta/10">   Hot magenta 10% opacity
<div class="bg-cyber-lime/10">      Lime green 10% opacity

<!-- Text Colors -->
<span class="text-cyber-text">        Bright off-white (#F0F4FF)
<span class="text-cyber-textAlt">     Cyan-tinted white (#E0F7FF)
<span class="text-cyber-textMuted">   Muted gray-cyan (#A0B0C0)
<span class="text-cyber-cyan">        Electric cyan (#00F0FF)
<span class="text-cyber-magenta">     Hot magenta (#FF00AA)
<span class="text-cyber-lime">        Lime green (#39FF14)

<!-- Borders -->
<div class="border-cyber-cyan/30">    Cyan border 30% opacity
<div class="border-cyber-magenta/30"> Magenta border 30% opacity
```

---

## ✨ Neon Glows

```html
<!-- Box Shadows -->
<div class="shadow-neon-cyan">        Standard cyan glow
<div class="shadow-neon-cyan-lg">     Large cyan glow
<div class="shadow-neon-magenta">     Standard magenta glow
<div class="shadow-neon-magenta-lg">  Large magenta glow
<div class="shadow-neon-lime">        Standard lime glow
<div class="shadow-hologram">         Holographic inset glow

<!-- Text Shadows (via custom plugin) -->
<h1 class="text-shadow-neon-cyan">    Cyan text glow
<h2 class="text-shadow-neon-magenta"> Magenta text glow
<p class="text-shadow-neon-lime">     Lime text glow
<span class="text-shadow-glitch">     RGB split glitch
```

---

## 🎬 Animations

```html
<!-- Glitch Effects -->
<h1 class="animate-glitch">           Simple glitch
<h1 class="animate-glitch-skew">      Skew glitch (10s loop)

<!-- Glow & Pulse -->
<div class="animate-glow-pulse">      Pulsing glow (2s)
<div class="animate-cyber-float">     Floating effect (3s)

<!-- System Effects -->
<div class="animate-scanline">        CRT scanline (8s)
<div class="animate-flicker">         Subtle flicker (3s)

<!-- Special -->
<div class="animate-data-stream">     Data stream fall (20s)
<div class="animate-typing">          Typing effect
```

---

## 🃏 Reusable CSS Classes

```html
<!-- Glitch Text (requires data-text attribute) -->
<h1 class="glitch" data-text="Your Text">
  Your Text
</h1>

<!-- HUD Card (holographic panel with 3D tilt) -->
<div class="hud-card rounded-lg p-6">
  Your content
</div>

<!-- Neon Glow Utilities -->
<div class="neon-glow-cyan">          Cyan glow + hover
<div class="neon-glow-magenta">       Magenta glow + hover

<!-- Cyber Button -->
<button class="cyber-btn rounded-lg">
  Click Me
</button>

<!-- Flicker Effect -->
<span class="flicker">
  Unstable text
</span>

<!-- Typing Effect -->
<span class="typing-text">
  Terminal command
</span>
```

---

## 🎯 Pre-built Components

### Cyberpunk Hero
```tsx
import { CyberpunkHero } from '@/components/cyberpunk';

<CyberpunkHero
  totalProjects={15}
  completedDays={15}
  targetDays={30}
/>
```

### Cyberpunk Layout Wrapper
```tsx
import { CyberpunkLayout } from '@/components/cyberpunk/CyberpunkLayout';

<CyberpunkLayout>
  {children}
</CyberpunkLayout>
```

### Scanline Overlay
```html
<div class="scanline-overlay"></div>
```

### Data Stream Background
```html
<div class="data-stream">
  {[...Array(20)].map((_, i) => (
    <div
      key={i}
      class="data-stream-column"
      style={{
        left: `${i * 5}%`,
        animationDelay: `${Math.random() * 5}s`
      }}
    />
  ))}
</div>
```

### Cyber Progress Bar
```html
<div class="cyber-progress-container">
  <div class="cyber-progress-fill" style="width: 75%"></div>
</div>
```

---

## 📐 Common Patterns

### Terminal Badge
```html
<div class="inline-flex items-center gap-2 px-4 py-2 border border-cyber-cyan/30 rounded bg-cyber-cyan/5 backdrop-blur-sm neon-glow-cyan">
  <Terminal class="w-4 h-4 text-cyber-cyan" />
  <span class="text-sm font-mono text-cyber-cyan uppercase">
    System Online
  </span>
  <div class="w-2 h-2 rounded-full bg-cyber-lime animate-pulse"></div>
</div>
```

### Cyber Divider
```html
<div class="w-full h-px bg-gradient-to-r from-transparent via-cyber-cyan to-transparent my-8"></div>
```

### Hologram Box
```html
<div class="relative p-6 rounded-lg border border-cyber-cyan/30">
  <div class="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 to-cyber-magenta/5 rounded-lg"></div>
  <div class="relative z-10">
    Content here
  </div>
</div>
```

### Stat Card
```html
<div class="hud-card rounded-lg p-6 group">
  <div class="flex items-center gap-4 mb-3">
    <div class="p-3 rounded bg-cyber-cyan/10 border border-cyber-cyan/30 group-hover:shadow-neon-cyan">
      <Calendar class="w-6 h-6 text-cyber-cyan" />
    </div>
    <h3 class="text-sm font-mono text-cyber-textMuted uppercase">
      Metric Name
    </h3>
  </div>
  <p class="text-5xl font-black text-cyber-cyan text-shadow-neon-cyan">
    42
  </p>
</div>
```

---

## 🎨 Gradients

```html
<!-- Neon Gradient -->
<div class="bg-neon-gradient">
  linear-gradient(135deg, #00F0FF 0%, #FF00AA 100%)
</div>

<!-- Cyber Radial -->
<div class="bg-cyber-radial">
  radial-gradient(circle, rgba(0,240,255,0.1), transparent 70%)
</div>

<!-- Cyber Grid -->
<div class="bg-cyber-grid bg-grid opacity-20">
  Grid pattern overlay
</div>
```

---

## 🔧 Utility Modifiers

```html
<!-- Opacity -->
<div class="bg-cyber-cyan/10">    10% opacity
<div class="bg-cyber-cyan/20">    20% opacity
<div class="bg-cyber-cyan/30">    30% opacity

<!-- Hover States -->
<div class="hover:shadow-neon-cyan-lg">
<div class="group-hover:shadow-neon-magenta">
<div class="hover:text-cyber-magenta">

<!-- Responsive -->
<div class="text-base sm:text-lg lg:text-xl">
<div class="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
```

---

## 💡 Pro Tips

### Combine Effects
```html
<h1 class="glitch text-cyber-cyan text-shadow-neon-cyan animate-glow-pulse" data-text="Epic">
  Epic
</h1>
```

### Layered Glows
```html
<div class="shadow-neon-cyan hover:shadow-neon-cyan-lg transition-all duration-300">
  Smooth glow transition
</div>
```

### Backdrop Blur
```html
<div class="backdrop-blur-sm bg-cyber-cyan/5 border border-cyber-cyan/30">
  Frosted glass effect
</div>
```

### 3D Perspective
```html
<div class="perspective-1000">
  <div class="transform hover:rotateY-5 hover:rotateX-5 transition-transform">
    3D tilt card
  </div>
</div>
```

---

## 📱 Responsive Modifiers

```html
<!-- Show/hide based on screen size -->
<div class="hidden sm:block">          Desktop only
<div class="block sm:hidden">          Mobile only

<!-- Conditional styling -->
<h1 class="text-4xl sm:text-6xl lg:text-8xl">
<div class="p-4 sm:p-6 lg:p-8">
```

---

## ⚡ Quick Copy-Paste Snippets

### Button
```html
<button class="cyber-btn rounded-lg px-6 py-3">
  <span class="flex items-center gap-2">
    <Zap class="w-5 h-5" />
    Action
  </span>
</button>
```

### Badge
```html
<span class="px-3 py-1 text-xs font-mono bg-cyber-cyan/10 border border-cyber-cyan/30 rounded text-cyber-cyan">
  TAG
</span>
```

### Icon Button
```html
<button class="p-3 rounded border border-cyber-cyan/30 hover:border-cyber-cyan bg-cyber-cyan/5 hover:bg-cyber-cyan/10 transition-all neon-glow-cyan">
  <Github class="w-6 h-6 text-cyber-cyan" />
</button>
```

### Section Header
```html
<div class="mb-12">
  <h2 class="text-4xl font-black text-cyber-cyan glitch mb-4" data-text="Section">
    Section
  </h2>
  <div class="w-full h-px bg-gradient-to-r from-transparent via-cyber-cyan to-transparent"></div>
</div>
```

---

## 🎯 Color Combinations

```
Cyan + Magenta  = Classic cyberpunk contrast
Cyan + Lime     = High-tech + success
Magenta + Lime  = Bold + energetic
Cyan + Purple   = Retro futuristic
```

---

**⚡ Save this for quick reference when building cyberpunk UIs!**
