# reelflow-marketplace
# 🎬 ReelFlow Marketplace

> **Premium Dark-Themed Reel Editor Marketplace**
>
> Subscription-based marketplace connecting brands with dedicated niche reel editors. Built with Next.js, TailwindCSS, and Framer Motion.

## Features

✨ **Premium Design System**
- Dark-first aesthetic inspired by Blackbox.ai
- High contrast typography for clarity
- Smooth micro-interactions with Framer Motion
- Professional "SaaS" feel despite MVP backend

🎯 **Core Features**
- **Landing Page** - Hero section with value prop and social proof
- **Browse Editors** - Curated grid of niche-specialized editors
- **Editor Profiles** - Detailed editor portfolios with SLA guarantees
- **Pricing Page** - Transparent subscription tiers (Starter, Growth, Pro)
- **Request Flow** - Multi-step form for posting reel requests
- **Responsive Design** - Mobile-first approach across all pages

🚀 **Technology Stack**
- Next.js 14 with App Router
- TailwindCSS 3 with custom design tokens
- Framer Motion for animations
- TypeScript for type safety
- Lucide React for icons

## Quick Start

### Prerequisites
```bash
Node.js 18+ and npm/yarn
Git
```

### Installation

```bash
# Clone repository
git clone https://github.com/itachigenjutsu77/reelflow-marketplace.git
cd reelflow-marketplace

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
reelflow-marketplace/
├── app/                      # Next.js App Router pages
│   ├── page.tsx             # Landing page
│   ├── browse/page.tsx      # Browse editors
│   ├── editor/[id]/page.tsx # Editor profile
│   ├── pricing/page.tsx     # Pricing page
│   ├── request/page.tsx     # Reel request flow
│   └── layout.tsx           # Root layout
├── components/              # Reusable React components
│   ├── Navigation.tsx
│   ├── HeroSection.tsx
│   ├── HowItWorksSection.tsx
│   ├── SocialProofStrip.tsx
│   ├── EditorCard.tsx
│   ├── PricingPage.tsx
│   └── PostRequestPage.tsx
├── styles/
│   └── globals.css         # Global Tailwind CSS
├── lib/
│   └── animations.ts       # Framer Motion presets
├── public/                 # Static assets
├── tailwind.config.js      # Tailwind configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies
```

## Design System

### Colors
```
Primary Indigo: #6366F1
Accent Purple: #A855F7
Accent Blue: #3B82F6
Black: #0A0A0A
Charcoal: #121212 - #2D2D2D
Text Primary: #FAFAFA
Text Secondary: #A1A1A1
```

### Typography
- Display: Cal Sans, Inter
- Body: Inter, system-ui, sans-serif
- Headings: font-bold, text-6xl-7xl
- Body: text-base, leading-relaxed

## Available Scripts

```bash
npm run dev    # Start development server
npm run build  # Build for production
npm run start  # Start production server
npm run lint   # Run ESLint
```

## Documentation

- **[INSTALLATION.md](./INSTALLATION.md)** - Setup and installation guide
- **[CODE_STRUCTURE.md](./CODE_STRUCTURE.md)** - Component structure and implementation
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Deploy to Vercel and production setup

## Component Overview

### Pages
1. **Landing** - Hero, How It Works, Why Different, Social Proof
2. **Browse** - Filter pills, editor grid cards
3. **Profile** - Editor details, portfolio, SLA, subscribe button
4. **Pricing** - Three-tier plans, feature comparison
5. **Request** - Multi-step form with progress tracking

### Reusable Components
- `EditorCard` - Editor profile card with status
- `Navigation` - Fixed header with logo and CTAs
- `PricingCard` - Reusable pricing tier card

## Deployment

Deploy to Vercel in one click:

1. Push to GitHub
2. Connect repo to Vercel
3. Automatic deployments on push
4. HTTPS and CDN included

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## Performance

- ⚡ Next.js automatic code splitting
- 📦 Optimized images with next/image
- 🎨 Tailwind CSS tree-shaking
- 🚀 Vercel Edge Network CDN

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## Future Enhancements

- [ ] User authentication (NextAuth.js)
- [ ] Editor management dashboard
- [ ] File upload system for clips
- [ ] Payment processing (Stripe)
- [ ] Email notifications
- [ ] Analytics dashboard
- [ ] Mobile app (React Native)

## Contributing

Contributions welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see LICENSE file for details

## Support

For questions or issues:
- Open a GitHub issue
- Check documentation files
- Email: support@reelflow.dev

## Acknowledgments

- Design inspiration from Blackbox.ai
- Built with Next.js and TailwindCSS
- Icons from Lucide React
- Animations with Framer Motion

---

**Made with ❤️ for content creators and brands**
