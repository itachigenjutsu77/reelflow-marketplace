'use client';
import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-charcoal-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-text-primary">
          ReelFlow
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="/browse" className="text-text-secondary hover:text-text-primary transition-colors">
            Browse Editors
          </Link>
          <Link href="/pricing" className="text-text-secondary hover:text-text-primary transition-colors">
            Pricing
          </Link>
          <Link href="/request" className="px-6 py-2 bg-primary hover:bg-primary-light text-white rounded-lg font-semibold transition-all">
            Get Started
          </Link>
        </div>
        
        <button className="md:hidden">
          <Menu className="w-6 h-6 text-text-primary" />
        </button>
      </div>
    </nav>
  );
}
