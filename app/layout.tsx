import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import type React from 'react';
import './globals.css';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: 'Youssef Mohammed Ali - Frontend Developer (React.js,Next.js)',
  description:
    'Portfolio of Youssef Mohammed Ali, a Frontend Developer using modern technologies like react and next',
  generator: 'Next.js'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SpeedInsights />
        <Analytics />
        <Toaster />
        {children}
      </body>
    </html>
  );
}


