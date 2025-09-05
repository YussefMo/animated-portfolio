'use client'

import React, { useEffect, useState } from 'react';
import Loading from '@/components/loading';

function LoaderTrigger({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Show loading for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  // Render initial content for SEO even before mounting
  if (!mounted) {
    return (
      <div className="min-h-screen overflow-hidden bg-black text-white" style={{ opacity: 0 }}>
        <div className="sr-only">
          <h1>Youssef Mohammed Ali - Frontend Developer</h1>
          <p>Portfolio showcasing React.js and Next.js projects</p>
          <nav>
            <ul>
              <li>About</li>
              <li>Services</li>
              <li>Work</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
        {children}
      </div>
    );
  }
  
  if (loading) return <Loading />;

  return (
    <div className="min-h-screen overflow-hidden bg-black text-white">
      {children}
    </div>
  );
}

export default LoaderTrigger;
