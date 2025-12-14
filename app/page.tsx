import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <>
      <Navigation />
      {/* Landing Page Components */}
      {/* HeroSection */}
      <section className="min-h-screen flex items-center justify-center bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-text-primary mb-6">
            Your Dedicated
            <br />
            <span className="bg-gradient-to-r from-primary via-accent-purple to-accent-blue bg-clip-text text-transparent">
              Reel Editor
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-12">
            Subscribe to get professional reels delivered on time, every time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-primary hover:bg-primary-light text-white rounded-xl font-semibold">
              Get a Reel Editor
            </button>
            <button className="px-8 py-4 bg-charcoal-800 hover:bg-charcoal-700 text-text-primary rounded-xl font-semibold border border-charcoal-600">
              Browse Editors
            </button>
          </div>
        </div>
      </section>

      {/* Placeholder for other sections */}
      {/* Add HowItWorksSection, SocialProofStrip, WhyDifferentSection, etc. */}
    </>
  );
}
