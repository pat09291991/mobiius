/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mobiius-ml-ai.sgp1.digitaloceanspaces.com',
      },
    ],
  },
}

module.exports = nextConfig
