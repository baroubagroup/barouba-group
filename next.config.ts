import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/en/:path*',
        destination: '/fr/:path*',
        permanent: true,
      },
      {
        source: '/privacy',
        destination: '/fr/politique-de-confidentialite',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/fr/a-propos',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/connexion',
        destination: '/admin/login',
      },
      {
        source: '/:locale/connexion',
        destination: '/admin/login',
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self)',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: blob: https:; font-src 'self' data: https:; connect-src 'self' https:; frame-ancestors 'self';",
          },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
