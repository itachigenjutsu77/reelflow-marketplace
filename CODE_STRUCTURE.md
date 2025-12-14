# ReelFlow Marketplace - Complete Code Structure & Component Guide

## Component Implementation Overview

This document provides a complete guide for implementing all components for the ReelFlow Marketplace frontend. All components listed here were provided in the initial design specification and should be created in the `components/` and `app/` directories.

## Components List & File Structure

### Core Page Components

#### 1. **HeroSection.tsx**
- Landing page hero section with animated gradient background
- Features main value proposition and CTA buttons
- Uses Framer Motion for smooth animations
- Displays stat cards with animations

#### 2. **SocialProofStrip.tsx**
- Displays "Trusted by" section with brand logos
- Responsive grid layout with opacity effects
- Static component (no state management needed)

#### 3. **HowItWorksSection.tsx**
- Three-step process visualization
- Animated step cards with connecting lines
- Step number badges with glow effects
- Icon integration using lucide-react

#### 4. **WhyDifferentSection.tsx**
- Three-column feature section
- Feature cards with icon containers
- Gradient backgrounds and hover effects
- Decorative radial gradient background

#### 5. **BrowseEditorsPage.tsx**
- Filter pills for editor categories
- Responsive editor grid (2-3 columns)
- EditorCard component integration
- State management for category filtering

#### 6. **EditorCard.tsx**
- Displays editor avatar/video preview
- Shows availability status with pulsing indicator
- Displays niche badge and style tags
- "View Profile" CTA button
- Hover effects and transitions

#### 7. **EditorProfilePage.tsx**
- Hero section with editor details
- Quick stats display (delivery time, reels, rating)
- Portfolio grid (8 video preview placeholders)
- SLA & delivery guarantee section
- "Subscribe & Get Matched" CTA

#### 8. **PricingPage.tsx**
- Three pricing tier cards (Starter, Growth, Pro)
- Popular tier with emphasis styling
- Feature lists with checkmark icons
- Pricing displays and plan details
- Trust statement footer

#### 9. **PostRequestPage.tsx**
- Multi-step form (3 steps + confirmation)
- Progress indicator with step tracking
- File upload interface
- Form inputs for clips and details
- Confirmation screen with success message

#### 10. **Navigation.tsx**
- Fixed header with backdrop blur
- Logo and navigation links
- Mobile menu toggle (optional)
- Secondary CTA button

### Supporting Components

#### App Layout Structure
```
app/
├── layout.tsx          # Root layout with Navigation
├── page.tsx            # Landing page (HeroSection, HowItWorks, etc.)
├── browse/
│   └── page.tsx        # BrowseEditorsPage
├── editor/
│   └── [id]/
│       └── page.tsx    # EditorProfilePage
├── pricing/
│   └── page.tsx        # PricingPage
└── request/
    └── page.tsx        # PostRequestPage
```

## Design System Implementation

### Color Tokens (TailwindCSS)
```
Primary: #6366F1 (Indigo)
Accent Purple: #A855F7
Accent Blue: #3B82F6
Black: #0A0A0A
Charcoal: #121212 - #2D2D2D
Text Primary: #FAFAFA
Text Secondary: #A1A1A1
```

### Animation Presets (Framer Motion)
- `fadeInUp` - Basic fade and slide animation
- `staggerContainer` - Stagger children animations
- `scaleOnHover` - Subtle scale on hover
- `glowPulse` - Pulsing glow effect

## Getting Started

### Step 1: Set Up Project
```bash
git clone https://github.com/itachigenjutsu77/reelflow-marketplace.git
cd reelflow-marketplace
npm install
```

### Step 2: Create Component Files
Create all component files in `components/` directory as listed above.

### Step 3: Implement Page Routes
Create page files in `app/` directory for each route.

### Step 4: Add Global Styles
Create `styles/globals.css` with TailwindCSS directives:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Step 5: Test Development Build
```bash
npm run dev
```

## Component Dependencies

### External Libraries
- `framer-motion` - Animations
- `lucide-react` - Icons
- `tailwindcss` - Styling
- `next` - Framework
- `react` - UI Library

### Icon Usage (lucide-react)
Common icons used:
- ArrowRight
- Sparkles
- UserPlus
- Upload
- Zap
- Badge
- Play
- CheckCircle2
- Clock
- Shield
- Target
- Star
- Menu

## Styling Guidelines

### Spacing
- Use Tailwind spacing scale (0.25rem - 28rem)
- Custom spacing: 18 (4.5rem), 22 (5.5rem), 26 (6.5rem)

### Typography
- Display Font: 'Cal Sans', 'Inter'
- Body Font: 'Inter', 'system-ui', 'sans-serif'
- Headings: font-bold, text-6xl-7xl
- Body: text-base, leading-relaxed

### Border Radius
- Small components: rounded-lg (0.5rem)
- Medium components: rounded-xl (0.75rem)
- Large components: rounded-2xl (1rem)

## Responsive Design

Breakpoints (Tailwind default):
- Mobile: < 640px (default)
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px

All components should use responsive classes:
```
text-4xl md:text-5xl lg:text-6xl
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
```

## State Management

For this MVP, use React hooks:
- `useState` - Component state
- `useEffect` - Side effects
- No external state management library needed initially

## Mock Data

Sample mock data structures:

```typescript
const MOCK_EDITORS = [
  {
    id: 1,
    name: 'Alex Rivera',
    niche: 'Restaurant & Food',
    avatar: '/avatars/alex.jpg',
    videoPreview: '/previews/alex.mp4',
    styles: ['Cinematic', 'Fast-Paced', 'Trending Audio'],
    available: true,
    reelsDelivered: 450,
  },
  // ... more editors
];

const PRICING_PLANS = [
  {
    name: 'Starter',
    price: 499,
    reels: '4 reels/month',
    // ... more properties
  },
  // ... more plans
];
```

## Next Steps

1. Clone the repository
2. Install dependencies: `npm install`
3. Create all component files
4. Implement page routes
5. Test with `npm run dev`
6. Customize colors, text, and images
7. Deploy to Vercel: `vercel`

## Troubleshooting

- **Tailwind styles not applying**: Ensure content paths in `tailwind.config.js` are correct
- **Images not loading**: Place images in `public/` folder and reference as `/image.jpg`
- **Icons not showing**: Verify `lucide-react` is installed: `npm install lucide-react`
- **Animations not working**: Ensure `framer-motion` is installed and components use motion tags

## Support

For issues or questions, refer to:
- Next.js Docs: https://nextjs.org/docs
- Tailwind Docs: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/
- Lucide Icons: https://lucide.dev/
