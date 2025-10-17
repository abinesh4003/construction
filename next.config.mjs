/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
        ],
    async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          { type: 'host', value: 'vargheseconstruction.vervel.app' } // apex domain
        ],
        destination: 'https://vargheseconstruction.vercel.app/:path*', // redirect to www
        permanent: true, // 301 redirect
      },
    ];
  },
    }
};

export default nextConfig;

// async redirects() {
//     return [
//       {
//         source: '/:path*',
//         has: [
//           { type: 'host', value: 'vargheseconstruction.com' } // apex domain
//         ],
//         destination: 'https://www.vargheseconstruction.com/:path*', // redirect to www
//         permanent: true, // 301 redirect
//       },
//     ];
//   },