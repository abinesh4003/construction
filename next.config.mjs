/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  images: {
    domains: [], // add your allowed image domains here
  },
  async redirects() {
    return [
      // Non-www HTTP/HTTPS -> www HTTPS
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'vargheseconstruction.vercel.app' }],
        destination: 'https://www.vargheseconstruction.vercel.app/:path*',
        permanent: true,
      },
      {
        source: '/',
        has: [{ type: 'host', value: 'vargheseconstruction.vercel.app' }],
        destination: 'https://www.vargheseconstruction.vercel.app/',
        permanent: true,
      },

      // Optional: ensure root www HTTP -> HTTPS
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.vargheseconstruction.vercel.app' }],
        destination: 'https://www.vargheseconstruction.vercel.app/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
