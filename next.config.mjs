/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'r-xx.bstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'q-xx.bstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'cf.bstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
      },
      {
        protocol: 'https',
        hostname: 'sunbooking.s3.amazonaws.com',
      },
    ],
  }
};

export default nextConfig;
