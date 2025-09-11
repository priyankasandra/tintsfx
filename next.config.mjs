/** @type {import('next').NextConfig} */
const nextConfig = {
  // Standard Next.js configuration for Netlify
  trailingSlash: true,
  async redirects() {
    return [
      // Redirect all old service subpages to the new services page
      {
        source: '/services/brandidentity',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/brand-identity',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/website',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/web-design',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/consulting',
        destination: '/services',
        permanent: true,
      },
      // Catch-all for any other service subpages (but not the main /services page)
      {
        source: '/services/:slug+',
        destination: '/services',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
