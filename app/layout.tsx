import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ReelFlow Marketplace - Dedicated Reel Editors',
  description: 'Subscribe to dedicated niche reel editors. SLA-backed delivery, professional results. No gigs, no delays.',
  keywords: 'reel editor, video editor, content creation, marketplace, subscription',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
