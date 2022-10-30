/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://randomuser.me/',
        port: '',
        pathname: '',
      },
    ],
  },
}
