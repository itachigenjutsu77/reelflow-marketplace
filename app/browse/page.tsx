'use client';
import { useState } from 'react';
import { Badge, Play, CheckCircle2 } from 'lucide-react';
import Navigation from '@/components/Navigation';

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
];

export default function BrowseEditorsPage() {
  const [filter, setFilter] = useState('all');
  
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-black py-20 pt-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-text-primary mb-4">Browse Elite Editors</h1>
            <p className="text-xl text-text-secondary">Handpicked professionals. Limited availability.</p>
          </div>

          <div className="flex gap-3 mb-12 overflow-x-auto pb-2">
            {['All', 'Restaurant', 'Personal Brand', 'E-commerce', 'Fitness'].map((cat) => (
              <button
                key={cat}
                className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                  filter === cat.toLowerCase()
                    ? 'bg-primary text-white'
                    : 'bg-charcoal-800 text-text-secondary hover:bg-charcoal-700'
                }`}
                onClick={() => setFilter(cat.toLowerCase())}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_EDITORS.map((editor) => (
              <EditorCard key={editor.id} editor={editor} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function EditorCard({ editor }: any) {
  return (
    <div className="group bg-charcoal-900 rounded-2xl border border-charcoal-700 overflow-hidden hover:border-primary/50 transition-all duration-300">
      <div className="relative aspect-[9/16] bg-charcoal-800 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Play className="w-16 h-16 text-white/80 group-hover:scale-110 transition-transform" />
        </div>
        {editor.available && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-status-available/20 backdrop-blur-md rounded-full flex items-center gap-2">
            <div className="w-2 h-2 bg-status-available rounded-full animate-pulse" />
            <span className="text-xs text-white font-medium">Available</span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-text-primary mb-2">{editor.name}</h3>
        
        <div className="flex items-center gap-2 mb-4">
          <Badge className="w-4 h-4 text-primary" />
          <span className="text-sm text-text-secondary">{editor.niche}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {editor.styles.map((style: string) => (
            <span key={style} className="px-3 py-1 bg-charcoal-800 rounded-full text-xs text-text-secondary">
              {style}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mb-6 pb-6 border-b border-charcoal-700">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-success" />
            <span className="text-sm text-text-secondary">{editor.reelsDelivered} reels</span>
          </div>
        </div>

        <button className="w-full py-3 bg-primary hover:bg-primary-light text-white font-semibold rounded-xl transition-all duration-300">
          View Profile
        </button>
      </div>
    </div>
  );
}
