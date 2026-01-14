# Signature Module

Cinematic signature components featuring Pixar-style animations and visual effects.

## Components

### 1. PixarLampIntro
The iconic Pixar lamp opening animation with custom name reveal.

**Features:**
- 8-second cinematic intro
- Pixar lamp with realistic lighting and physics
- Animated letter reveal with stamp effect
- Fully mobile responsive (50% scaling on mobile)
- Particle effects on impact

**Usage:**
```tsx
import { PixarLampIntro } from '@/modules/signature';

<PixarLampIntro />
```

**Best for:** Homepage hero, portfolio intro, about page

---

### 2. CinematicSignature
Chaotic signature with 7 individual effects and 3 global events.

**Features:**
- 7 Individual Effects: Explosion, Video Clip, Samurai Slash, Drone Swarm, Construction, Character Cutout, Graveyard Rise
- 3 Global Events: Mass Explosion, Electric Shock, Vacuum Cannon
- Events cycle every 10 seconds
- Mobile responsive (text scales to 2.5rem on mobile)

**Usage:**
```tsx
import { CinematicSignature } from '@/modules/signature';

<CinematicSignature />
```

**Best for:** Main portfolio showcase, continuous visual story, centerpiece

---

### 3. PixarStyleSignature
Cinema-grade photorealistic signature with 3-point lighting.

**Features:**
- Photorealistic 3D text rendering
- 3-point cinematic lighting (key, fill, back)
- Volumetric shadows
- 3 Cinematic Events: Cinematic Zoom, Lighting Strike, Material Transform
- Subtle floating animations

**Usage:**
```tsx
import { PixarStyleSignature } from '@/modules/signature';

<PixarStyleSignature />
```

**Best for:** Premium portfolio sections, about page, luxury brand positioning

---

## Pages

### /signature
Showcase page with navigation between all three signature styles.

### /intro
Pixar Lamp intro with automatic redirect to homepage after 8 seconds.

---

## Mobile Responsiveness

All components are fully mobile responsive:

- **Breakpoint:** 768px (standard Tailwind `md:`)
- **Mobile scaling:** 50% size reduction on elements
- **Text sizes:** Automatically adjust from 7rem → 2.5rem
- **Touch-friendly:** Optimized padding and spacing
- **Performance:** Smooth 30-60fps on mobile devices

---

## Customization

To change the name in any component, edit the `name` variable:

```tsx
const name = 'Your Name Here';
```

To change colors, modify the gradient values in the component styles.

---

## Implementation Guide

Based on `/Users/jordanhill/Desktop/J-Sig/COMPLETE-IMPLEMENTATION-GUIDE.md`

All components are production-ready and require no additional configuration.
