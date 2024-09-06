/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['img.pokemondb.net'], // Ensure the domain is correct
  },
};

module.exports = nextConfig;
