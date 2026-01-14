# 🌃 Electric Cyberpunk Neon Theme - Implementation Guide

Transform your portfolio into a high-energy, Blade Runner-inspired cyberpunk experience!

---

## 🎨 Color Palette

```css
Deep Charcoal Black:  #0A0A0F  (background)
Electric Cyan:        #00F0FF  (primary neon accent)
Hot Magenta:          #FF00AA  (secondary accent)
Lime Green:           #39FF14  (highlights/success)
Soft Purple-Gray:     #4A148C  (muted accents)
Bright Off-White:     #F0F4FF  (primary text)
Cyan-Tinted White:    #E0F7FF  (alt text)
Muted Gray-Cyan:      #A0B0C0  (secondary text)
```

---

## 📦 Files Created

### 1. **Tailwind Configuration**
`tailwind.config.cyberpunk.js`
- Custom cyberpunk color palette
- Neon glow box shadows
- Glitch & scanline animations
- Text shadow utilities
- Perspective transformations

### 2. **Global CSS Styles**
`src/styles/cyberpunk.css`
- Scanline overlay (CRT effect)
- Glitch animations (RGB split + flicker)
- Holographic HUD card styles
- Cyber progress bar with energy pulse
- Neon button styles
- Data stream background
- Typing effect animations

### 3. **Components**
```
src/components/cyberpunk/
├── CyberpunkHero.tsx       - Main hero section
├── CyberpunkLayout.tsx     - Theme wrapper
└── index.ts                - Exports
```

---

## 🚀 Quick Start

### Step 1: Update Tailwind Config

Replace your `tailwind.config.js` with the cyberpunk version:

```bash
cp tailwind.config.cyberpunk.js tailwind.config.js
```

Or merge the cyberpunk theme into your existing config:

```javascript
// In your tailwind.config.js, extend with:
const cyberpunkColors = {
  cyber: {
    bg: '#0A0A0F',
    cyan: '#00F0FF',
    magenta: '#FF00AA',
    lime: '#39FF14',
    // ... rest of colors
  }
}
```

### Step 2: Import Cyberpunk CSS

Add to your `src/app/globals.css` or create a new import:

```css
@import './styles/cyberpunk.css';
```

Or import directly in your layout:

```typescript
import '@/styles/cyberpunk.css';
```

### Step 3: Use the CyberpunkHero

Replace your existing hero component:

```typescript
// src/app/page.tsx
import { CyberpunkHero } from '@/components/cyberpunk';

export default async function HomePage() {
  const projects = await getProjects();

  return (
    <div className="min-h-screen bg-cyber-bg">
      <CyberpunkHero
        totalProjects={projects.length}
        completedDays={projects.length}
        targetDays={30}
      />
      {/* Rest of your page */}
    </div>
  );
}
```

### Step 4: Add Cyberpunk Layout Wrapper (Optional)

Wrap your entire app to apply cyberpunk theme globally:

```typescript
// src/app/layout.tsx
import { CyberpunkLayout } from '@/components/cyberpunk/CyberpunkLayout';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CyberpunkLayout>
          {children}
        </CyberpunkLayout>
      </body>
    </html>
  );
}
```

---

## 🎯 Key Features Implemented

### ✨ Visual Effects

1. **Scanline Overlay**
   - Horizontal CRT-style scanlines
   - Animated slowly downward
   - Subtle moving beam effect
   - CSS-only, no JavaScript

2. **Glitch Effects**
   - RGB split on headline
   - Random skew animations
   - Flickering (subtle)
   - Data attributes for glitch text

3. **Neon Glows**
   - Cyan, Magenta, Lime variants
   - Pulse on hover
   - Multiple shadow layers
   - Performance-optimized

4. **Data Stream Background**
   - Matrix-style falling characters
   - 20 vertical streams
   - Random timing/delays
   - Low opacity overlay

5. **Holographic HUD Cards**
   - 3D tilt on hover
   - Neon border glow
   - Inner hologram effect
   - Perspective transformations

### 🎬 Animations

1. **Typing Effect**
   - Terminal-style text reveal
   - Blinking cursor
   - Configurable speed
   - 80ms per character default

2. **Progress Bar**
   - Lime green energy fill
   - Shimmer effect
   - Trailing pulse
   - Smooth transitions

