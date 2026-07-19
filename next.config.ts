import type { NextConfig } from 'next';

const isDev = process.env.NODE_ENV === 'development';

const scriptSrc = [
  `'self'`,
  `'unsafe-inline'`,
  // React 19 uses eval() for dev-only debugging (callstack reconstruction).
  // Never used in production — see https://react.dev link
  ...(isDev ? [`'unsafe-eval'`] : [])
].join(' ');

const ContentSecurityPolicy = [
  `default-src 'self'`,
  `script-src ${scriptSrc}`,
  // 'unsafe-inline' required for:
  //   - Next.js critical CSS injection
  //   - Inline style attributes in React components (Toaster, noscript fallback, TSX styles)
  // fonts.googleapis.com for Material Symbols Outlined stylesheet
  `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com`,
  // Project images from Cloudinary, local images from self
  // data: is not used — omitted to reduce attack surface
  `img-src 'self' https://res.cloudinary.com`,
  // Geist, Inter, JetBrains Mono are self-hosted via next/font
  // fonts.gstatic.com for Material Symbols Outlined font files
  `font-src 'self' https://fonts.gstatic.com`,
  // Vercel Analytics and Speed Insights telemetry endpoint
  `connect-src 'self' https://vitals.vercel-analytics.com`,
  // No iframes or workers in this application
  `frame-src 'none'`,
  `frame-ancestors 'none'`,
  `base-uri 'none'`,
  `form-action 'self'`
].join('; ');

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  },
  {
    key: 'Permissions-Policy',
    value:
      'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  },
  {
    key: 'Cross-Origin-Opener-Policy',
    value: 'same-origin'
  }
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'res.cloudinary.com'
      }
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders
      }
    ];
  }
};

export default nextConfig;
