/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  images: {
    domains: [],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          { type: 'host', value: 'vargheseconstruction.vercel.app' } // apex domain
        ],
        destination: 'https://vargheseconstruction.vercel.app/:path*', // redirect to www
        permanent: true, // 301 redirect
      },
    ];
  },
};

export default nextConfig;
