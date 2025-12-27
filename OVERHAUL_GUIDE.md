# Shrey Digital - Cinematic Dark Overhaul

## 🎬 Overview

This project has been transformed to match the aesthetic and interaction quality of visualvibeco.in with a **Cinematic Dark** theme featuring electric purple (#7c3aed) and neon blue (#3b82f6) accents.

## ✨ Key Features Implemented

### 1. Custom Cursor System
- **Component**: `components/cursor-effect.tsx`
- Small white dot that trails the mouse with smooth easing
- Expands into a larger transparent ring when hovering over links/buttons
- Uses `mix-blend-difference` for visual appeal
- Automatically detects interactive elements

### 2. Video Hero Section
- **Component**: `components/sections/video-hero.tsx`
- Full-screen background video with dark overlay
- Massive headline: "Powering Bold Beginnings"
- Animated words that fade in/out: "PLAN", "PRODUCE", "PERFORM"
- Smooth scroll indicator with animation
- Framer Motion animations for all elements

### 3. Interactive Services Grid
- **Component**: `components/sections/services-grid.tsx`
- Bento-style dark grid with 6 service cards
- Animated gradient borders that glow on hover
- Icons scale and rotate on hover
- "Enquire Now" button slides up on hover
- Services include: Brand Strategy, Content Production, Growth Marketing, Social Media, SEO & Analytics, Design & UX

### 4. Stats Section with Count-Up Animation
- **Component**: `components/sections/stats-section.tsx`
- Three counters: 140+ Projects, 150+ Clients, 14 Team
- Numbers count up from 0 when scrolled into view
- Gradient text styling
- Framer Motion scroll-triggered animations

### 5. Smooth Scrolling
- **Component**: `components/smooth-scroll-provider.tsx`
- Integrated Lenis for buttery smooth scroll
- Configured with optimal easing and duration
- Wraps the entire application in `layout.tsx`

### 6. Cinematic Dark Theme
- **File**: `app/globals.css`
- Pure black background (#000000)
- High-contrast white text
- Electric Purple (#7c3aed) and Neon Blue (#3b82f6) accents
- Custom utility classes for gradient text and glows
- Hidden default cursor globally (`cursor: none !important`)

## 🎨 Color Palette

```css
--background: #000000 (Pure Black)
--foreground: #FFFFFF (White)
--primary: #7c3aed (Electric Purple)
--secondary: #3b82f6 (Neon Blue)
--accent-gradient: from-purple-600 via-blue-500 to-purple-600
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Animation**: Framer Motion
- **Styling**: Tailwind CSS v3
- **Icons**: Lucide React
- **Smooth Scroll**: Lenis
- **TypeScript**: Full type safety

## 📦 New Dependencies Installed

```bash
npm install lenis
```

## 📁 File Structure

```
agency-site/
├── app/
│   ├── globals.css (Updated - Cinematic Dark Theme)
│   ├── layout.tsx (Updated - Added SmoothScrollProvider)
│   └── page.tsx (Updated - New sections)
├── components/
│   ├── cursor-effect.tsx (Updated - Custom cursor)
│   ├── navbar.tsx (Updated - Gradient logo and button)
│   ├── smooth-scroll-provider.tsx (New - Lenis integration)
│   └── sections/
│       ├── video-hero.tsx (New - Video background hero)
│       ├── services-grid.tsx (New - Interactive services)
│       ├── stats-section.tsx (New - Count-up stats)
│       ├── work-section.tsx (Updated - Dark theme)
│       └── contact.tsx (Updated - Dark theme)
```

## 🚀 Running the Project

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to see the site.

## 🎯 Component Features

### CursorEffect
- Smooth trailing with requestAnimationFrame
- Automatic hover detection on links/buttons
- Blend mode effects for unique visual style

### VideoHero
- Placeholder video URL (replace with your own)
- Cycling animated words with timing control
- Responsive text sizing
- Scroll indicator animation

### ServicesGrid
- Hover-triggered gradient border animation
- Icon animations on hover
- Slide-up button reveal
- Responsive grid layout (1/2/3 columns)

### StatsSection
- Scroll-triggered count-up animation
- Configurable animation duration and easing
- Gradient text for numbers
- Staggered entrance animations

### SmoothScrollProvider
- Lenis configuration with optimal settings
- Global smooth scroll behavior
- RAF-based animation loop

## 🎨 Custom CSS Utilities

Added to `globals.css`:

```css
.gradient-text - Purple to blue gradient text
.glow-purple - Purple glow shadow effect
.glow-blue - Blue glow shadow effect
```

## 🔧 Configuration

### Lenis Settings (in SmoothScrollProvider)
```javascript
duration: 1.2
easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
orientation: "vertical"
smoothWheel: true
```

### Cursor Settings (in globals.css)
```css
cursor: none !important; // Hides default cursor globally
```

## 📝 Notes

1. **Video Source**: The VideoHero component uses a placeholder video. Replace the source URL in `components/sections/video-hero.tsx` with your own video.

2. **Cursor on Mobile**: The custom cursor is designed for desktop. Consider adding mobile detection to show default cursor on touch devices.

3. **Performance**: The custom cursor uses RAF for smooth 60fps animation. All animations are optimized with Framer Motion's will-change handling.

4. **Browser Support**: Custom cursor with mix-blend-difference works in modern browsers. Test in your target browsers.

## 🎬 Animation Details

- **Entry Animations**: Fade in + Y translate on scroll
- **Hover Effects**: Scale, rotate, glow, border animations
- **Scroll Trigger**: Uses Framer Motion's `whileInView` with `once: true`
- **Timing**: Staggered delays for sequential reveals

## 🌐 Responsive Design

All components are fully responsive:
- Mobile: Single column layouts
- Tablet: 2 column grids
- Desktop: 3 column grids where applicable
- Text scales appropriately across breakpoints

## 🔮 Future Enhancements

Consider adding:
- Page transitions between routes
- Loading animations
- Parallax effects
- More interactive micro-animations
- Custom video controls
- Dynamic content loading

---

**Built with ❤️ by Creative Frontend Engineering**
