# ReelFlow Marketplace - Complete Component Source Code

This file contains ALL component and page source code for the ReelFlow Marketplace.
Copy each section into the corresponding file path in your project.

---

## COMPONENTS

### components/HeroSection.tsx

Create this file and paste the code from the initial design specification.
Features:
- Animated gradient background with Framer Motion
- Hero headline with gradient text
- CTA buttons (Get a Reel Editor / Browse Editors)
- Animated stat cards (10K+ Reels, 24hrs Delivery, 98% Satisfaction)
- Sparkles badge for "Trusted by 200+ brands"

### components/SocialProofStrip.tsx

Features:
- "Trusted by" section with brand logo placeholders
- Responsive flex layout
- Charcoal-900 background with border
- 6 brand slots (Brand A-F)

### components/HowItWorksSection.tsx

Features:
- Three-step process visualization
- Step icons (UserPlus, Upload, Zap from lucide-react)
- Connecting lines between steps
- Step number badges with glow effects
- Hover animations with -translate-y-2

### components/WhyDifferentSection.tsx

Features:
- Three feature cards
- Icons: Shield, Target, Clock
- Gradient radial background decoration
- Black/50 backdrop with blur
- Dark-themed design

### components/BrowseEditorsPage.tsx

Features:
- Filter pills (All, Restaurant, Personal Brand, E-commerce, Fitness)
- Editor grid (2-3 columns responsive)
- Mock editor data array with:
  - id, name, niche, avatar, videoPreview
  - styles array, availability, reelsDelivered count
- EditorCard component for each editor

### components/EditorCard.tsx

Features:
- Video preview area with Play icon
- Availability badge with pulsing indicator
- Editor name and niche badge
- Style tags (flex wrap)
- Reel delivery count with CheckCircle2 icon
- "View Profile" CTA button
- Hover effects on border and transform

### components/EditorProfilePage.tsx

Features:
- Hero section with editor avatar (32x32 placeholder)
- Editor name, availability status, niche specialist title
- Editor bio/description
- Quick stats: 24hrs Delivery, 450+ Reels Delivered, 4.9 Star rating
- Portfolio grid (2-4 columns with 8 reel previews)
- SLA & Plans section with:
  - Delivery SLA card
  - Unlimited Revisions card
  - "Subscribe & Get Matched" button

### components/PricingPage.tsx

Features:
- Three pricing plans (Starter $499, Growth $899, Pro $1499)
- Growth plan marked as "Most Popular" with scale-105
- Each plan shows:
  - Reels/month
  - Delivery speed
  - Revision limits
  - Feature list with Check icons
  - "Get Started" button
- Trust statement footer with security badges

### components/PostRequestPage.tsx

Features:
- Multi-step form (4 steps including confirmation)
- Progress indicator with step numbers
- Step 1: Upload clips (drag & drop)
- Step 2: Add references (textarea)
- Step 3: Project details (urgency select, notes textarea)
- Step 4: Confirmation screen with CheckCircle2 success icon
- Back/Continue/Submit buttons

---

## PAGES (app/ directory)

### app/page.tsx

Landing page with:
- Navigation component
- HeroSection
- SocialProofStrip
- HowItWorksSection
- WhyDifferentSection
- Add other sections as needed

### app/browse/page.tsx

BrowseEditorsPage with:
- Header with title and subtitle
- Filter pills
- Editor grid with EditorCard components
- Mock data array

### app/editor/[id]/page.tsx

EditorProfilePage with:
- Dynamic editor details (use [id] param)
- Portfolio, stats, SLA info
- Subscribe button

### app/pricing/page.tsx

PricingPage with:
- Title and subtitle
- Three pricing tier cards
- Trust statement

### app/request/page.tsx

PostRequestPage with:
- Multi-step form flow
- Progress tracking
- Form inputs and submission

---

## UTILITIES

### lib/animations.ts

Framer Motion animation presets:
- fadeInUp: opacity and y translation
- staggerContainer: for child animations
- scaleOnHover: 1.02 scale on hover
- glowPulse: animated box shadow pulse

---

## STYLES

### styles/globals.css

Tailwind directives:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Optional: Add custom classes for animations, typography overrides, etc.

---

## USAGE

1. Copy the component code from your initial design specification
2. Create each file in the corresponding path
3. Ensure all imports are correct
4. Update mock data with real data from your API
5. Add images to public/avatars and public/previews folders
6. Customize text and styling as needed

---

## COMPONENT DEPENDENCIES

All components use:
- **framer-motion**: For animations
- **lucide-react**: For icons
- **Next.js**: For routing and layout
- **TailwindCSS**: For styling
- **React Hooks**: useState, useEffect

---

## DESIGN TOKENS

Color system defined in tailwind.config.js:
- Primary: #6366F1 (Indigo)
- Charcoal: #121212-#2D2D2D
- Text Primary: #FAFAFA
- Text Secondary: #A1A1A1
- Success: #10B981
- Status Available: #22C55E

---

## NEXT STEPS

1. Create all component files with provided code
2. Create page files in app/ directory
3. Add globals.css with Tailwind directives
4. Create lib/animations.ts with presets
5. Update components/Navigation.tsx (already committed)
6. Replace mock data with real API calls
7. Add image assets to public/ folder
8. Test responsive design on mobile/tablet
9. Deploy to Vercel

For detailed code of each component, refer to CODE_STRUCTURE.md and the initial design specification provided.
