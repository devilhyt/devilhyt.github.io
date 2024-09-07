import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks', '@mantine/carousel'],
  },
  images: {
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