3. **Button Hovers**
   - Color shift (cyan → magenta)
   - Scale up effect
   - Sweep light effect
   - Neon glow expansion

4. **Card Interactions**
   - 3D tilt (rotateX/rotateY)
   - Lift effect (translateY)
   - Border glow activation
   - Inner hologram reveal

---

## 🎨 Customization

### Change Colors

Edit CSS variables in `cyberpunk.css`:

```css
:root {
  --cyber-cyan: #00F0FF;      /* Your custom cyan */
  --cyber-magenta: #FF00AA;   /* Your custom magenta */
  --cyber-lime: #39FF14;      /* Your custom lime */
}
```

### Adjust Glitch Intensity

Modify animation in `cyberpunk.css`:

```css
@keyframes glitch-anim {
  /* Increase transform values for more chaos */
  20% { transform: translateX(-5px); }  /* Was -3px */
  40% { transform: translateX(5px); }   /* Was 3px */
}
```

### Scanline Speed

Change animation duration:

```css
.scanline-overlay::before {
  animation: scanline 8s linear infinite; /* Slower: 12s, Faster: 4s */
}
```

### Typing Speed

Adjust character delay in `CyberpunkHero.tsx`:

```typescript
const interval = setInterval(() => {
  // ...
}, 80);  // Change to 50ms for faster, 120ms for slower
```

---

## 📱 Responsive Design

All effects are mobile-optimized:

- **Breakpoint:** 768px
- **Mobile adjustments:**
  - Smaller text sizes
  - Reduced glow intensity
  - No 3D tilt on touch devices
  - Simplified animations
  - Touch-friendly button sizes

### Mobile-specific CSS:

```css
@media (max-width: 768px) {
  .hud-card:hover {
    transform: translateY(-4px); /* Less tilt */
  }

  .cyber-btn {
    padding: 0.6rem 1.5rem; /* Smaller buttons */
  }
}
```

---

## ♿ Accessibility

### High Contrast Mode

Cyberpunk theme respects user preferences:

```css
@media (prefers-contrast: high) {
  .hud-card {
    border-width: 2px;
    border-color: var(--cyber-cyan);
  }
}
```

### Reduced Motion

Add to your CSS for accessibility:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Keyboard Navigation

All interactive elements are keyboard accessible:
- Buttons: Tab + Enter
- Links: Tab + Enter
- Cards: Focusable with visible outline

---

## 🚀 Performance

### Optimization Tips

1. **GPU Acceleration**
   ```css
   .hud-card {
     will-change: transform;
     transform: translateZ(0);
   }
   ```

2. **Reduce Scanline Complexity**
   ```css
   /* Lower opacity for better performance */
   .scanline-overlay::before {
     opacity: 0.3; /* Was 0.6 */
   }
   ```

3. **Limit Data Streams**
   ```typescript
   // Reduce from 20 to 10 on mobile
   {[...Array(isMobile ? 10 : 20)].map((_, i) => (...))}
   ```

4. **Debounce Hover Effects**
   - Use CSS transitions instead of JS
   - Prefer `transform` over `top/left`
   - Use `will-change` sparingly

---

## 🎯 Usage Examples

### Cyberpunk Button

```typescript
<button className="cyber-btn rounded-lg">
  Launch Project
</button>
```

### HUD Card

```typescript
<div className="hud-card rounded-lg p-6">
  <h3 className="text-cyber-cyan">Status: Online</h3>
  <p className="text-cyber-textMuted">System operational</p>
</div>
```

### Glitch Text

```typescript
<h1 className="glitch text-cyber-cyan" data-text="Cyberpunk">
  Cyberpunk
</h1>
```

### Neon Glow Element

```typescript
<div className="neon-glow-cyan p-4 border border-cyber-cyan rounded">
  Neon Card
</div>
```

### Progress Bar

```html
<div className="cyber-progress-container">
  <div className="cyber-progress-fill" style="width: 75%"></div>
</div>
```

---

## 🎨 Additional Components

### Cyberpunk Badge

