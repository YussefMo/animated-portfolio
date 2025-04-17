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

  if (!mounted) return null;
  if (loading) return <Loading />;

  return (
    <div className="min-h-screen overflow-hidden bg-black text-white">
      {children}
    </div>
  );
}

export default LoaderTrigger;
