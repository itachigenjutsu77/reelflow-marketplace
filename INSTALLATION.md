# ReelFlow Marketplace - Installation & Setup Guide

## Prerequisites
- Node.js 18+ and npm/yarn
- Git

## Quick Start

```bash
# Clone the repository
git clone https://github.com/itachigenjutsu77/reelflow-marketplace.git
cd reelflow-marketplace

# Install dependencies
npm install
# or
yarn install

# Run development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
reelflow-marketplace/
├── app/
│   ├── page.tsx              # Landing page
│   ├── browse/               # Browse editors page
│   │   └── page.tsx
│   ├── editor/               # Editor profile page
│   │   └── [id]/
│   │       └── page.tsx
│   ├── pricing/              # Pricing page
│   │   └── page.tsx
│   ├── request/              # Post reel request flow
│   │   └── page.tsx
│   └── layout.tsx            # Root layout
├── components/
│   ├── Navigation.tsx        # Main navigation
│   ├── HeroSection.tsx       # Landing hero
│   ├── HowItWorksSection.tsx # How it works section
│   ├── WhyDifferentSection.tsx
│   ├── SocialProofStrip.tsx  # Social proof
│   ├── BrowseEditorsPage.tsx
│   ├── EditorCard.tsx        # Reusable editor card
│   ├── EditorProfilePage.tsx
│   ├── PricingPage.tsx
│   └── PostRequestPage.tsx
├── lib/
│   └── animations.ts         # Framer Motion presets
├── styles/
│   └── globals.css          # Global styles
├── public/                   # Static assets
├── tailwind.config.js        # Tailwind configuration
├── next.config.js            # Next.js configuration
├── tsconfig.json             # TypeScript config
└── package.json              # Dependencies
```

## Key Technologies

- **Next.js 14** - React framework with App Router
- **TailwindCSS 3** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **TypeScript** - Type safety

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Design System

### Colors
- **Primary**: `#6366F1` (Indigo)
- **Black**: `#0A0A0A`
- **Charcoal**: `#121212` - `#2D2D2D`
- **Text Primary**: `#FAFAFA`
- **Text Secondary**: `#A1A1A1`

See `tailwind.config.js` for complete color palette.

## Environment Setup

Create a `.env.local` file (optional for API calls):

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Build & Deploy

```bash
# Build for production
npm run build

# Test production build locally
npm start
```

Deploy to Vercel:

```bash
npm i -g vercel
vercel
```

## Documentation Files

- `README.md` - Project overview
- `DESIGN_SYSTEM.md` - Complete design tokens
- `COMPONENTS.md` - Component documentation
- `API_INTEGRATION.md` - Backend integration guide

## Support & Feedback

For issues or suggestions, create a GitHub issue or email support@reelflow.dev
