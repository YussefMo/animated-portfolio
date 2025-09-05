import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import type React from 'react';
import './globals.css';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: 'Youssef Mohammed Ali - Frontend Engineer (React.js, Next.js, React Native)',
  description:
    'Portfolio of Youssef Mohammed Ali, a Frontend Engineer specializing in React.js, Next.js, React Native, and Expo for mobile development',
  generator: 'Next.js',
  keywords: 'Frontend Engineer, React.js, Next.js, React Native, Expo, JavaScript, TypeScript, Web Development, Mobile Development, Portfolio',
  authors: [{ name: 'Youssef Mohammed Ali' }],
  creator: 'Youssef Mohammed Ali',
  publisher: 'Youssef Mohammed Ali',
  openGraph: {
    title: 'Youssef Mohammed Ali - Frontend Engineer',
    description: 'Portfolio of Youssef Mohammed Ali, a Frontend Engineer specializing in React.js, Next.js, React Native, and Expo for mobile development',
    type: 'website',
    locale: 'en_US',
    siteName: 'Youssef Mohammed Ali Portfolio'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Youssef Mohammed Ali - Frontend Engineer',
    description: 'Portfolio of Youssef Mohammed Ali, a Frontend Engineer specializing in React.js, Next.js, React Native, and Expo for mobile development'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Youssef Mohammed Ali",
    "jobTitle": "Frontend Engineer",
    "description": "Frontend Engineer specializing in React.js, Next.js, React Native, and Expo for mobile development",
    "url": "https://www.ymdev.me",
    "sameAs": [
      "https://github.com/YussefMo",
      "https://www.linkedin.com/in/ymdev",
      "https://web.facebook.com/ymdeve"
    ],
    "knowsAbout": ["React.js", "Next.js", "JavaScript", "TypeScript", "Web Development", "React Native", "Expo"]
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
            <p>Portfolio of Youssef Mohammed Ali, a Frontend Developer using modern technologies like React and Next.js</p>
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


