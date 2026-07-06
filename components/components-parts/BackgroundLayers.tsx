'use client';

import WarpNet from './WarpNet';

export default function BackgroundLayers() {
  return (
    <>
      <WarpNet />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-surface-container-highest/20 via-background to-background" />
      </div>
    </>
  );
}
