import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import type React from 'react';
import './globals.css';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: 'Youssef Mohammed Ali (YoussefMo | YmDev) - Frontend Engineer (React, Next.js, React Native, Expo)',
  description:
    'Portfolio of Youssef Mohammed Ali (also known as YoussefMo / YmDev), a Frontend Engineer specializing in React, Next.js, React Native, and Expo for mobile development. Builder of SaaS apps, AI-integrated dashboards, and cross-platform experiences.',
  generator: 'Next.js',
  keywords: [
    'Youssef Mohammed Ali',
    'YoussefMo',
    'YmDev',
    'Frontend Engineer',
    'React Developer',
    'Next.js Developer',
    'React Native Developer',
    'Expo Developer',
    'JavaScript',
    'TypeScript',
    'SaaS Developer',
    'AI Frontend Engineer',
    'Web Development',
    'Mobile Development'
  ],
  authors: [{ name: 'Youssef Mohammed Ali' }],
  creator: 'Youssef Mohammed Ali',
  publisher: 'Youssef Mohammed Ali',
  openGraph: {
    title: 'Youssef Mohammed Ali (YoussefMo | YmDev) - Frontend Engineer',
    description:
      'Frontend Engineer skilled in React, Next.js, Expo, React Native, and AI integrations. Portfolio of Youssef Mohammed Ali (YoussefMo | YmDev).',
    url: 'https://ymdev.me',
    type: 'website',
    locale: 'en_US',
    siteName: 'Youssef Mohammed Ali Portfolio',
    images: [
      {
        url: 'https://ymdev.me/preview.png',
        width: 1200,
        height: 630,
        alt: 'Youssef Mohammed Ali Portfolio - YoussefMo (YmDev)',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Youssef Mohammed Ali (YoussefMo | YmDev) - Frontend Engineer',
    description:
      'Frontend Engineer specializing in React, Next.js, Expo, and React Native. Portfolio of Youssef Mohammed Ali (YoussefMo | YmDev).',
    images: ['https://ymdev.me/preview.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://ymdev.me',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Youssef Mohammed Ali",
    "alternateName": ["YoussefMo", "YmDev"],
    "jobTitle": "Frontend Engineer",
    "description":
      "Frontend Engineer specializing in React, Next.js, React Native, and Expo. Builder of SaaS apps, e-commerce dashboards, and AI-integrated solutions.",
    "url": "https://ymdev.me",
    "sameAs": [
      "https://github.com/YussefMo",
      "https://www.linkedin.com/in/ymdev",
      "https://web.facebook.com/ymdeve"
    ],
    "knowsAbout": [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Web Development",
      "React Native",
      "Expo",
      "AI Frontend Engineering",
      "SaaS Development"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <noscript>
          <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#000', color: '#fff', minHeight: '100vh' }}>
            <h1>Youssef Mohammed Ali - Frontend Developer</h1>
            <p>Portfolio of Youssef Mohammed Ali (YoussefMo / YmDev), building modern apps with React, Next.js, and React Native.</p>
            <p>Please enable JavaScript to view the full interactive portfolio.</p>
          </div>
        </noscript>
        <SpeedInsights />
        <Analytics />
        <Toaster />
        {children}
      </body>
    </html>
  );
}
