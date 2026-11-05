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
};

export default withNextIntl(nextConfig);
