---
name: RelayPaddle Lite Design System
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#37393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#849495'
  outline-variant: '#3a494b'
  surface-tint: '#00dbe7'
  primary: '#e1fdff'
  on-primary: '#00363a'
  primary-container: '#00f2ff'
  on-primary-container: '#006a71'
  inverse-primary: '#00696f'
  secondary: '#fface8'
  on-secondary: '#5e0053'
  secondary-container: '#ff24e4'
  on-secondary-container: '#520049'
  tertiary: '#f7f6ff'
  on-tertiary: '#2c303a'
  tertiary-container: '#d7dae8'
  on-tertiary-container: '#5c5f6b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#74f5ff'
  primary-fixed-dim: '#00dbe7'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#ffd7f0'
  secondary-fixed-dim: '#fface8'
  on-secondary-fixed: '#3a0033'
  on-secondary-fixed-variant: '#840076'
  tertiary-fixed: '#dfe2ef'
  tertiary-fixed-dim: '#c3c6d3'
  on-tertiary-fixed: '#181b25'
  on-tertiary-fixed-variant: '#434751'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '900'
    lineHeight: 52px
    letterSpacing: -0.02em
  display-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '900'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-base:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  score-xl:
    fontFamily: Space Mono
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: 0.05em
  timer-md:
    fontFamily: Space Mono
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 20px
  label-caps:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 12px
  margin-safe: 16px
  hud-padding: 8px
---

## Brand & Style
The design system is built on a high-velocity, "Modern Retro" aesthetic. It captures the frantic energy of 80s arcade cabinets through a contemporary lens, emphasizing responsiveness and digital precision. The brand personality is competitive, electric, and unapologetically bold.

The visual style blends **Glassmorphism** with **High-Contrast/Bold** elements. Backgrounds are deep and immersive, while foreground elements utilize vibrant glow effects and semi-transparent "HUD" (Heads-Up Display) panels. This creates a clear sense of depth, ensuring that critical game data appears to float above the primary playfield.

## Colors
The palette is rooted in a "Deep Space" environment to maximize the luminance of neon accents. 

- **Primary (Neon Cyan):** Used for interactive elements, player progress, and primary actions. It represents the "active" state of the system.
- **Secondary (Electric Magenta):** Reserved for high-intensity moments, such as combo multipliers, rare achievements, and critical alerts.
- **Background (Deep Space Navy):** The foundational canvas. It provides the necessary contrast for glowing effects.
- **Neutral (White):** Used sparingly for high-readability text and icons to ensure no eye strain during fast-paced play.

## Typography
The system utilizes a dual-font strategy. **Inter** provides a modern, geometric foundation for all structural UI and instructional text, utilizing heavy weights to maintain impact. 

**Space Mono** is used for all dynamic data—scores, timers, and technical labels. The monospaced nature ensures that jumping numbers do not cause layout shifts, maintaining a stable "instrument panel" feel. All "Score" and "Timer" roles should be treated with a slight outer glow in the primary color to simulate a CRT or LED display.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy for the central playfield to ensure consistent game physics, while the HUD elements utilize a **No Grid** contextual placement to hug the corners of the screen.

Spacing is intentionally compact. We use a 4px baseline grid to keep elements tight, maximizing the screen real estate for the game area. 
- **Mobile:** Elements are docked to the edges with 16px safe-area margins.
- **Desktop:** The playfield is centered with a max-width of 1200px, flanked by floating HUD panels.
- **Gutters:** Tight 12px gutters between UI panels to maintain a sense of high density.

## Elevation & Depth
Depth in this design system is achieved through **Glassmorphism** and **Luminous Outlines** rather than traditional shadows.

1.  **Level 0 (Base):** Deep Space Navy background.
2.  **Level 1 (Playfield):** Defined by a 2px solid primary-colored border with a 10px blur glow.
3.  **Level 2 (HUD Overlays):** Semi-transparent surfaces (Background Blur: 12px, Opacity: 20%) with a thin 1px white border at 10% opacity.
4.  **Level 3 (Modals/Popups):** Higher opacity glass with intense Magenta outer glows to signal a pause in gameplay.

## Shapes
The shape language is sharp and technical. We use "Soft" (0.25rem) corner radii for most components to maintain a modern feel without losing the aggressive edge of an arcade machine. 

Interactive elements like buttons should use the standard `rounded` (0.25rem) setting, while large HUD containers may use `rounded-lg` (0.5rem) to slightly soften the overall interface frame.

## Components

### Buttons
Primary buttons are high-contrast Cyan blocks with black text. They feature a 2px Cyan glow that intensifies on hover. Secondary buttons use a "Ghost" style with a Cyan border and no fill.

### HUD Chips
Small, glass-morphic containers used for showing "Current Streak" or "Level." These use `Space Mono` at the `label-caps` size.

### Lists (Leaderboards)
Leaderboard rows are separated by 1px faint dividers. The "Top 3" entries feature a Secondary (Magenta) color accent on their rank number to denote prestige.

### Input Fields
Used for player name entry. These are dark, inset boxes with a 1px Primary border. The cursor should be a solid Cyan block that blinks to mimic a command-line interface.

### Cards (Game Modes)
Cards use the Level 2 Elevation (Glassmorphism). On hover, the border color shifts from Primary (Cyan) to Secondary (Magenta) to indicate selection.

### Combo Meter
A custom component consisting of a vertical bar that fills with Magenta. At 100%, the entire bar should pulse with a white outer glow.