```typescript
<div className="inline-flex items-center gap-2 px-4 py-2 border border-cyber-cyan/30 rounded bg-cyber-cyan/5 backdrop-blur-sm neon-glow-cyan">
  <Terminal className="w-4 h-4 text-cyber-cyan" />
  <span className="text-sm font-mono text-cyber-cyan uppercase">
    System Online
  </span>
</div>
```

### Cyber Divider

```typescript
<div className="w-full h-px bg-gradient-to-r from-transparent via-cyber-cyan to-transparent my-8"></div>
```

### Hologram Box

```typescript
<div className="relative p-6 rounded-lg border border-cyber-cyan/30">
  <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 to-cyber-magenta/5 rounded-lg"></div>
  <div className="relative z-10">
    Your content here
  </div>
</div>
```

---

## 🔥 Advanced Features

### Terminal Prompt Animation

```typescript
<div className="font-mono text-cyber-lime">
  <span className="text-cyber-lime">&gt;_</span>
  <span className="typing-text">npm run dev</span>
</div>
```

### Flickering Text

```typescript
<span className="flicker text-cyber-cyan">
  Unstable Connection
</span>
```

### Cyber Grid Background

```typescript
<div className="bg-cyber-grid bg-grid opacity-20"></div>
```

---

## 📊 Tailwind Utility Classes

### Custom Cyber Colors

```html
<div className="bg-cyber-bg text-cyber-text">
<div className="bg-cyber-cyan/10 text-cyber-cyan">
<div className="border-cyber-magenta text-cyber-magenta">
<div className="text-cyber-lime">
```

### Neon Shadows

```html
<div className="shadow-neon-cyan">
<div className="shadow-neon-magenta-lg">
<div className="shadow-hologram">
```

### Text Shadows

```html
<h1 className="text-shadow-neon-cyan">
<h2 className="text-shadow-neon-magenta">
<p className="text-shadow-glitch">
```

### Animations

```html
<div className="animate-glitch">
<div className="animate-glow-pulse">
<div className="animate-cyber-float">
<div className="animate-flicker">
```

---

## 🛠️ Troubleshooting

### Glitch Effect Not Working

Make sure you have the `data-text` attribute:

```html
<h1 className="glitch" data-text="Your Text">
  Your Text
</h1>
```

### Scanlines Not Visible

Check z-index and opacity:

```css
.scanline-overlay {
  z-index: 9999;
  opacity: 0.6;
}
```

### Neon Glow Too Intense

Reduce shadow opacity:

```css
.neon-glow-cyan {
  box-shadow: 0 0 10px rgba(0, 240, 255, 0.3); /* Was 0.5 */
}
```

### Performance Issues

1. Reduce data stream count
2. Lower scanline opacity
3. Disable glitch on mobile
4. Use `will-change` sparingly

---

## 🎯 Full Page Example

```typescript
import { CyberpunkHero } from '@/components/cyberpunk';
import '@/styles/cyberpunk.css';

export default function CyberpunkPage() {
  return (
    <div className="min-h-screen bg-cyber-bg">
      {/* Scanline overlay */}
      <div className="scanline-overlay"></div>

      {/* Hero */}
      <CyberpunkHero
        totalProjects={15}
        completedDays={15}
        targetDays={30}
      />

      {/* Projects section with cyber styling */}
      <section className="relative z-10 px-4 py-20">
        <h2 className="text-4xl font-black text-cyber-cyan glitch mb-12" data-text="Projects">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project cards */}
        </div>
      </section>
    </div>
  );
}
```

---

## 📚 Resources

- **Fonts:** Orbitron, Rajdhani, Inter (Google Fonts)
- **Icons:** Lucide React (already installed)
- **Animations:** Framer Motion (already installed)
- **Inspiration:** Blade Runner 2049, Cyberpunk 2077, Ghost in the Shell

---

## ✅ Checklist

- [ ] Replace/merge Tailwind config
- [ ] Import cyberpunk.css
- [ ] Add CyberpunkHero to homepage
- [ ] Test on mobile devices
- [ ] Check accessibility (keyboard nav)
- [ ] Optimize performance
- [ ] Add custom fonts (optional)
- [ ] Deploy and enjoy! 🚀

---

**Created with 💜 for Electric Cyberpunk Portfolios**

Transform your portfolio into a neon-soaked, high-energy cyberpunk experience that screams "creative full-stack developer building daily"!
