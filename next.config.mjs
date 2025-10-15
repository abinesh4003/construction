/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: false,
    images: {
        domains: [
        ],

    },
      async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'vargheseconstruction.com' }],
        destination: 'https://www.vargheseconstruction.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.vargheseconstruction.com' }],
        missing: [{ type: 'host', value: 'https://www.vargheseconstruction.com' }],
        destination: 'https://www.vargheseconstruction.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
