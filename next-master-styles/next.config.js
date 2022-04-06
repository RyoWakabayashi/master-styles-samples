/** @type {import('next').NextConfig} */

const rewrites = async () => {
  return [
    {
      source: '/',
      destination: '/colors'
    }
  ]
}

const nextConfig = {
  reactStrictMode: true,
  rewrites
}

module.exports = nextConfig
